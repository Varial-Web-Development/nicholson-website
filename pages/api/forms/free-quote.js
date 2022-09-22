const Mailgun = require('mailgun.js')
const formData = require('form-data')
const mailgun = new Mailgun(formData)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(401).json({ error_message: 'Invalid request' })

  const body = JSON.parse(req.body)
  const DOMAIN = process.env.MG_DOMAIN
  const API_KEY = process.env.MG_API_KEY
  const mg = mailgun.client({
    username: 'api',
    key: API_KEY,
  })

  const now = new Date()

  const customerEmail = {
    from: `Nicholson & Associates <${process.env.MAIL_FROM}>`,
    to: body.email,
    subject: 'Free quote request received',
    html: `
      <h1>Your free quote request has been received!</h1>
      <p>Thank you for choosing Nicholson & Associates! Our team will be in touch with you soon.</p> 
    `
  }

  const staffEmail = {
    from: `Nicholson & Associates <${process.env.MAIL_FROM}>`,
    to: process.env.MAIL_TO,
    subject: `Free quote request received at ${now}`,
    html: `
        <p>Date: ${now}</p>
        <p>Name: ${body.name}</p>
        <p>Email: ${body.email}</p>
        <p>Phone: ${body.phone}</p>
        <p>City: ${body.city}</p>
        <p>Referred by: ${body.referredBy}</p>
        <p>Insurance Type: ${body.insuranceType}</p>
        <p>Questions/Comments: ${body.comments}</p>
      `
  }

  await mg.messages.create(DOMAIN, staffEmail)
  .then(async response => {
    if (response.status === 200) {
      await mg.messages.create(DOMAIN, customerEmail)
      .then(response => {
        if (response.status === 200) {
          res.status(200).json({ success: true })
        }
      })
    }
  })
}
