import { describe } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('Activities APIs', () => {
	describe('Test GET route /v1/activities', () => {
		it('Should return latest 20 activities', (done) => {
			chai.request('http://localhost:3000')
				.get('/v1/activities')
				.withCredentials()
				.end((err, response) => {
					chai.expect(err).to.be.null;
					chai.expect(response.ok).to.be.equal(true);
					chai.expect(response.status).to.be.equal(200);
					chai.expect(response.body).to.be.an('array');
					done();
				});
		});
	});

	describe('Test GET route /v1/activity/:activityId', () => {
		const activityId = '1';
		it(`Should return activity object with activityId = ${activityId}`, (done) => {
			chai.request('http://localhost:3000')
				.get(`/v1/activities/${activityId}`)
				.end((err, response) => {
					chai.expect(err).to.be.null;
					chai.expect(response.ok).to.be.equal(true);
					chai.expect(response.status).to.be.equal(200);
					chai.expect(response.body).to.be.an('object');
					chai.expect(response.body).to.have.own.property('id', activityId);
					done();
				});
		});
	});
});
