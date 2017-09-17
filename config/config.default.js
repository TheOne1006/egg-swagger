'use strict';
const path = require('path');

module.exports = appInfo => {
  const exports = {};

  exports.swagger = {
    enable: true,
    mountPath: '/docs',
    swaggerFilePath: '/doc',
    swaggerDefinition: {
      info: { // API informations (required)
        title: 'egg-swagger', // Title (required)
        version: '1.0.0', // Version (required)
        description: 'swagger service description', // Description (optional)
      },
      basePath: '/api/v1',
    },
    apis: [
      path.resolve(appInfo.root, 'app/controller/*.js'),
      path.resolve(appInfo.root, 'app/controller/*/*.js'),
      path.resolve(appInfo.root, 'app/model/*.js'),
    ],
  };

  const parameters = {
    response: 'httpStatus',
    checkMock: 'debugger',
  }

  // swaggerMock配置项
  exports.swaggerMock = {
    enable: true,
    parameters,
    // match(ctx) {
    //   // return ctx.query.hasOwnProperty([ parameters.checkMock ]);
    //   return true;
    // }
  };

  return exports;
};
