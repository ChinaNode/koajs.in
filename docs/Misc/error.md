## Error handling
Thanks to [co](https://github.com/visionmedia/co), 
error handling is much easier in koa. 
You can finally use try/catch!

In Express, you caught errors by adding an middleware with a `(err, req, res, next)` signature as one of the last middleware.
In contrast, in koa you add a middleware that does `try { yield next }` as one of the first middleware. It is also recommended that you emit an error on the application itself for centralized error reporting, retaining the default behaviour in Koa.

```js
app.use(function *(next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    this.body = err.message;
    this.app.emit('error', err, this);
  }
});

app.use(function *(next) {
  throw new Error('some error');
})
```

This opens up a bunch of new possibilities:

- As you go down the stack, you can change error handlers very easily.
- You can handle errors in portions of your code much more easily.


## ThirdPartyMiddlewares

- [error](https://github.com/koajs/error) - text, json, html error responses with swig template support
- [errorhandler](https://github.com/nswbmw/koa-errorhandler) - Error handler middleware for koa.
- [http-assert](https://github.com/eivindfjeldstad/http-assert) - assert with status codes
- [error-ejs](https://github.com/gusnips/koa-error-ejs) text, json, html error responses with ejs template support
