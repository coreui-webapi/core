const router = new require("koa-router")();
const models = require('../models')

router.get('/', async (ctx, next) => {
    ctx.body = await models.document.findAll();
})

<<<<<<< HEAD
router.post('/', async (ctx, next)=> {
=======
router.post('/',async (ctx,next) => {
>>>>>>> a4e691c9b032efd5e6864afc3d47e9a789712d58
    console.log(ctx.request.body)
    await models.document.create(ctx.request.body);
    ctx.body = 200;
})

module.exports = router.routes();