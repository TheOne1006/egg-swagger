'use strict';

const path = require('path');
const mount = require('koa-mount');
const send = require('koa-send');
const fs = require('fs');
const template = require('lodash.template');

const publicPath = path.join(__dirname, '../', 'public');
const templatePath = path.join(publicPath, 'template.html');
const templateStr = fs.readFileSync(templatePath, 'utf8');
const compiled = template(templateStr);

module.exports = (options, app) => {
  const swaggerFilePath = options.swaggerFilePath;
  const middle = async ctx => {
    const compiledOptions = {
      mountPath: options.mountPath,
      swaggerFilePath,
      enableGoogleFont: options.enableGoogleFont,
    };
    if (ctx.path === '/') {
      ctx.body = compiled(compiledOptions);
    } else {
      await send(ctx, ctx.path, { root: publicPath });
    }
  };

  return mount(options.mountPath, middle);
};
