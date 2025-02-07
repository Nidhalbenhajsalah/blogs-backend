const express = require('express');
const router = express.Router();
const { getBlogs, getBlog, postBlog, upvoteBlog, downvoteBlog } = require('../controllers/blogsController');

router.get('/', getBlogs);
router.get('/:id', getBlog);
router.post('/', postBlog);
router.put('/upvote/:id', upvoteBlog);
router.put('/downvote/:id', downvoteBlog);

module.exports = router;
