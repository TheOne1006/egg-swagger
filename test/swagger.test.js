'use strict';

const request = require('supertest');
const assert = require('assert');
const mm = require('egg-mock');

describe('test/swagger.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/swagger-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, swagger')
      .expect(200);
  });

  it('should GET /test-swagger.json', (done) => {
    const expected = {
      swagger: '2.0', // swagger api version
      info: {
        description: 'rest api description',
        version: '1.0',
        title: 'rest api',
        termsOfService: '',
        contact: {
          email: '',
        },
        license: {
          name: 'Apache 2.0',
          url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
        },
      },
      host: 'petstore.swagger.io',
      basePath: '/v1',
      schemes: [ 'http' ],
      // Complex mode
      tags: [],
      paths: [],
      securityDefinitions: {},
      definitions: [],
    };
    request(app.callback())
      .get('/test-swagger.json')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        const actual = res.body;
        assert.deepEqual(actual, expected);
        done();
      });
  });

  it('should GET /test-mount', (done) => {
    request(app.callback())
      .get('/test-mount')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        const actual = res.text;
        assert(actual);
        done();
      });
  });

  it('should GET /test-mount/swagger-ui.css', (done) => {
    request(app.callback())
      .get('/test-mount/swagger-ui.css')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        const actual = res.text;
        assert(actual);
        done();
      });
  });
});
