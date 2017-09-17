'use strict';
const assert = require('assert');

module.exports = app => {
  // console.log('app.config.env =', app.config.env);
  // 将 static 中间件放到 bodyParser 之前
  // console.log(app.config.coreMiddleware);
  const index = app.config.coreMiddleware.indexOf('static');
  assert(index >= 0, 'static 中间件必须存在');
  app.config.coreMiddleware.splice(index, 0, 'swagger');
};
