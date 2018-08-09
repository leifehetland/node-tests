let db = require('./db.js');

module.exports.handleSignUp = (email, password) => {
	// Check if email already exists

	// Save User to DB
	db.saveUser({
		email: email,
		password: password
	});

	// Send welcome email
};
