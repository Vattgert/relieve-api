import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe } from 'mocha';

import express from 'express';
import { app } from '../index';

chai.should();
chai.use(chaiHttp);

describe('Activities APIs', () => {
    describe('Test GET route /v1/activities', () => {
        it('Should return latest 20 activities', (done) => {
            chai.request(app)
                .get('/v1/activities')
                .end((err, response) => {
                    console.log(response);
                    chai.expect(response).to.be.a('array');
                    done();
                })
        })
    });
});
