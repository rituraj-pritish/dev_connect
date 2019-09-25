const express = require('express');
const router = express.Router();
const PostsController = require('../controllers/postsController');

//@route    POST /posts
//@desc     create a post
//@access   Private
router.post('/', PostsController.createPost);

//@route    GET /posts
//@desc     get all posts
//@access   Private
router.get('/', PostsController.getPosts);

//@route    GET /posts/:post_id
//@desc     get post by id
//@access   Private
router.get('/:post_id', PostsController.getPostById);

//@route    Delete /posts/:post_id
//@desc     delete post by id
//@access   Private
router.delete('/:post_id', PostsController.deletePost);

//@route    PUT /posts/like/:post_id
//@desc     like a post
//@access   Private
router.put('/like/:post_id', PostsController.like)

//@route    PUT /posts/unlike/:post_id
//@desc     unlike a post
//@access   Private
router.put('/unlike/:post_id', PostsController.unlike)

//@route    POST /posts/comment/:post_id
//@desc     add a comment
//@access   Private
router.post('/comment/:post_id', PostsController.addComment)

//@route    DELETE /posts/comment/:post_id/:comment_id
//@desc     delete a comment
//@access   Private
router.delete('/comment/:post_id/:comment_id', PostsController.deleteComment)

module.exports = router;
