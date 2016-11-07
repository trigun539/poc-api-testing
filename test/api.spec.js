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
