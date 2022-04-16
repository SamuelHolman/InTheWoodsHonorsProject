var express = require('express');
var router = express.Router();
const userController = require('../controllers/UserController');
const authorizeMiddleware = require('../middleware/authenticate');

router.get('/', authorizeMiddleware.ensureAuthorized, userController.getUsers);

router.get('/create', authorizeMiddleware.ensureAuthorized, userController.getCreateUser);
router.post('/create', authorizeMiddleware.ensureAuthorized, userController.postCreateUser);

router.get('/update', authorizeMiddleware.ensureAuthorized, userController.getUpdateUser);
router.post('/update', authorizeMiddleware.ensureAuthorized, userController.postUpdateUser);

router.get('/delete', authorizeMiddleware.ensureAuthorized, userController.getDeleteUser);

module.exports = router; 
