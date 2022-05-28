const express = require('express');
const app = express();
const sequelize = require('./database');
const Routes = require('./routes/route');

app.use(express.json());
app.get('/backend', (req, res) => {
	console.log('backend activated');
	res.redirect('/');
});
app.use(Routes);
app.listen(process.env.PORT || 8000, () => {
	console.log('server is running');
});
