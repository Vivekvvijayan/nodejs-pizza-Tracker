var express = require('express');
var router = express.Router();


const authController = require('../../controllers/user/authController');
const cartController = require('../../controllers/user/cartController');
const HomeController = require('../../controllers/user/HomeController');
const myordersController = require('../../controllers/user/myordersController');

/* GET users listing. */
router.get('/', HomeController.index )


// get login page
router.get('/login', authController.login);



// get register page

router.get('/register',authController.register)

router.post('/register',authController.doRegister)

// get cart page

router.get('/cart',cartController.cart)
// get my orders page
router.get('/myorders',myordersController.myorders)



module.exports = router;
