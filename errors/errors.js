exports.notFound = (req, res, next) => {
    console.log('not found');
    const err = new Error('404');
    err.status = 404;
    next(err);
}

exports.catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(err => next(err));
    }
};

exports.catchErrors = (err, req, res, next) => {
    console.log('catch');
    res.status(err.status || 500);
    req.flash('form', err.message);
    res.redirect('/');
}