const router = new require("koa-router")();
const models = require('../models')

router.get('/', async (ctx, next) => {
    ctx.body = await models.document.findAll();
})

router.post('/',async (ctx, next) => {
    console.log(ctx.request.body)
    await models.document.create(ctx.request.body);
    ctx.body = 200;
})

module.exports = router.routes();