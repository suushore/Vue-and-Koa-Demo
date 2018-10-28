let Router = require('koa-router');
const router = new Router();

router.get('/', async ctx => {
    ctx.body = "videos";
});
router.get('/one', async ctx => {
    ctx.body = "videoOne";
});


module.exports = router;