const request = require('request')
const keys = require('../config/keys')
const Profile = require('../models/Profile');
const User = require('../models/User');

module.exports = {
  ownProfile: async (req, res) => {
  
    try {
      const profile = await Profile.findOne({
        id: req.user.id
      }).populate('user', ['name', 'avatar']);

      if (!profile) {
        res.status(400).json({ msg: 'There is no profile for this user' });
      }

      res.json(profile);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },

  updateProfile: async (req, res) => {
    const {
      company,
      location,
      bio,
      status,
      githubUsername,
      skills,
      youtube,
      facebook,
      twitter,
      instagram,
      linkedIn
    } = req.body;

    //build profile object
    const profileFields = {};
    // profileFields.user = req.user.id;
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubUsername) profileFields.githubUsername = githubUsername;

    if (skills) {
      profileFields.skills = skills.split(',').map(skill => skill.trim());
    }

    //build social object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (facebook) profileFields.social.facebook = facebook;
    if (twitter) profileFields.social.twitter = twitter;
    if (linkedIn) profileFields.social.linkedIn = linkedIn;
    if (instagram) profileFields.social.instagram = instagram;
    try {
      let profile = await Profile.findOne({
        user: req.user.id
      });

      if (profile) {
        //update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }
      console.log('called');
      //create
      profile = await new Profile(profileFields).save();

      res.json(profile);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },

  getProfiles: async (req, res) => {
    try {
      const profiles = await Profile.find().populate('user', [
        'name',
        'avatar'
      ]);
      res.json(profiles);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },

  getProfileById: async (req, res) => {
    try {
      const profile = await Profile.findOne({
        user: req.params.user_id
      }).populate('user', ['name', 'avatar']);

      if (!profile) {
        return res.status(400).json({ msg: 'Profile not found' });
      }
      res.json(profile);
    } catch (err) {
      console.error(err);
      if (err.kind == 'ObjectId') {
        return res.status(400).json({ msg: 'Profile not found' });
      }
      res.status(500).send('Server Error');
    }
  },

  deleteProfile: async (req, res) => {
    try {
      //todo remove users posts

      //remove profile
      await Profile.findOneAndRemove({ user: req.user.id });

      //remove user
      await User.findOneAndRemove({ _id: req.user.id });

      res.json({ msg: 'User removed' });
    } catch (err) {
      console.error(err);
      if (err.kind == 'ObjectId') {
        return res.status(400).json({ msg: 'Profile not found' });
      }
      res.status(500).send('Server Error');
    }
  },

  updateExperience: async (req, res) => {
    const {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    } = req.body;

    const newExp = {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    };
    try {
      const profile = await Profile.findOne({
        user: req.user.id
      });
      profile.experience.unshift(newExp);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },

  deleteExperience: async (req, res) => {
    try {
      const profile = await Profile.findOne({
        user: req.user.id
      });

      //get remove index
      const removeIndex = profile.experience
        .map(item => item.id)
        .indexOf(req.params.exp_id);

      profile.experience.splice(removeIndex, 1);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },

  updateEducation: async (req, res) => {
    const {
      school,
      degree,
      fieldOfStudy,
      from,
      to,
      current,
      description
    } = req.body;

    const newEdu = {
      school,
      degree,
      fieldOfStudy,
      from,
      to,
      current,
      description
    };
    try {
      const profile = await Profile.findOne({
        user: req.user.id
      });
      profile.education.unshift(newEdu);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },

  deleteEducation: async (req, res) => {
    try {
      const profile = await Profile.findOne({
        user: req.user.id
      });

      //get remove index
      const removeIndex = profile.education
        .map(item => item.id)
        .indexOf(req.params.edu_id);

      profile.education.splice(removeIndex, 1);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },

  getRepos: async (req,res) => {
    try {
      const options = {
        uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc&client_id=${keys.githubClientId}&client_secret=${keys.githubSecret}`,
        headers: { 'user-agent': 'node-js'}
      }

      request(options,(error,response,body) => {
        if(error) console.error(error)

        if(response.statusCode !== 200) {
          return res.status(404).json({msg: 'No Github profile found'})
        }

        res.json(JSON.parse(body))
      })
    } catch (err) {
      console.error(err)
      res.status(500).send('Server Error')
    }
  }
};
