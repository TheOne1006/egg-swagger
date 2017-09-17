'use strict';

const mount = require('koa-mount');
const swaggerJSDoc = require('swagger-jsdoc');
const Swagmock = require('swagmock');

module.exports = (options, app) => {
  const swaggerOptions = app.config.swagger;

  const middle = async ctx => {
    if (swaggerOptions && swaggerOptions.enable) {
      ctx.body = swaggerJSDoc(swaggerOptions);
    }
  };

  return mount(swaggerOptions.swaggerFilePath, middle);
};
