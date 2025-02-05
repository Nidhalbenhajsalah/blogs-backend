const express = require('express');
const router = express.Router();
const { getBlogs, getBlog, postBlog } = require('./controller');

router.get('/', getBlogs);
router.get('/:id', getBlog);
router.post('/', postBlog);

module.exports = router;
