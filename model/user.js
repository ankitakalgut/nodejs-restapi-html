const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    lastname: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
    // add in geo location
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;