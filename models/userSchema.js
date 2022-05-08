const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

// Create Schema
const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        player: {
            xLocation: { type: Number, required: true, default: 1155 },
            yLocation: { type: Number, required: true, default: 485 },
            xScreen: { type: Number, required: true, default: 2 },
            yScreen: { type: Number, required: true, default: 2 },
            Speed: { type: Number, required: true, default: 5 },
            Direction: { type: String, default: "Right" },
            Model: { type: String },
            Movement: {
                Upward: { type: Boolean, default: true },
                Downward: { type: Boolean, default: true },
                Left: { type: Boolean, default: true },
                Right: { type: Boolean, default: true }
            },
            Bug: {
                Millipede: { type: Boolean, default: false },
                Ladybug: { type: Boolean, default: false },
                Hum: { type: Boolean, default: false },
                Beetle: { type: Boolean, default: false },
                TropicalFish: { type: Boolean, default: false },
                Stingray: { type: Boolean, default: false },
                Anglerfish: { type: Boolean, default: false },
                Mantis: { type: Boolean, default: false },
                Songbird: { type: Boolean, default: false },
                StinkBug: { type: Boolean, default: false },
                FlowerMantisRed: { type: Boolean, default: false },
                Fly: { type: Boolean, default: false },
                Lobster: { type: Boolean, default: false },
                Cockroach: { type: Boolean, default: false },
                Wasp: { type: Boolean, default: false },
                Spider: { type: Boolean, default: false },
                Ants: { type: Boolean, default: false },
                FlowerMantisWhite: { type: Boolean, default: false },
                Lizard: { type: Boolean, default: false },
                Crawdad: { type: Boolean, default: false },
                HermitCrab: { type: Boolean, default: false },
                JumpingSpider: { type: Boolean, default: false },
                BronzeMantis: { type: Boolean, default: false },
                Caterpillar: { type: Boolean, default: false },
                Butterfly: { type: Boolean, default: false },
                Mosquito: { type: Boolean, default: false },
                Newt: { type: Boolean, default: false },
                Skink: { type: Boolean, default: false },
                Bee: { type: Boolean, default: false },
                Walkingstick: { type: Boolean, default: false },
                Skater: { type: Boolean, default: false },
                Termite: { type: Boolean, default: false },
                Frog: { type: Boolean, default: false },
                Amoeba: { type: Boolean, default: false },
                Salamander: { type: Boolean, default: false },
                Scorpion: { type: Boolean, default: false },
                Antlion: { type: Boolean, default: false },
                Mudskipper: { type: Boolean, default: false },
                Turtle: { type: Boolean, default: false },
                Slug: { type: Boolean, default: false },
                Firefly: { type: Boolean, default: false },
                Snail: { type: Boolean, default: false },
                SacredScarabBeetle: { type: Boolean, default: false },
                ScarabBeetle: { type: Boolean, default: false },
                FlowerMantisYellow: { type: Boolean, default: false },
                LightningBug: { type: Boolean, default: false },
                Worm: { type: Boolean, default: false },
                Moth: { type: Boolean, default: false },
                Dragonfly: { type: Boolean, default: false }
            }
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