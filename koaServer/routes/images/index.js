let Router = require('koa-router');
const router = new Router();

router.get('/', async ctx => {
    ctx.body = "images";
});
router.get('/one', async ctx => {
    ctx.body = "imageOne";
});


module.exports = router;