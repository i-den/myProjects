const mongoose = require('mongoose');

let CatSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        age: {type: Number, required: true, min: 0, max: 38},
        breed: {type: String, required: true},
        color: {type: String, required: true},
        picture: {type: String, required: true},
        price: {type: Number, required: true},
        author: {
                id: {
                     type: mongoose.SchemaTypes.objectId,
                     ref: "User"
                },
            username: {type: String}
        }
    }
);

let Cat = mongoose.model('Cat', CatSchema);

module.exports = Cat;