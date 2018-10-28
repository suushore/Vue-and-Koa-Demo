const Router = require('koa-router');
const router = new Router();
let acticles = require('./acticles/index');
let images = require('./images/index');
let musics = require('./musics/index');
let videos = require('./videos/index');
let abouts = require('./abouts/index');

router.get('/', async ctx => {
    ctx.body = "index";
});
router.use('/acticles',acticles.routes());
router.use('/images',images.routes());
router.use('/musics',musics.routes());
router.use('/videos',videos.routes());
router.use('/abouts',abouts.routes());

module.exports = router;