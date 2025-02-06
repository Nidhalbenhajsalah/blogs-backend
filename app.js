const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const blogRoutes = require('./routes');

const app = express();


app.use(cors());
app.use(bodyParser.json());


app.use('/api/blogs', blogRoutes);

mongoose.connect('mongodb://localhost:27017/blogs', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
