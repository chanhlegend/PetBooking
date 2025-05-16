const userRouter = require('./user')
const categoryRouter = require('./category')
const productRouter = require('./product')
const imageRouter = require('./image')

function route(app) {
    app.use('/api/user', userRouter);
    app.use('/api/category', categoryRouter);
    app.use('/api/product', productRouter);
    app.use('/api/image', imageRouter);
}
module.exports = route