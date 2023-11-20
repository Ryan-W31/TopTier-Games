const express = require("express");
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT');

const usersController = require('../controllers/Users');

router.route('/api/login').post(usersController.login);
router.route('/api/signup').post(usersController.signUp);
router.route('/api/getuser').post(verifyJWT, usersController.getUser);
router.route('/api/updateuser').post(verifyJWT, usersController.updateUser);
router.route('/api/deleteuser').post(verifyJWT, usersController.deleteUser);
router.route('/api/logout').get(usersController.logout);


module.exports = router;