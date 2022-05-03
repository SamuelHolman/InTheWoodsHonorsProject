const User = require('../models/userSchema');

exports.getGameScreen = function (req, res) {
    res.render('game');
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
                Dragonfly: req.body.Bug.Dragonfly,
                Beetle: req.body.Bug.Beetle,
                Snail: req.body.Bug.Snail,
                Caterpillar: req.body.Bug.Caterpillar,
                Skater: req.body.Bug.Skater,
                Mosquito: req.body.Bug.Mosquito,
                Antlion: req.body.Bug.Antlion,
                Ant: req.body.Bug.Ant,
                Bee: req.body.Bug.Bee,
                Moth: req.body.Bug.Moth,
                Butterfly: req.body.Bug.Butterfly,
                Wasp: req.body.Bug.Wasp,
                Spider: req.body.Bug.Spider,
                Ladybug: req.body.Bug.Ladybug,
                Walkingstick: req.body.Bug.Walkingstick,
                ScarabBeetle: req.body.Bug.ScarabBeetle,
                StinkBug: req.body.Bug.StinkBug,
                Mantis: req.body.Bug.Mantis,
                FlowerMantisRed: req.body.Bug.FlowerMantisRed,
                FlowerMantisWhite: req.body.Bug.FlowerMantisWhite,
                FlowerMantisYellow: req.body.Bug.FlowerMantisYellow,
                Crawdad: req.body.Bug.Crawdad,
                Termite: req.body.Bug.Termite,
                Cockroach: req.body.Bug.Cockroach,
                Worm: req.body.Bug.Worm,
                Skink: req.body.Bug.Skink,
                Newt: req.body.Bug.Newt,
                Frog: req.body.Bug.Frog,
                Salamander: req.body.Bug.Salamander,
                Turtle: req.body.Bug.Turtle,
                Hummingbird: req.body.Bug.Hummingbird,
                Songbird: req.body.Bug.Songbird,
                TropicalFish: req.body.Bug.TropicalFish,
                Scorpion: req.body.Bug.Scorpion,
                MythicalScarabBeetle: req.body.Bug.MythicalScarabBeetle,
                Amoeba: req.body.Bug.Amoeba,
                LightningBug: req.body.Bug.LightningBug,
                Firefly: req.body.Bug.Firefly,
                Slug: req.body.Bug.Slug,
                JumpingSpider: req.body.Bug.JumpingSpider,
                BronzeMantis: req.body.Bug.BronzeMantis,
                Fly: req.body.Bug.Fly,
                HermitCrab: req.body.Bug.HermitCrab,
                Mudskip: req.body.Bug.Mudskip,
                Lobster: req.body.Bug.Lobster,
                Lizard: req.body.Bug.Lizard,
                Anglerfish: req.body.Bug.Anglerfish,
                Stingray: req.body.Bug.Stingray,
                Millipede: req.body.Bug.Millipede
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