const Koa = require('koa');
const views = require('koa-views');
const { resolve } = require('path');
const { connect, initSchemas } = require('./database/init');

;(async () => {
  await connect();

  // initSchemas();

  require('./tasks/movie');
})();

const PORT = 5001;

const app = new Koa();

app.use(views(resolve(__dirname, './views'), {
  extension: 'pug'
}));

app.use(async (ctx, next) => {
  await ctx.render('index', {
    you: 'Luke',
    me: 'Scott'
  });
});

// app.use(async (ctx, next) => {
//   ctx.type = 'text/html; charset=utf-8';
//   ctx.body = pug.render(pugTpl, {
//     you: 'Luke',
//     me: 'Scott'
//   });
// })

console.log('server listening at port:' + PORT + '!');
app.listen(PORT);