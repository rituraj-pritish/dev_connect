const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
  company: String,
  location: String,
  status: String,
  skills: [String],
  bio: String,
  githubUsername: String,

  experience: [
    {
      title: String,
      company: String,
      location: String,
      from: Date,
      to: Date,
      current: Boolean,
      description: String
    }
  ],

  education: [
    {
      school: String,
      degree: String,
      fieldOfStudy:  String,
      from: Date,
      to: Date,
      current: Boolean,
      description: String
    }
  ],
  social: {
    youtube: String,
    twitter: String,
    facebook: String,
    linkedIn: String,
    instagram: String
  },
  date: {
    type: Date,
    default: new Date()
  }
})

module.exports = Profile = mongoose.model('profile',profileSchema)