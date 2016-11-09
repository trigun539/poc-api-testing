var expect  = require('chai').expect;
var request = require('supertest');
request     = request('http://localhost:3000');

describe('API ::', function () {

	it('GET /api/todos', function (done) {
		request
			.get('/api/todos')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				expect(res.body.length).to.equal(3);
				done();
			});
	});

	it('GET /api/todos with bad query parameter', function (done) {
		request
			.get('/api/todos' + '?fail=true')
			.expect('Content-Type', /json/)
			.expect(500)
			.end(function(err, res) {
				expect(res.text).to.equal('Invalid query parameters');
				done();
			});
	});

	it('GET /api/databases', function (done) {
		request
			.get('/api/databases')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				expect(res.body.length).to.equal(2);
				expect(res.body[0].name).to.equal('PT18');

				done();
			});
	});

});
