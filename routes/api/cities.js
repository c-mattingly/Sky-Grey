const express = require('express');
const router = express.Router();
const citiesCtrl = require('../../controllers/cities');
/*---------- Public Routes ----------*/
router.post('/:zip', citiesCtrl.create);
router.get('/:zip', citiesCtrl.show);

/*---------- Protected Routes ----------*/


module.exports = router;