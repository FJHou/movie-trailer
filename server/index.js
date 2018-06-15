const Koa = require('koa');
const app = new Koa();
const { htmlTpl } = require('./tpl');

app.use(async (ctx, next) => {
  ctx.type = 'text/html; charset=utf-8';
  ctx.body = htmlTpl;
});

app.listen(5000);