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

        sendMail ({text,name,email,appNumber}) {
            var nodemailer = require('nodemailer');

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: '',
                    pass: ''
                }
            });

            var mailOptions = {
                from: '',
                to: email,
                subject: 'Sending Email using Node.js',
                text: `OPT Status of ${name} (${appNumber}) \n ${text}`
            };

            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error)
                } else {
                    console.log('Email sent: ' + info.response)
                }
            });

            return null

        },

	    sendSMS({text,name,email,appNumber}){
			
            // Load the AWS SDK for Node.js
            var AWS = require('aws-sdk');
            // Set region
            AWS.config.update({region: 'us-east-1'});

            // Create publish parameters
            var params = {
                Message: `OPT Status of ${name} (${appNumber}) \n ${text}`, /* required */
                TopicArn: ''
            };

            // Create promise and SNS service object
            const credentials = new AWS.SharedIniFileCredentials({profile: 'sns_profile'});
            const sns = new AWS.SNS({credentials: credentials, region: 'us-east-1'});
            var publishTextPromise = sns.publish(params).promise();

            // Handle promise's fulfilled/rejected states
            publishTextPromise.then(
            function(data) {
                console.log(`Message ${params.Message} send sent to the topic ${params.TopicArn}`);
                console.log("MessageID is " + data.MessageId);
            }).catch(
                function(err) {
                console.error(err, err.stack);
            });

            return null
        }

    })

}
