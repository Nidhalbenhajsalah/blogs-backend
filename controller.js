const Blog = require('./blog');

// Get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// partial load of blogs
const getPartialLoadBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const blogs = await Blog.find().skip(skip).limit(limit);
    const totalBlogs = await Blog.countDocuments();
    res.json({
      totalBlogs,
      totalPages: Math.ceil(totalBlogs / limit),
      currentPage: page,
      blogs
    });
    console.log(res.json);
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get blog by id
const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Post blog
const postBlog = async (req, res) => {
  const { title, content, author } = req.body;
  const newBlog = new Blog({ title, content, author });

  try {
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

  // upvote blog
  const upvoteBlog = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) return res.status(404).json({ message: 'Blog not found' });
      blog.upvotes++;
      const updatedBlog = await blog.save();
      res.json(updatedBlog);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  // downvote blog
  const downvoteBlog = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) return res.status(404).json({ message: 'Blog not found' });
      blog.downvotes++;
      const updatedBlog = await blog.save();
      res.json(updatedBlog);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


module.exports = { getBlogs, getBlog, postBlog, upvoteBlog, downvoteBlog,getPartialLoadBlogs };
