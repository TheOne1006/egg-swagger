# egg-swagger

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-swagger.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-swagger
[travis-image]: https://img.shields.io/travis/TheOne1006/egg-swagger.svg?style=flat-square
[travis-url]: https://travis-ci.org/TheOne1006/egg-swagger
[codecov-image]: https://img.shields.io/codecov/c/github/TheOne1006/egg-swagger.svg?style=flat-square
[codecov-url]: https://codecov.io/github/TheOne1006/egg-swagger?branch=master
[david-image]: https://img.shields.io/david/TheOne1006/egg-swagger.svg?style=flat-square
[david-url]: https://david-dm.org/TheOne1006/egg-swagger
[snyk-image]: https://snyk.io/test/npm/egg-swagger/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-swagger
[download-image]: https://img.shields.io/npm/dm/egg-swagger.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-swagger

egg plugin，support swagger-ui 2.0.

## Install

```bash
$ npm i egg-swagger --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.swagger = {
  enable: true,
  package: 'egg-swagger',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.swagger = {
  enable: true,
  mountPath: '/test-mount', // swagger-ui  address  <domain>/test-mount
  swaggerFilePath: '/test-swagger.json', // swagger file default path
  enableGoogleFont: false,
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

- [swagger-ui](http://petstore.swagger.io/?_ga=2.67112721.1460016005.1511156320-1698683464.1510724052) 对外开放 restful api
<!-- example here -->


## Tips

搭配 <https://github.com/TheOne1006/egg-connector-remote> 可直接生成对应的 swagger 数据

## 依赖说明

swagger.json 规则来自于
<https://editor.swagger.io/?_ga=2.41951072.471192285.1510301833-940518916.1510301833#/>

## Questions & Suggestions

Please open an issue [here](https://github.com/TheOne1006/egg-swagger/issues).

## License

[MIT](LICENSE)
