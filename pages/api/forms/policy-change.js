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

  const now = new Date().toLocaleString()

  const customerEmail = {
    from: `Nicholson & Associates <${process.env.MAIL_FROM}>`,
    to: body.email,
    subject: 'Policy change request received',
    html: `
      <h1>Your policy change request has been received!</h1>
      <p>Thank you for choosing Nicholson & Associates! Our team of experts will be in touch with you soon.</p> 
    `
  }


  const staffEmail = {
    from: `Nicholson & Associates <${process.env.MAIL_FROM}>`,
    to: process.env.MAIL_TO,
    subject: `Policy change request received at ${now}`,
    html: `
        <p>Date: ${now}</p>
        <p>Name: ${body.name}</p>
        <p>Email: ${body.email}</p>
        <p>Phone: ${body.phone}</p>
        <p>Carrier: ${body.carrier}</p>
        <p>Policy number: ${body.policyNumber}
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
        } else {
          res.status(500).json({ error_message: 'client mail gun error', status: response.status, })
        }
      })
    } else {
      res.status(500).json({ error_message: 'mail gun error', status: response.status, })
    }
  })
}
