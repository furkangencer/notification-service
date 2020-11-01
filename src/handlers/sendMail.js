import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'eu-central-1' });
async function sendMail(event, context) {
  const messages = event.Records;
  for (const message of messages) {
    // console.log(message);

    const { subject, body, recipient } = JSON.parse(message.body);

    const params = {
      Source: process.env.SES_SENDER, // Mmust be the same email which is verified via Amazon SES
      Destination: {
        ToAddresses: [recipient]
      },
      Message: {
        Body: {
          Text: {
            Data: body
          }
        },
        Subject: {
          Data: subject,
        }
      }
    };

    try {
      await ses.sendEmail(params).promise();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
}

export const handler = sendMail;


