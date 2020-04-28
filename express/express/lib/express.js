/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var bodyParser = require('body-parser')
var EventEmitter = require('events').EventEmitter;
/*
* 合并对象对对象属性的描述
* getOwnPropertyNames 获取属性名称数组
* hasOwnProperty 是否用于此属性
* getOwnPropertyDescription 获取属性描述
* defineProperty 定义属性以及属性描述
* */
var mixin = require('merge-descriptors');
var proto = require('./application');
var Route = require('./router/route');
var Router = require('./router');
var req = require('./request');
var res = require('./response');

exports = module.exports = createApplication;
function createApplication() {
  var app = function(req, res, next) {
    app.handle(req, res, next);
  };

  // 绑定事件模型
  mixin(app, EventEmitter.prototype, false);
  // 添加实例方法
  mixin(app, proto, false);

  // 将 app 实例绑定到请求和响应上面
  app.request = Object.create(req, {app: { configurable: true, enumerable: true, writable: true, value: app }})
  app.response = Object.create(res, {app: { configurable: true, enumerable: true, writable: true, value: app }})

  app.init();
  /*
  * 调用 init 方法：
  *   cache，engines，settings 创建这个三个对象
  * 调用 defaultConfiguration 方法：
  *   设置 x-powered-by，etag，env，query parser，subdomain offset，trust proxy
  *   settings.trustProxyDefaultSymbol = true
  *   on('mount') 事件
  *   locals = {}
  *   mountpath = '/'
  *   locals.settings = settings
  *   view = View()
  *   views = ./views
  *   jsonp callback name = callback
  *   view cache = true
  *   router = Error
  * */
  return app;
}

/**
 * Expose the prototypes.
 */

exports.application = proto;
exports.request = req;
exports.response = res;

/**
 * Expose constructors.
 */

exports.Route = Route;
exports.Router = Router;

/**
 * Expose middleware
 */

exports.json = bodyParser.json
exports.query = require('./middleware/query');
exports.raw = bodyParser.raw
exports.static = require('serve-static');
exports.text = bodyParser.text
exports.urlencoded = bodyParser.urlencoded

/**
 * Replace removed middleware with an appropriate error message.
 */

var removedMiddlewares = [
  'bodyParser',
  'compress',
  'cookieSession',
  'session',
  'logger',
  'cookieParser',
  'favicon',
  'responseTime',
  'errorHandler',
  'timeout',
  'methodOverride',
  'vhost',
  'csrf',
  'directory',
  'limit',
  'multipart',
  'staticCache'
]

removedMiddlewares.forEach(function (name) {
  Object.defineProperty(exports, name, {
    get: function () {
      throw new Error('Most middleware (like ' + name + ') is no longer bundled with Express and must be installed separately. Please see https://github.com/senchalabs/connect#middleware.');
    },
    configurable: true
  });
});
