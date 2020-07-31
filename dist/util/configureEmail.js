"use strict";
// still need to set policy
// {
//   "Version": "2012-10-17",
//   "Statement": [
//       {
//           "Effect": "Allow",
//           "Principal": {
//               "AWS": "arn:aws:iam::711757277897:root"
//           },
//           "Action": "ses:*",
//           "Resource": "arn:aws:ses:us-east-1:711757277897:identity/discord-bot.neverfapdeluxe.com"
//       },
//       {
//           "Effect": "Allow",
//           "Action": "ses:SendRawEmail",
//           "Resource": "*"
//       }
//   ]
// }
// const configureEmail = async (aws, nodemailer) => {
//   if (process.env.NODE_ENV !== 'production') {
//     // const testAccount = await nodemailer.createTestAccount();
//     // Clay Schimmel
//     // clay29@ethereal.email
//     // CbWWt2DJcVWyNdj47b
//     // create reusable transporter object using the default SMTP transport
//     return nodemailer.createTransport({
//       host: "smtp.ethereal.email",
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         // user: testAccount.user, // generated ethereal user
//         // pass: testAccount.pass // generated ethereal password
//         user: "clay29@ethereal.email",
//         pass: "CbWWt2DJcVWyNdj47b",
//       }
//     });
//     // console.log("Message sent: %s", info.messageId);
//     // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   } else {
//     // configure AWS SDK
//     aws.config.loadFromPath('config.json');
//     // create Nodemailer SES transporter
//     return nodemailer.createTransport({
//         SES: new aws.SES({
//             apiVersion: '2010-12-01'
//         })
//     });
//   }
// }
// const createEmailObject = (email, subject, text) => ({
//   from: '"Julius Reade" <admin@neverfapdeluxe.com>', // sender address
//   to: email, // list of receivers
//   subject, // Subject line
//   text, // plain text body
//   // html: "<b>Hello world?</b>" // html body
// });
// // send mail with defined transport object
// let info = await transporter.sendMail({
//   from: '"Fred Foo 👻" <foo@example.com>', // sender address
//   to: "bar@example.com, baz@example.com", // list of receivers
//   subject: "Hello ✔", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>" // html body
// });
// // send some mail
// await transporter.sendMail({
//     from: 'sender@example.com',
//     to: 'recipient@example.com',
//     subject: 'Message',
//     text: 'I hope this message gets sent!',
//     ses: { // optional extra arguments for SendRawEmail
//         Tags: [{
//             Name: 'tag name',
//             Value: 'tag value'
//         }]
//     }
// }, (err, info) => {
//     console.log(info.envelope);
//     console.log(info.messageId);
// });
