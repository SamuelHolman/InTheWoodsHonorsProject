var express = require('express');
var router = express.Router();
const authorizeMiddleware = require('../middleware/authenticate');
const gameController = require('../controllers/GameController');

/* GET home page. */
router.get('/', authorizeMiddleware.ensureAuthentication, gameController.getGameScreen); 

router.get('/renderPlayers', authorizeMiddleware.ensureAuthentication, gameController.getRenderPlayers);

router.put('/updatePlayer', authorizeMiddleware.ensureAuthentication, gameController.putUpdateUserInGame);
module.exports = router;
