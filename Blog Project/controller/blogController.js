const express = require('express');
const Blog = require('../models/blog');

// blog_index

const blog_index = (req, res) => {
	Blog.find()
		.sort({ created: -1 })
		.then((result) => {
			res.render('index', { title: 'Blogs', blogs: result });
		});
};

const blog_details = (req, res) => {
	Blog.findById(req.params.id)
		.then((result) => {
			res.render('details', { blog: result, title: 'Blog Details' });
		})
		.catch((err) => {
			res.status(404).render('404', { title: 'Not Found' });
		});
};

const blog_delete = (req, res) => {
	Blog.findByIdAndDelete(req.params.id).then((result) => {
		res.redirect('/blogs');
	});
};

const blog_create_post = (req, res) => {
	const blog = new Blog(req.body);
	blog.save().then((result) => {
		res.redirect('/blogs');
	});
};
module.exports = { blog_index, blog_details, blog_delete, blog_create_post };
