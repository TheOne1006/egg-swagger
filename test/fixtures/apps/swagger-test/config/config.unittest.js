'use strict';

exports.swagger = {
  enable: true,
  mountPath: '/test-mount',
  swaggerFilePath: '/test-swagger.json',
  enableGoogleFont: false,
};

exports.middleware = [
  'swagger',
];

exports.keys = '123456';
