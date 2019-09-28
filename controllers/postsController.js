const Post = require('../models/Post');
const Profile = require('../models/Profile');
const User = require('../models/User');

module.exports = {
  createPost: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select(
        '-password'
      );

      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });

      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },

  getPosts: async (req, res) => {
    try {
      //-1 for newest first
      const posts = await Post.find().sort({ date: -1 });

      res.send(posts);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },

  getPostById: async (req, res) => {
    try {
      const post = await Post.findById(req.params.post_id);

      if (!post) {
        return res.status(404).json({ msg: 'No post found' });
      }

      res.send(posts);
    } catch (err) {
      console.error(err);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'No post found' });
      }
      res.status(500).send('Server Error');
    }
  },

  deletePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.post_id);

      //check user
      if (post.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }

      await post.remove();
      res.send('deleted');
    } catch (err) {
      console.error(err);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'No post found' });
      }
      res.status(500).send('Server Error');
    }
  },

  like: async (req, res) => {
    try {
      const post = await Post.findById(req.params.post_id);

      //check if post is already liked by user
      if (
        post.likes.filter(
          like => like.user.toString() === req.user.id
        ).length > 0
      ) {
        return res.status(400).json({ msg: 'Post already liked' });
      }

      post.likes.unshift({ user: req.user.id });

      await post.save();

      res.json(post.likes);
    } catch (err) {
      console.error(err);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'No post found' });
      }
      res.status(500).send('Server Error');
    }
  },

  unlike: async (req, res) => {
    try {
      const post = await Post.findById(req.params.post_id);

      //check if post is already liked by user
      if (
        post.likes.filter(
          like => like.user.toString() === req.user.id
        ).length === 0
      ) {

        return res.status(400).json({ msg: 'Post not yet liked' });
      }

      //get remove index
      const removeIndex = post.likes
        .map(like => like.user.toString())
        .indexOf(req.user.id);

      post.likes.splice(removeIndex, 1);
      await post.save();
      res.json(post.likes);
    } catch (err) {
      console.error(err);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'No post found' });
      }
      res.status(500).send('Server Error');
    }
  },

  addComment: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select(
        '-password'
      );
      const post = await Post.findById(req.params.post_id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },

  deleteComment: async (req, res) => {
    try {
      const post = await Post.findById(req.params.post_id);

      const comment = post.comments.find(
        comment => comment.id === req.params.comment_id
      );

      if (!comment) {
        return res.status(404).json({ msg: 'Comment does not exist' });
      }

      if (comment.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not Authorized' });
      }

      const removeIndex = post.comments
        .map(comment => comment.id.toString())
        .indexOf(req.params.comment_id);

      post.comments.splice(removeIndex, 1);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  }
};
