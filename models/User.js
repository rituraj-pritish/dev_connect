const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  local: {
    email: String,
    password: String
  },
  google: {
    id: String,
    email: String
  },
  avatar: String,
  date: {
    type: Date,
    default: new Date()
  }

})

module.exports = User = mongoose.model('user',userSchema)