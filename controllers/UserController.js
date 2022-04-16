const User = require('../models/userSchema');

exports.getUsers = function (req, res) {
    User.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.render('players/index', { players: data });
        }
    });
}


exports.getCreateUser = function (req, res) {
    res.render('players/create');
}

exports.postCreateUser = function (req, res) {

    let newUser = new User({
        username: req.body.username
    });
    newUser.password = newUser.generateHash(req.body.password);

    newUser.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/players');
        }
    });
}


exports.getUpdateUser = function (req, res) {
    User.findOne({ _id: req.query.id }, function (err, player) {
        if (err) {
            console.log(err);
        } else {
            res.render('players/update', { data: player });
        }
    });
};

exports.postUpdateUserInGame = function (req, res) {
    const updateData = {
        player: {
            xLocation: req.body.player.xLocation,
            yLocation: req.body.player.yLocation,
            xScreen: req.body.player.xScreen,
            yScreen: req.body.player.yScreen,
            Speed: req.body.player.Speed
        }
    };

    User.findOneAndUpdate({ _id: req.body.id }, updateData, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            console.log("data updated");
        }
    });
}

exports.postUpdateUser = function (req, res) {

    const updateData = {
        username: req.body.username,
        player: {
            xLocation: req.body.player.xLocation,
            yLocation: req.body.player.yLocation,
            xScreen: req.body.player.xScreen,
            yScreen: req.body.player.yScreen,
            Speed: req.body.player.Speed
        }
    };

    if (req.body.password) {
        let temp = new User();
        updateData.password = temp.generateHash(req.body.password);
    }
    User.findOneAndUpdate({ _id: req.body.id }, updateData, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/players');
        }
    });
};


exports.getDeleteUser = function (req, res) {
    User.findOneAndDelete({ _id: req.query.id }, function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/players');
        }
    });
};