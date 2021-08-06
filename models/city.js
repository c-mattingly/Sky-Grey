const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    zip: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

module.exports = mongoose.model('City', citySchema);