function ensureAuthentication(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}

function ensureAuthorized(req, res, next) {
    if (req.isAuthenticated() && res.locals.user.username === 'Sam')
        return next();

    if (req.isAuthenticated) {
        res.status(401);
        res.send('You are not allowed to be on this page');
    } else {
        res.redirect('/login');
    }
}

module.exports = {
    ensureAuthentication: ensureAuthentication,
    ensureAuthorized: ensureAuthorized
}