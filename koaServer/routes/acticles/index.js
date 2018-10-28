let Router = require('koa-router');
const router = new Router();

router.get('/', async ctx => {
    ctx.body = "acticles";
});
router.get('/one', async ctx => {
    ctx.body = "acticleOne";
});

module.exports = router;