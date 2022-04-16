const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

// Create Schema
const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        player: {
            xLocation: { type: Number, required: true, default: 100 },
            yLocation: { type: Number, required: true, default: 100 },
            xScreen: { type: Number, required: true, default: 0 },
            yScreen: { type: Number, required: true, default: 0 },
            Speed: { type: Number, required: true, default: 15 }
        }
    },
    { strict: false }
);

// generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checks if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;