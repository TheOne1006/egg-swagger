'use strict';

module.exports = () => {
  const exports = {};

  exports.swagger = {
    enable: true,
    mountPath: '/docs',
    swaggerFilePath: '/swagger.json',
    enableGoogleFont: false,
  };

  return exports;
};
