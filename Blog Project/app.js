const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

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
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.redirect('/blogs');
});

app.get('/about', (req, res) => {
	// res.send('<h1>About Page</h1>');
	// res.sendFile('./views/about.html', { root: __dirname });
	res.render('about', { title: 'About' });
});

app.get('/create', (req, res) => {
	res.render('create', { title: 'Create' });
});

app.use(blogRoutes);
//404 page should get at the end of the file
app.use((req, res) => {
	res.status(404).render('404');
});
