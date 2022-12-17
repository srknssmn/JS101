// npm i koa
const Koa = require('koa');
const app = new Koa();

/*
// NORMAL KULLANIM!
app.use(ctx => {
    if (ctx.path === '/') {
        ctx.body = '<h1>xxx sayfasina hosgeldiniz</h1>';
    } else if (ctx.path === '/about') {
        ctx.body = '<h1>about sayfasina hosgeldiniz</h1>';
    } else if (ctx.path === '/hakkimda') {
        ctx.body = '<h1>hakkimda sayfasina hosgeldiniz</h1>';
    } else if (ctx.path === '/iletisim') {
        ctx.body = '<h1>iletisim sayfasina hosgeldiniz</h1>';
    }
});

app.listen(3000);
*/

// KOA ROUTER Paketi ile get, put ve post parametleri ekleniyor.
// npm install @koa/router
const Router = require('@koa/router');
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = '<h1>xxx sayfasina hosgeldiniz</h1>';
});
router.get('/about', (ctx, next) => {
    ctx.body = '<h1>about sayfasina hosgeldiniz</h1>';
});
router.get('/hakkimda', (ctx, next) => {
    ctx.body = '<h1>hakkimda sayfasina hosgeldiniz</h1>';
});
router.get('/iletisim', (ctx, next) => {
    ctx.body = '<h1>iletisim sayfasina hosgeldiniz</h1>';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

  app.listen(3000);