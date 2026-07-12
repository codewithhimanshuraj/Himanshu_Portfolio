const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: { type: String, required: true },
    github: { type: String, required: true },
    demo: { type: String },
    description: { type: String, required: true },
    tech: { type: [String], required: true },
    image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
