
### Intro

Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. Through leveraging generators Koa allows you to ditch callbacks and greatly increase error-handling. Koa does not bundle any middleware within core, and provides an elegant suite of methods that make writing servers fast and enjoyable.


### Hello World

```javascript
var koa = require('koa');
var app = koa();

app.use(function * () {
    this.body = 'Hello World';
});

app.listen(3000);
```

### Installation

```
$ npm install koa
```

  Koa is supported in all versions of [iojs](https://iojs.org) without any flags.

  To use Koa with node, you must be running __node 0.11.16__ or higher for generator and promise support, and must run node(1)
  with the `--harmony-generators` or `--harmony` flag.

  You can quickly install a supposed version of node/iojs with your favorite version manager:

```bash
$ nvm install iojs
$ npm i koa
$ node my-koa-app.js
```


### Features

Expressive middleware for node.js using generators via [co](https://github.com/visionmedia/co)
to make web applications and APIs more enjoyable to write. Koa's middleware flow in a stack-like manner allowing you to perform actions downstream, then filter and manipulate the response upstream. Koa's use of generators also greatly increases the readability and robustness of your application.

Only methods that are common to nearly all HTTP servers are integrated directly into Koa's small ~550 SLOC codebase. This
includes things like content-negotiation, normalization of node inconsistencies, redirection, and a few others.

No middleware are bundled with koa.


### Authors

  - [TJ Holowaychuk](https://github.com/tj)
  - [Jonathan Ong](https://github.com/jonathanong)
  - [Julian Gruber](https://github.com/juliangruber)
  - [Yiyu He](https://github.com/dead-horse)

### Links

  - [Github](https://github.com/koajs/koa)
  - [Github ORG and related projects](https://github.com/koajs)
  - [Koa site](http://koajs.com)
  - [中文文档](http://koa.rednode.cn/)

### License

  MIT
