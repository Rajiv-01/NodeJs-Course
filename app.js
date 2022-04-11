const express = require('express');

// express app
const app = express();

//listen for requests
app.listen(3000, () => {
	console.log('listening on port 3000');
});

app.get('/', (req, res) => {
	// res.send('<h1>Hello Express!</h1>');
	res.sendFile('./views/index.html', { root: __dirname });
});
app.get('/about', (req, res) => {
	// res.send('<h1>About Page</h1>');
	res.sendFile('./views/about.html', { root: __dirname });
});
