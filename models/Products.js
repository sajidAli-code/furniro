const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    introPara: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    description: {
        para: {
            type: String,
            required: true
        },
        imagesSrc: [String]
    },
    introTag: {
        type: String,
        required: true
    },
    imgsSrc: [String],
    mainType: {
        type: String,
        required: true
    },
    off: {
        type: String,
        required: false
    }
}, { timestamps: true });

// Check if the model exists in mongoose.models
const Product = mongoose.models.product || mongoose.model('product', ProductSchema);

module.exports = Product;