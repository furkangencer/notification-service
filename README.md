# Serverless Notification Service
This project aims at sending notification to user. At the moment, it only supports email notifications.

Whenever a message is sent to the SQS queue, sendMail lambda function gets triggered and sends an email to the recipent specified within the message.

The message structure should be JSON string as below:

```
{
    "subject": "Test Mail using AWS SQS",`
    "body": "Test Body",
    "recipient": "<RECIPIENT_EMAIL>"
}
```

## Before get started
You need to add and verify an email address via AWS SES console to be able to start sending emails. It will be used as 'sender'.

## Getting started
```
sls create --name YOUR_PROJECT_NAME --template-url https://github.com/petrucci53/notification-service
cd YOUR_PROJECT_NAME
npm install
touch ses_sender.txt
echo '<SENDER_EMAIL_HERE>' > ses_sender.txt
sls deploy -v
```

Viola!
