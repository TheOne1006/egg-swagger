'use strict';

const request = require('supertest');
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

  it('should GET /test-swagger.json', async function() {
    const res = request(app.callback()).get('/test-swagger.json');
    console.log(res);
  });
});
