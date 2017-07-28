const mongoose = require('mongoose');

let catSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        age: {type: Number, required: true, min: 0, max: 38},
        breed: {type: String, required: true},
        color: {type: String, required: true},
        picture: {type: String, required: true},
        price: {type: Number, required: true}
    }
);

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;