    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const Service = new Schema({
        serviceName: { type: String, required: true },
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        description: { type: String, default: '' },
        image: [{ type: Schema.Types.ObjectId, ref: 'Image' }],
        evaluate: [{ type: Schema.Types.ObjectId, ref: 'Evaluate'}],
    }, { timestamps: true });

    module.exports = mongoose.model('Service', Service);