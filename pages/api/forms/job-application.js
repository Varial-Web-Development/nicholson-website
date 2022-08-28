const Mailgun = require('mailgun.js')
const formData = require('form-data')
const mailgun = new Mailgun(formData)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(401).json({ error_message: 'Invalid request' })

  const body = JSON.parse(req.body)

  console.log('BODY', body)

  const DOMAIN = process.env.MG_DOMAIN
  const API_KEY = process.env.MG_API_KEY
  const mg = mailgun.client({
    username: 'api',
    key: API_KEY,
  })

  const now = new Date().toLocaleString()

  const customerEmail = {
    from: `Nicholson & Associates <${process.env.MAIL_FROM}>`,
    to: body.emailAddress,
    subject: 'Job application received',
    html: `
      <h1>Your application has been received!</h1>
      <p>Thank you for choosing Nicholson & Associates!</p> 
    `
  }


  const staffEmail = {
    from: `Nicholson & Associates <${process.env.MAIL_FROM}>`,
    to: process.env.MAIL_TO,
    subject: `Job application received at ${now}`,
    html: `
        <p>Date: ${now}</p>
        <hr>
        <h1>Personal Information</h1>
        <p>First name: ${body.firstName}</p>
        <p>Middle initial: ${body.middleInitial}</p>
        <p>Last name: ${body.lastName}</p>
        <hr>
        <p>Email address: ${body.emailAddress}</p>
        <p>Phone number: ${body.phoneNumber}</p>
        <hr>
        <p>Street Address: ${body.streetAddress}</p>
        <p>City: ${body.city}</p>
        <p>State: ${body.state}</p>
        <p>Zip: ${body.zipCode}</p>
        <p>Time at current address: ${body.currentAddressLength}</p>
        <p>Previous address: ${body.previousAddress}</p>
        <hr>
        <p>Eligable for hire in United State: ${body.eligableInUS}</p>
        <p>18 years or older: ${body.olderThan18}</p>
        <hr>
        <p>Served in military: ${body.militaryService}</p>
        <p>Veteran status: ${body.veteran}</p>
        <hr>
        <p>Position applying for: ${body.position}</p>
        <p>Where they heard about the position: ${body.heardFrom}</p>
        <p>Expected hourly rate: ${body.expectedHourly}</p>
        <p>Expected weekly earnings: ${body.expectedWeeklyEarnings}</p>
        <hr>
        <p>Date available: ${new Date(body.dateAvailable).toDateString()}</p>
        <p>Any reasons for not being able to perform job duties: ${body.unableToPerformJobDuties}</p>
        <hr>
        <p>Drivers license number: ${body.driversLicenseNumber}</p>
        <p>Drivers license state: ${body.driversLicenseState}</p>
        <p>Driving violations: ${body.drivingViolations}</p>
        <hr>
        <h1>Prior Work Experience</h1>
        ${body.employers.map((employer, index) => `
          <h2>Employer ${index + 1}</h2>
          <p>Name: ${employer.name}</p>
          <p>Address: ${employer.address}</p>
          <p>City: ${employer.city}</p>
          <p>State: ${employer.state}</p>
          <p>Zip: ${employer.zip}</p>
          <p>Supervisor: ${employer.supervisor}</p>
          <p>Phone number: ${employer.phone}</p>
          <p>Current employer: ${employer.current ? 'yes' : 'no'}</p>
          <p>Start date: ${new Date(employer.startDate).toDateString()}</p>
          ${!employer.current ? `<p>End date: ${new Date(employer.endDate).toDateString()}` : ''}
          ${!employer.current ? `<p>Reason for leaving: ${employer.reasonForLeaving}` : ''}
          <p>Can contact: ${employer.canContact ? 'yes' : 'no'}</p>
        `)}
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