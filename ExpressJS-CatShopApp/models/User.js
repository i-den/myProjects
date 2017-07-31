const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

let UserSchema = mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        passwordHash: {type: String, required: true},
        salt: {type: String, required: true},
        address: {type: String, required: true, unique: true},
        phoneNumber: {type: String, required: true, unique: true},
        // cats need to be added here
    }
);

UserSchema.plugin(passportLocalMongoose);

//TODO: autheticate method must be refactored and placed in middleware
UserSchema.method({
   authenticate: function (password) {
           let inputPasswordHash = encryption.hashPassword(password, this.salt);
           let isSamePasswordHash = inputPasswordHash === this.passwordHash;

           return isSamePasswordHash;
   }
});

let User = mongoose.model('User', UserSchema);

module.exports = User;