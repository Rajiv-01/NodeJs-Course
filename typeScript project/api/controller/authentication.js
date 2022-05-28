const express = require('express');
const User = require('../models/authModel');
// import session
const session = require('express-session');

const signup = (req, res, next) => {
	const { username, password, email } = req.body;
	if (username == session.user) {
		res
			.json({ username: username, message: 'username already exists' })
			.redirect('/');
	}
	if (User.findall(username) != null) {
		res.json({
			message: 'username already exists',
		});
	}
	User.create({ username: username, password: password, email: email });
	session.user = username;

	res.json({ message: 'user created' });
};
const login = (req, res, next) => {
	const { username, password } = req.body;
	// if (username == session.user) {
	// 	if (password == User.findall(username).password) {
	// 		res.json({ message: 'logged in' });
	// 	} else {
	// 		res.redirect('/login');
	// 	}
	// }
	const user = User.findOne({ where: { username: username } });
	if (user.password == password) {
		session.user = username;
		res.json({ message: 'logged in' });
		res.redirect('/');
	} else {
		res
			.json({
				message: 'wrong password',
			})
			.redirect('/login');
	}
};
const logout = (req, res, next) => {
	session.user = null;
	res.redirect('/');
};

module.exports = { signup, login, logout };
