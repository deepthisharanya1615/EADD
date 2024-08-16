// Import mongoose module
const mongoose = require('mongoose');

// Define a schema for the Alien model
const nSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roll: {
        type: Number,
        required: true
    },
    result: {
        type: Boolean,
        required: true,
        default: false
    }
});

// Compile the schema into a model and export it
module.exports = mongoose.model('student', nSchema);
