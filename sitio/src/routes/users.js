const express = require('express');
var router = express.Router();
const {login,processRegister,profile, processLogin} = require('../controllers/usersController')

const registerValidations= require('../validations/registerValidation')

const loginValidations= require('../validations/loginValidations')





/* GET users listing. */
router.get('/login', login);
router.post('/login/regData',registerValidations, processRegister);
router.get('/profile', profile);
router.post('/login/logData', loginValidations, processLogin);

module.exports = router;
