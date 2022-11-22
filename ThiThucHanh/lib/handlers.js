exports.home = (req, res) => res.render('home')

exports.register = (req, res) => {
    res.render('register', {csrf: 'CSRF token goes here'})
}

exports.registerProcess = (req, res) => {
    console.log('Form (from querystring): ' + req.query.form)
    console.log('CSRF token (from hidden form field): ' + req.body._csrf)
    console.log('Name (from visible form field): ' + req.body.name)
    console.log('Email (from visible form field): ' + req.body.email)
    res.redirect(303, '/register/thank-you')
}

exports.registerThankyou = (req, res) => {
    res.render('register-thank-you')
}


exports.notFound = (req, res) => res.render('404')

exports.serverError = (err, req, res, next) => res.render('500')