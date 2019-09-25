const express = require('express')
const router = express.Router()
const passport = require('passport')
const ProfilesController = require('../controllers/profilesController')

//@route      Get /profile/me
//@desc       get current user's profile
//@access     Private
router.get('/me', ProfilesController.ownProfile)

//@route      POST /profile
//@desc       create or update current user profile
//@access     Private
router.post('/',ProfilesController.updateProfile)

//@route      GET /profile
//@desc       get all profiles
//@access     Public
router.get('/',ProfilesController.getProfiles)

//@route      GET /profile/user/:user_id
//@desc       get profile by user id
//@access     Private
router.get('/user/:user_id',ProfilesController.getProfileById)

//@route      DELETE /profile
//@desc       delete profile,user and posts
//@access     Private
router.delete('/',ProfilesController.deleteProfile)

//@route      PUT /profile/experience
//@desc       update profile experience
//@access     Private
router.put('/experience',ProfilesController.updateExperience)

//@route      DELETE /profile/experience
//@desc       delete experience 
//@access     Private
router.delete('/experience/:exp_id',ProfilesController.deleteExperience)

//@route      PUT /profile/education
//@desc       update profile education
//@access     Private
router.put('/education',ProfilesController.updateEducation)

//@route      DELETE /profile/education
//@desc       delete education 
//@access     Private
router.delete('/education/:edu_id',ProfilesController.deleteEducation)

//@route      GET /profile/github/:username
//@desc       get user repos from hithub 
//@access     Public
router.get('/github/:username',ProfilesController.getRepos)

module.exports = router;