const mongoose = require('mongoose');

let userSchema = mongoose.Schema(
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

userSchema.method({
   authenticate: function (password) {
           let inputPasswordHash = encryption.hashPassword(password, this.salt);
           let isSamePasswordHash = inputPasswordHash === this.passwordHash;

           return isSamePasswordHash;
   }
});

const User = mongoose.model('User', userSchema);

module.exports = User;