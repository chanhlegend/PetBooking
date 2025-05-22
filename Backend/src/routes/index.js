const userRouter = require('./user')
const categoryRouter = require('./category')
const productRouter = require('./product')
const imageRouter = require('./image')
const cartRouter = require('./cart')
const serviceRouter = require('./service')
const scheduleRouter = require('./schedule')

function route(app) {
    app.use('/api/user', userRouter);
    app.use('/api/category', categoryRouter);
    app.use('/api/product', productRouter);
    app.use('/api/image', imageRouter);
    app.use('/api/cart', cartRouter);
    app.use('/api/service', serviceRouter);
    app.use('/api/schedule', scheduleRouter);
}
module.exports = route