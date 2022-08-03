const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true
    }
});

mongoose.model('Project', projectSchema);