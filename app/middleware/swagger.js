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

function getAddress({ address, port }) {
  // unix sock
  // https://nodejs.org/api/cluster.html#cluster_event_listening_1

  const hostname = address || '127.0.0.1';
  return `//${hostname}:${port}`;
}

module.exports = (options, app) => {
  const useMock = options.apis && options.apis.length;
  const address = getAddress({
    address: app.config.cluster.listen.hostname,
    port: app.config.cluster.listen.port,
  });
  const swaggerFilePath = useMock ? `${address}${options.swaggerFilePath}` : options.swaggerFilePath;
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
