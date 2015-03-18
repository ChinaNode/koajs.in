## Frameworks

Frameworks, boilerplates, and other starter kits using Koa.

 - [api-boilerplate](https://github.com/koajs/api-boilerplate) - an API application boilerplate
 - [koala](https://github.com/koajs/koala) - a more feature-rich version of Koa, including many middleware and utilities
 - [koan](https://github.com/soygul/koan) - Full stack JavaScript Web development boilerplate with Koa and Angular.
 - [component-boilerplate-koa](https://github.com/component/boilerplate-koa) - component + koa boilerplate
 - [opinion](https://github.com/Empeeric/opinion) - Koa, and some modules so you can just start building
 - [koa-mvc](https://github.com/gusnips/node-koa-mvc) - Opinionated and minimalist MVC generator
 - [surface](https://github.com/zedgu/surface) - A tiny middleware of RESTful API for koa
 - [koanect](https://github.com/zillow-oc/Koanect) - A bare minimum framework that allows your web app to run standalone or to be packaged and included in other koanect apps.
 - [roo](http://github.com/lapwinglabs/roo) – jump-start your web app with a thin layer on top of koa to reduce initial boilerplate
 - [resourced](https://github.com/colin-jack/resourced) - A resource-oriented DSL for configuring koa.
 - [kona](https://github.com/jbielick/kona) - a modular MVC framework and middleware stack built on koa

## Middleware

Known middleware for Koa, you may want to search npm with "koa" to find more.

 - [grant](https://github.com/simov/grant) - OAuth middleware
 - [cors](https://github.com/evert0n/koa-cors) - CORS middleware
 - [koa-slow](https://github.com/bahmutov/koa-slow) - delay answering requests by URL RegExp, useful for debugging.
 - [koa-force-ssl](https://github.com/dotcypress/koa-force-ssl) - Middleware for force SSL
 - [cluster](https://github.com/koajs/cluster) - clustering and error handling utility
 - [polyfills](https://github.com/polyfills/koa) - user-agent based polyfill bundle serving
 
### Security

 - [koa-helmet](https://github.com/venables/koa-helmet) - security headers for koa
 - [koa-ip](https://github.com/MangroveTech/koa-ip) - Ip filter middleware for koa, support whitelist and blacklist

### Body Parsing

  - [body](https://github.com/dlau/koa-body) - parse http request body
  - [hal-body](https://github.com/seznam/hal-body) - parse hal+json request body
  - [koa-parse-json](https://github.com/madbence/koa-parse-json) - parse JSON request body
  - [better-body](https://github.com/tunnckoCore/koa-better-body) - a http request parser with support for `urlencoded`, `multipart` and `json` bodies!
  - [koa-body-parser](https://github.com/thomseddon/koa-body-parser) - parse request body into context.request.body (using co-body) like the express body parser
  - [koa-bodyparser](https://github.com/koajs/body-parser) - a body parser for koa, base on co-body

### Parameter Validation

  - [koa-validate](https://github.com/RocksonZeta/koa-validate) - parameter validate middleware for koa
  - [koa-scheme](https://github.com/MangroveTech/koa-scheme) - parameter validation middleware for koa
  - [koa-prove](https://github.com/DylanPiercey/koa-prove) - parameter validation middleware for koa

### Rate Limiting

  - [ratelimit](https://github.com/koajs/ratelimit) - rate limiting middleware
  - [better-ratelimit](https://github.com/tunnckoCore/koa-better-ratelimit) - support black/white lists, Retry-After header, 429 status, in-memory store.

### Vhost

  - [vhost](https://github.com/JiangJie/koa-vhost) - vhost middleware

### Routing and Mounting

 - [mount](https://github.com/koajs/mount) - mount koa applications as middleware
 - [route](https://github.com/koajs/route) - uber simple routing middleware
 - [routing](https://github.com/ivpusic/koa-routing) - routing middleware
 - [router](https://github.com/alexmingoia/koa-router) - RESTful resource router
 - [koa-frouter](https://github.com/MangroveTech/koa-frouter) - File as `path`
 - [rewrite](https://github.com/koajs/rewrite) - url rewriting middleware
 - [trie-router](https://github.com/koajs/trie-router) - Trie-based routing
 - [params](https://github.com/segmentio/koa-params) - Express style params support for koa-route.
 - [koa-methodoverride](https://github.com/fundon/koa-method-override) - HTTP method overriding middleware
 - [koa-overwrite](https://github.com/bodokaiser/koa-overwrite) - Overwrites `request.method` with forms `_method`.
 - [qs](https://github.com/koajs/qs) - nested query string support
 - [kroute](https://github.com/blakeembrey/kroute) - Simple, self-contained koa routes and applications
-  [koa-dispatch](https://github.com/mojn/koa-dispatch) - Hybrid Koa router with multiple handlers and param support.
 - [koa-barista](https://github.com/sbani/koa-barista) - routing middleware based on the strong barista router.
 - [koa-joi-router](https://github.com/pebble/koa-joi-router) - Configurable, input and output validated routing for koa
 - [koa-version](https://github.com/MangroveTech/koa-version) - Mounting app by version to different router.

### File Serving

 - [send](https://github.com/koajs/send) - a send file utility
 - [sendfile](https://github.com/koajs/sendfile) - a barebone send file utility
 - [static](https://github.com/koajs/static) - static file serving middleware
 - [file-server](https://github.com/koajs/file-server) - static file serving with additional features like etag and SPDY Push support
 - [static-cache](https://github.com/jonathanong/koa-static-cache) - static file serving from memory
 - [spa](https://github.com/ktmud/koa-spa) - Single page app server build upon static-cache
 - [favicon](https://github.com/koajs/favicon) - bounce favicon requests with a 404
 - [koa-favi](https://github.com/Pana/koa-favi) - connect.favicon like middleware default use node logo
 - [koa-broccoli](https://github.com/noazark/koa-broccoli) - a broccoli server (w/ livereload)
 - [koa-combo](https://github.com/tjwudi/koa-combo) - combine your static files at serverside and reduce number of HTTP requests in a flexible way
 - [koa-watchify](https://github.com/yoshuawuyts/koa-watchify) - Wraps a browserify or watchify instance into a koa middleware

### SPDY

  - [spdy-push](https://github.com/koajs/spdy-push) - SPDY Push helper
  - [file-server](https://github.com/koajs/file-server) - static file serving with additional features like etag and SPDY Push support

### JSON and JSONP Responses

 - [jsonp](https://github.com/kilianc/koa-jsonp) - streamable jsonp support
 - [json-filter](https://github.com/koajs/json-filter) - json response filtering to reduce traffic
 - [json-mask](https://github.com/nemtsov/koa-json-mask) - json response filtering to reduce traffic. Supports filtering at any depth
 - [json](https://github.com/koajs/json) - pretty-printed json responses
 - [koa-hal](https://github.com/seznam/koa-hal) - hal+json response support
 - [koa-jsonapi-headers](https://github.com/rudijs/koa-jsonapi-headers) - Validate JSON-API Request Headers

### Compression

 - [compress](https://github.com/koajs/compress) - compression middleware
 - [compressor](https://github.com/koajs/compressor) - SPDY/HTTP2 compression middleware (always gzips)
 - [koa-gzip](https://github.com/fengmk2/koa-gzip) - gzip support for koa responses
 - [koa-minify](https://github.com/coderaiser/koa-minify) - minify middleware for js, css, html and img.
 - [koa-uglify2](https://github.com/grayleonard/koa-uglify2) - uglify middleware for js with caching

### Caching

 - [koa-fresh](https://github.com/fengmk2/koa-fresh) - HTTP response freshness testing middleware base on [node-fresh](https://github.com/visionmedia/node-fresh).
 - [etag](https://github.com/koajs/etag) - etag support for koa responses
 - [conditional-get](https://github.com/koajs/conditional-get) - conditional GET support
 - [cash](https://github.com/koajs/cash) - response caching

### Authentication

  - [basic-auth](https://github.com/koajs/basic-auth) - simple user/pass basic auth
  - [koa-passport](https://github.com/rkusa/koa-passport) - Passport middleware for Koa
  - [koa-jwt](https://github.com/stiang/koa-jwt) - JWT (JSON Web Tokens) verification
  - [koa-user](https://github.com/chunpu/koa-user) - simple user module with tokens
  - [koa-statelessauth](https://github.com/jchannon/koa-statelessauth) - custom validation based on `Authorization` header

### Sessions

 - [session](https://github.com/koajs/session) - cookie-based session middleware
 - [koa-session-redis](https://github.com/Chilledheart/koa-session-redis) - drop-in replacement for koa-session
 - [csrf](https://github.com/koajs/csrf) - CSRF tokens
 - [koa-sess](https://github.com/dead-horse/koa-session) - connect-like session middleware
 - [koa-redis](https://github.com/dead-horse/koa-redis) - redis session store base on `koa-sess`
 - [koa-session-mongodb](https://github.com/aheckmann/koa-session-mongodb) - drop in replacement for koa-session based on Object.observe
 - [koa-mongodb-session](https://github.com/aheckmann/koa-mongodb-session) yieldable mongodb session modifications
 - [koa-level](https://github.com/purposeindustries/koa-level) - LevelDB session store for `koa-sess`
 - [koa-flash](https://github.com/rickharrison/koa-flash) - flash messages for koa-session

### Templating

 - [koa-locals](https://github.com/fundon/koa-locals) - local variables for templates render
 - [koa-views](https://github.com/queckezz/koa-views) - Render your views with almost any templating engine
 - [koa-ejs](https://github.com/dead-horse/koa-ejs) - Focus on [ejs](https://github.com/visionmedia/ejs) and support full feature include `layout`, `filters`, `locals`, `include`.
 - [co-ejs](https://github.com/nswbmw/co-ejs) - koa ejs view render middleware.
 - [dom](https://github.com/juliangruber/koa-dom) - server-side dom templating
 - [koa-swig](https://github.com/fundon/koa-swig) - Focus on [swig](http://paularmstrong.github.io/swig/), support tags, filters, and extensions.
 - [koa-swig-render](https://github.com/JiangJie/koa-swig-render) - Focus on [swig](http://paularmstrong.github.io/swig/), used as a middleware.
 - [koa-hbs](https://github.com/jwilm/koa-hbs/) - Express-style Handlebars view rendering.
 - [koa-jade](https://github.com/chrisyip/koa-jade) - Focus on [Jade](http://jade-lang.com)
 - [koa-handlebars](https://github.com/dominicbarnes/koa-handlebars) - [Handlebars](http://handlebarsjs.com/) view rendering
 - [koajs-nunjucks](https://github.com/Faeson/koajs-nunjucks) - [Nunjucks](http://mozilla.github.io/nunjucks/) view rendering

### Services

 - [koa-pg](https://github.com/chilts/koa-pg) - Handle your Pg database connections automatically.
 - [koa-mongo](https://github.com/MangroveTech/koa-mongo) - MongoDB middleware for koa, support connection pool.
 - [koa-redis-pool](https://github.com/MangroveTech/koa-redis-pool) - Redis middleware for koa, support connection pool.
 - [koa-redisy](https://github.com/zorceta/koa-redisy) koa wrapper for co-redis, which is a wrapper for node-redis
 - [rethinkdbdash](https://github.com/neumino/rethinkdbdash) - RethinkDB driver with promises and a connection pool.
 - [component-koa](https://github.com/component/koa.js) - koa middleware for component builds
 - [koa-pagination](https://github.com/seegno/koa-pagination) - Handle [Range Pagination Headers](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html) using `Range` & `Content-Range` entity-headers.

### CSS Preprocessor

 - [koa-stylus](https://github.com/yosssi/koa-stylus) - Stylus middleware for Koa
 - [koa-less](https://github.com/chosecz/koa-less) - LESS middleware for Koa
 - [koa-lessie](https://github.com/bodokaiser/koa-lessie) - LESS middleware (lighter implementation)
 - [koa-myth](https://github.com/yoshuawuyts/koa-myth) - Wraps a myth or rework instance into a koa middleware

### Livereload

 - [koa-livereload](https://github.com/yosuke-furukawa/koa-livereload) - koa middleware for adding livereload.js

### Error reporting

 - [error](https://github.com/koajs/error) - text, json, html error responses with swig template support
 - [errorhandler](https://github.com/nswbmw/koa-errorhandler) - Error handler middleware for koa.
 - [http-assert](https://github.com/eivindfjeldstad/http-assert) - assert with status codes
 - [error-ejs](https://github.com/gusnips/koa-error-ejs) text, json, html error responses with ejs template support

### Logging

 - [logger](https://github.com/koajs/logger) - development style logger
 - [mongodb-logger](https://github.com/koajs/mongodb-logger) - log and profile Koa requests to MongoDB
 - [koa-log4js](https://github.com/Pana/koa-log4js) - log4js logger middleware for koa
 - [koa-request-id](https://github.com/segmentio/koa-request-id) - Add a request id
 - [koa-bunyan](https://github.com/ivpusic/koa-bunyan) - Using node-bunyan as koa logging middleware
 - [json-error](https://github.com/koajs/json-error) - error handler for pure-JSON apps
 - [koa-json-logger](https://github.com/rudijs/koa-json-logger) - HTTP Request/Response/Error JSON format logger
 - [koa-logger2](https://github.com/TomRoSystems/koa-logger2) - Apache like (combined) logging for koajs
 - [koa-sentry](https://github.com/poying/koa-sentry) - Koa middleware for Sentry logging platform

### Metrics

 - [statsd](https://github.com/koajs/statsd) - statsd integration
 - [response-time](https://github.com/koajs/response-time) - x-response-time header field middleware
 - [koa-ping](https://github.com/AlexeyKhristov/koa-ping) - ping and health route for app status check

### Analytics
 
 - [koa-analytics](https://github.com/stevenmiller888/koa-analytics) - easily add analytics to your koa app

### i18n or L10n

  - [koa-locale](https://github.com/fundon/koa-locale) - Get locale variable from query, subdomain, accept-languages or cookie
  - [koa-i18n](https://github.com/fundon/koa-i18n) - Lightweight simple translation middleware based on  i18n-2

## Utilities

  Misc utilities that are useful for Koa applications. Note that [co](https://github.com/visionmedia/co#yieldables) lets you `yield` a variety of types, so existing libraries using promises etc should work fine.

 - [co-punch](https://github.com/RocksonZeta/co-punch) - Punch old libraries!
 - [cofy](https://github.com/RocksonZeta/cofy) - Cofy is a bridge connecting callback style object to sequential style in [co](https://github.com/visionmedia/co) or [koa](https://github.com/koajs/koa) environment with one punch.
 - [compose](https://github.com/koajs/compose) - compose several middleware into one
 - [Shen](https://github.com/cultofmetatron/Shen) - Shen is underscore for generators
 - [co libraries](https://github.com/visionmedia/co/wiki) - thunk-based libraries that work with Koa


### Aggregates

  Aggregate modules make including common suites of middleware in your application(s) easier. This mimics the convenience of Connect's bundled middleware without forcing them on people.

  - [common](https://github.com/koajs/common) - mount, logger, response-time, static
  - [opinion](https://github.com/Empeeric/opinion) - my opinion on what's needed to get started

