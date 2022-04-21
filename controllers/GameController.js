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