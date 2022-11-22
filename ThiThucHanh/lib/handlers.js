exports.home = (req, res) => res.render('home')

exports.register = (req, res) => {
    res.render('register', {csrf: 'CSRF token goes here'})
}

exports.registerProcess = (req, res) => {
    console.log('Name: ' + req.body.name)
    console.log('Email: ' + req.body.email)
    console.log('Phone: ' + req.body.phone)
    console.log('Address: ' + req.body.address)
    console.log('-------------------------------------')
    res.redirect(303, '/register/thank-you')
}

exports.registerThankyou = (req, res) => {
    res.render('register-thank-you')
}


exports.notFound = (req, res) => res.render('404')

exports.serverError = (err, req, res, next) => res.render('500')