const Application = require('../models/applications');
const { check, validationResult } = require('express-validator')
const appMailer  =require('../mailers/appMailer')

exports.store = async (req, res, next) => {

    const application = {
        'name': req.body.name,
        'email': req.body.email.toLowerCase(),
        'message': req.body.message
    }

    appMailer.applicationNotify({
        email: application.email,
        data: {
            name: application.name 
        }
    })

    // await Application.create(application);

    req.flash('form', req.body.first_name + ', done');
    res.redirect('/');

};

exports.validate = [
    check('name').trim().isLength({ min: 1 }).withMessage('Type name'),
    check('email').isLength({ min: 1 }).withMessage('Type email'),
    check('message').isLength({ min: 1 }).withMessage('Type message')
];

exports.checkValidation = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log('errors!');
        return res.render('home', {
            validated: req.body,
            errors: errors.mapped(),
            showLightbox: 'true'
        });
    }

    next();
}

exports.normalizeData = (req, res, next) => {
    const nameArr = req.body.name.split(' ');

    req.body.first_name = nameArr.shift();
    req.body.last_name = nameArr.join(' ');

    next();
}