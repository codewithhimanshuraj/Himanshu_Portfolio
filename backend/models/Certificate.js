const mongoose = require('mongoose');

const certificateSchema = mongoose.Schema({
    title: { type: String, required: true },
    credentialLink: { type: String, required: true },
    issuer: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Certificate', certificateSchema);
