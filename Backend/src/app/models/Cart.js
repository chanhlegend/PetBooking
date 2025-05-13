    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const Cart = new Schema({
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
        quantity: { type: Number },
        status: { type: String },
    }, { timestamps: true });

    module.exports = mongoose.model('Cart', Cart);