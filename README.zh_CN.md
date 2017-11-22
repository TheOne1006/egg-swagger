# egg-swagger

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-swagger.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-swagger
[travis-image]: https://img.shields.io/travis/eggjs/egg-swagger.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-swagger
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-swagger.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-swagger?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-swagger.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-swagger
[snyk-image]: https://snyk.io/test/npm/egg-swagger/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-swagger
[download-image]: https://img.shields.io/npm/dm/egg-swagger.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-swagger

egg 插件，提供 swagger-ui 2.0.

## 依赖说明

### 依赖的 egg 版本

egg-swagger 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件

无

## 开启插件

```js
// config/plugin.js
exports.swagger = {
  enable: true,
  package: 'egg-swagger',
};
```

## 使用场景

- 提供像[swagger-ui](http://petstore.swagger.io/?_ga=2.67112721.1460016005.1511156320-1698683464.1510724052) 对外开放 restful api
- How: 描述这个插件是怎样使用的，具体的示例代码，甚至提供一个完整的示例，并给出链接。

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
