const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  text: String,
  name: String,
  avatar: String,
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      },
      text: String,
      name: String,
      avatar: String,
      date: {
        type: Date,
        default: new Date()
      }
    }
  ],
  date: {
    type: Date,
    default: new Date()
  }
});

module.exports = Post = mongoose.model('post', postSchema);
