const express = require('express');
const router = express.Router();

const blogController = require('../controller/blogController');

// blog routes
router.get('/blogs', blogController.blog_index);

// post request
router.post('/blogs', blogController.blog_create_post);

router.get('/blogs/:id', blogController.blog_details);
//delete blog
router.get('/blogs/:id/delete', blogController.blog_delete);

module.exports = router;
