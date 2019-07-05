exports.notFound = (req, res, next) => {
    const err = new Error('404');
    err.status = 404;
    next(err);
}

exports.catchErrors = (err, req, res, next) => {
    res.status(err.status || 500);
    req.flash('form', err.message);
    res.redirect('/');
}