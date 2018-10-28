
let Koa = require('koa');
const Router = require('koa-router');
const router = new Router();
let cors = require('koa2-cors');
let routes = require('./routes/index.js');
let PORT = 3000;

const app = new Koa();

//后端允许跨域
app.use(cors());

router.use('',routes.routes());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT,()=>{
    console.log("server is running in "+"http://127.0.0.1"+":"+PORT);
});