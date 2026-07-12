const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
    category: { type: String, required: true },
    name: { type: String, required: true },
    progress: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
