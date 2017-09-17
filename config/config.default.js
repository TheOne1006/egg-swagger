'use strict';
const path = require('path');

module.exports = appInfo => {
  const exports = {};

  exports.swagger = {
    enable: true,
    mountPath: '/docs',
    swaggerFilePath: 'http://127.0.0.1:7001/doc',
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

  return exports;
};
