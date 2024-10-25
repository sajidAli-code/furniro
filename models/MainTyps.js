const mongoose = require('mongoose');

const MainTypeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,  // Title is required
        trim: true,      // Removes whitespace
    },
    imgSrc: {
        type: String,
        required: true,  // Image source is required
        trim: true,
    },
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

const MainType = mongoose.models?.mainTypes || mongoose.model('mainType', MainTypeSchema);

module.exports = MainType;
