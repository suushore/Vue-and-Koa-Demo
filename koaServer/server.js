
let Koa = require('koa');
let Router = require('koa-router');
let cors = require('koa2-cors');
let fs = require('fs');
let PORT = 3000;

const app = new Koa();
const router = new Router();

router.get('/getJson', async ctx => {
    ctx.body = JSON.parse(fs.readFileSync( './static/material.json'));
});

app.use(cors());
app.use(router.routes())
app.use(router.allowedMethods());

app.listen(PORT,()=>{
    console.log("server is running in "+"http://127.0.0.1"+":"+PORT)
});