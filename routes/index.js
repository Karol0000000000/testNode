const express = require('express');
const router = express.Router();
const PagesController = require('../controlers/PagesController')
const ApplicationsController = require('../controlers/ApplicationsController')

router.get('/', PagesController.home);
router.post('/applications', 
   ApplicationsController.normalizeData,
   ApplicationsController.store);

module.exports = router;