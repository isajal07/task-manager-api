const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'sajalsht07@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    // html: we can use this to make fancy emails with images and all. 
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'sajalsht07@gmail.com',
    subject: 'Thank for your time.',
    text: `Thank you, ${name} using Sajal app. Can you please give the reason of your account removing?`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}