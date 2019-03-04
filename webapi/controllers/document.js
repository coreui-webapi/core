const router = new require("koa-router")();
const models = require('../models')

router.get('/', async (ctx, next) => {
    ctx.body = await models.document.findAll();
})

module.exports = router.routes();