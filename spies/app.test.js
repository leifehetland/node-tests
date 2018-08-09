const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
	let db = {
		saveUser: expect.createSpy()
	};
	app.__set__('db', db);

	it('should call the spy correctly', () => {
		let spy = expect.createSpy();
		spy('Leif', 28);
		expect(spy).toHaveBeenCalledWith('Leif', 28);
	});

	it('should call saveUser with user object', () => {
		let email = 'joe@example.com';
		let password = 'banana';

		app.handleSignUp(email, password);

		expect(db.saveUser).toHaveBeenCalledWith({
			email,
			password
		});
	});
})