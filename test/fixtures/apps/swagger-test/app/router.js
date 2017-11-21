'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.swagger.name;
  });

  app.get('/test-swagger.json', function* () {
    const swagger = {
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
    this.body = swagger;
  });
};
