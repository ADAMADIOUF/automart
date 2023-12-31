const nodemailer = require('nodemailer')

exports.handler = async (event, context, cb) => {
  const method = event.httpMethod

  if (method !== 'POST') {
    return {
      statusCode: 405,
      body: 'Only POST requests allowed',
    }
  }

  const { name, email, services, date,  message ,phoneNumber} = JSON.parse(
    event.body
  )

  if (!name || !email || !services || !date || !message || !phoneNumber) {
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
    to: 'chadsautorepair@gmail.com', // Your client's email
    subject: `Contact form submission from ${name}: `,
    text: `Name: ${name}\nEmail: ${email}\nServices: ${services}\nDate: ${date}\nMessage: ${message}\nPhone Number: ${phoneNumber}`,
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
