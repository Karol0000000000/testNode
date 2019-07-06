const express = require('express');
const router = express.Router();
const PagesController = require('../controlers/PagesController')
const ApplicationsController = require('../controlers/ApplicationsController')
const errors = require('../errors/errors')

router.get('/', PagesController.home);

router.post('/applications', 
   ApplicationsController.validate,
   ApplicationsController.checkValidation,
   ApplicationsController.normalizeData,
   errors.catchAsync(ApplicationsController.store));

module.exports = router;