const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogSchema = new schema({
	title: { type: 'string', required: true },
	snippet: { type: 'string', required: true },
	body: { type: 'string', required: true },
	created: { type: Date, default: Date.now },
	updated: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
