
# Readme
- This personal project was built to deliver daily sms/email notifications with the current visa application status that is displayed on the USCIS website
- The script developed with cypress is invoked by a cron job and runs on an AWS EC2 on demand instance
- AWS SNS service is used to send notifications

## To run the script
-	Update `statusCheck.js` to pass in your application number, name and email address
-	Run `npm run cy:run` to see status printed on the console

### Note
-	In order to receive sms/email user must be subscribed to to the SNS topic
