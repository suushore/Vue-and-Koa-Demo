const Router = require('koa-router');
const router = new Router();
const fs = require('fs');
router.get('/', async ctx => {
    ctx.body = JSON.parse(fs.readFileSync( './static/material.json'));
});

module.exports = router;