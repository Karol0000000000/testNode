const Application = require('../models/applications');

exports.store = (req, res, next) => {

    Application.create({
        'name': req.body.name,
        'phone': req.body.phone,
        'message': req.body.message
    }).then(function () {
        req.flash('form', req.body.first_name + ', done');
        res.redirect('/');
    }).catch(next);
};

exports.normalizeData = (req, res, next) => {
    const nameArr = req.body.name.split(' ');

    req.body.first_name = nameArr.shift();
    req.body.last_name = nameArr.join(' ');

    next();
}