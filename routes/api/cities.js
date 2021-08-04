const express = require('express');
const router = express.Router();
const citiesCtrl = require('../../controllers/cities');
/*---------- Public Routes ----------*/
router.get('/cities/:name', citiesCtrl.show);

/*---------- Protected Routes ----------*/


