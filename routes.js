const express = require('express');
const router = express.Router();
const { getBlogs, getBlog, postBlog,upvoteBlog, downvoteBlog,getPartialLoadBlogs } = require('./controller');

// router.get('/', getBlogs);
router.get('/',getPartialLoadBlogs)
router.get('/:id', getBlog);
router.post('/', postBlog);
router.put('/upvote/:id', upvoteBlog);
router.put('/downvote/:id', downvoteBlog);

module.exports = router;
