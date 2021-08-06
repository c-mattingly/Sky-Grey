const express = require('express');
const router = express.Router();
const citiesCtrl = require('../../controllers/cities');
/*---------- Public Routes ----------*/
router.get('cities/:zip', citiesCtrl.create);
router.get('/cities/:zip', citiesCtrl.show);

/*---------- Protected Routes ----------*/


