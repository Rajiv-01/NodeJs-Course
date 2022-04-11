const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const dbUri =
	'mongodb+srv://Rajiv_01:Aj7HfSiujyDCf0Q8@cluster1.f0yae.mongodb.net/node-tuts?retryWrites=true&w=majority';

mongoose
	.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(3000, () => console.log('Server started')))
	.catch((err) => console.log(err));

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

//listen for requests

// static files
app.use(express.static('public'));

app.use(morgan('dev'));

//mongoose and mongo sandbos routes
app.get('/add-blog', (req, res) => {
	const blog = new Blog({
		title: 'Test Blog',
		snippet: 'Test blog snippet',
		body: 'Test blog body',
	});
	blog.save().then((result) => {
		res.send(result);
	});
});

app.get('/all-blogs', (req, res) => {
	Blog.find().then((blogs) => {
		res.send(blogs);
	});
});

app.get('/', (req, res) => {
	// res.send('<h1>Hello Express!</h1>');
	// res.sendFile('./views/index.html', { root: __dirname });
	const blogs = [
		{
			title: 'Yoshi finds eggs',
			snippet:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat!',
		},
		{
			title: 'Mario finds stars',
			snippet:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat!',
		},
		{
			title: 'Luigi finds clouds',
			snippet:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat!',
		},
	];
	res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
	// res.send('<h1>About Page</h1>');
	// res.sendFile('./views/about.html', { root: __dirname });
	res.render('about');
});

//redirects
app.get('/blogs/create', (req, res) => {
	res.render('create');
});

//404 page should get at the end of the file
app.use((req, res) => {
	res.status(404).render('404');
});
