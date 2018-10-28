let Router = require('koa-router');
const router = new Router();

router.get('/', async ctx => {
    ctx.body = "Musics";
});
router.get('/one', async ctx => {
    ctx.body = "MusicOne";
});


module.exports = router;