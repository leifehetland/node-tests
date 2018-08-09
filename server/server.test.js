const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {

	describe('GET /', () => {
		// Testing express
		it('should return Hello World response', (done) => {
			request(app)
				.get('/')
				.expect(404)
				.expect((res) => {
					expect(res.body).toInclude({
						error: "Page Not Found"
					});
				})
				.end(done);
		});
	});

	describe('GET /users', () => {
		it('should return array of name objs', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({
						name: "Benjam",
						age: 45
					});
				})
				.end(done);
		});
	});
});



