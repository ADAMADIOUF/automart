const nodemailer = require('nodemailer')

exports.handler = async (event, context, cb) => {
  const method = event.httpMethod

  if (method !== 'POST') {
    return {
      statusCode: 405,
      body: 'Only POST requests allowed',
    }
  }

  const { name, email, message, } = JSON.parse(
    event.body
  )

  if (!name || !email ||  !message ) {
    return { statusCode: 400, body: 'Please provide all values' }
  }

  // Set up nodemailer with the transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_EMAIL,
      pass: process.env.EMAIL_PASSPORT,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_EMAIL, // Your email
    to: 'dioufaminata1702@gmail.com', // Your client's email
    subject: `Contact form submission from ${name}: `,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  }
  try {
    await transporter.sendMail(mailOptions)
    return {
      statusCode: 200,
      body: 'Email sent successfully',
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: `Failed to send email: ${error.message}`,
    }
  }
}
