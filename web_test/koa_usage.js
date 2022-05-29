const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`begin process ${ctx.request.url}`)
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
    console.log(`end process ${ctx.request.url}`)
    // 日志可以看出这里最后打印出来。如果要计算全部执行时间这里就OK
});

// add url-route:
router.get('/hello/:name', async (ctx, next) => {
    const name = ctx.params.name;
    console.log(`begin router.get /hello/:name ${name}`)
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
    console.log(`end router.get /hello/:name ${name}`)
});

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});

// add router middleware:
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');
