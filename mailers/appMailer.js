const mailer = require('./mailer')

exports.applicationNotify = (options) => {
    const defaultOptions = {
        subject: 'You win !',
        view: 'application-notification'
    };

    return mailer.send(Object.assign(defaultOptions, options));
}