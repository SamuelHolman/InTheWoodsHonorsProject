const User = require('../models/userSchema');

exports.getGameScreen = function (req, res) {
    res.render('game');
}

exports.getAnimalsScreen = function (req, res) {
    User.find({ username: req.query.username }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.render('animals', { players: data });
        }
    });
}

exports.putUpdateUserInGame = function (req, res) {
    const updateData = {
        player: {
            xLocation: req.body.xLocation,
            yLocation: req.body.yLocation,
            xScreen: req.body.xScreen,
            yScreen: req.body.yScreen,
            Speed: req.body.Speed,
            Speed: req.body.Speed,
            Direction: req.body.Direction,
            Movement: {
                Upward: req.body.Movement.Upward,
                Downward: req.body.Movement.Downward,
                Left: req.body.Movement.Left,
                Right: req.body.Movement.Right
            },
            Bug: {
                Millipede: req.body.Bug.Millipede,
                Ladybug: req.body.Bug.Ladybug,
                Hum: req.body.Bug.Hum,
                Beetle: req.body.Bug.Beetle,
                TropicalFish: req.body.Bug.TropicalFish,
                Stingray: req.body.Bug.Stingray,
                Anglerfish: req.body.Bug.Anglerfish,
                Mantis: req.body.Bug.Mantis,
                Songbird: req.body.Bug.Songbird,
                StinkBug: req.body.Bug.StinkBug,
                FlowerMantisRed: req.body.Bug.FlowerMantisRed,
                Fly: req.body.Bug.Fly,
                Lobster: req.body.Bug.Lobster,
                Cockroach: req.body.Bug.Cockroach,
                Wasp: req.body.Bug.Wasp,
                Spider: req.body.Bug.Spider,
                Ants: req.body.Bug.Ants,
                FlowerMantisWhite: req.body.Bug.FlowerMantisWhite,
                Lizard: req.body.Bug.Lizard,
                Crawdad: req.body.Bug.Crawdad,
                HermitCrab: req.body.Bug.HermitCrab,
                JumpingSpider: req.body.Bug.JumpingSpider,
                BronzeMantis: req.body.Bug.BronzeMantis,
                Caterpillar: req.body.Bug.Caterpillar,
                Butterfly: req.body.Bug.Butterfly,
                Mosquito: req.body.Bug.Mosquito,
                Newt: req.body.Bug.Newt,
                Skink: req.body.Bug.Skink,
                Bee: req.body.Bug.Bee,
                Walkingstick: req.body.Bug.Walkingstick,
                Skater: req.body.Bug.Skater,
                Termite: req.body.Bug.Termite,
                Frog: req.body.Bug.Frog,
                Amoeba: req.body.Bug.Amoeba,
                Salamander: req.body.Bug.Salamander,
                Scorpion: req.body.Bug.Scorpion,
                Antlion: req.body.Bug.Antlion,
                Mudskipper: req.body.Bug.Mudskipper,
                Turtle: req.body.Bug.Turtle,
                Slug: req.body.Bug.Slug,
                Firefly: req.body.Bug.Firefly,
                Snail: req.body.Bug.Snail,
                SacredScarabBeetle: req.body.Bug.SacredScarabBeetle,
                ScarabBeetle: req.body.Bug.ScarabBeetle,
                FlowerMantisYellow: req.body.Bug.FlowerMantisYellow,
                LightningBug: req.body.Bug.LightningBug,
                Worm: req.body.Bug.Worm,
                Moth: req.body.Bug.Moth,
                Dragonfly: req.body.Bug.Dragonfly
            }
        }
    };

    User.findOneAndUpdate({ _id: req.body.id }, updateData, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.send("data");
        }
    });
}

exports.getRenderPlayers = function (req, res) {
    User.find({ 'username': { $ne: req.query.Name }, 'player.xScreen': req.query.xScreen, 'player.yScreen': req.query.yScreen }, { password: 0, _id: 0 }, function (err, player) {
        if (err) {
            console.log(err);
        } else {
            res.send(player);
        }
    });
};