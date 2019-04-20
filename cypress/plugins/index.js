// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)


module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

    on('task', {
        log (message) {
            console.log(message)

            return null
        },

        sendMail (message) {
            var nodemailer = require('nodemailer');

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'testdummynode@gmail.com',
                    pass: 'Testtest123'
                }
            });

            var mailOptions = {
                from: 'testdummynode@gmail.com',
                to: 'abhijith2893@gmail.com',
                subject: 'Sending Email using Node.js',
                text: message
            };

            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error)
                } else {
                    console.log('Email sent: ' + info.response)
                }
            })

            return null

        }

    })





}
