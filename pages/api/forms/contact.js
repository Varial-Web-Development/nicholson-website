const Mailgun = require('mailgun.js')
const formData = require('form-data')
const mailgun = new Mailgun(formData)
import { MongoClient } from 'mongodb'

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

  console.log('newsletter', body.newsletter)

  if (body.newsletter) {
    const mongo = new MongoClient(process.env.MONGO_URI)

    try {
      await mongo.connect()
      const client = mongo.db('VarialCMS')

      // const listExists = await MailingList.count({ name: 'VarialCMS' })
      const listExists = await client.collection('mailing_lists').countDocuments({ name: 'VarialCMS' })
      let varialCmsList
  
      if (listExists === 0) {
        // varialCmsList = new MailingList({
        //   name: 'VarialCMS'
        // })
  
        // await varialCmsList.validate()
        // await varialCmsList.save()
        await client.collection('mailing_lists').insertOne({
          name: 'VarialCMS',
        })
      } else {
        varialCmsList = await client.collection('mailing_lists').findOne({ name: 'VarialCMS' })
      }
  
      const contactExists = await client.collection('contacts').countDocuments({ email: body.email.toLowerCase() })
  
      if (contactExists === 0) {
        // const newContact = new Contact({
        //   name: body.name,
        //   email: body.email.toLowerCase(),
        //   mailingLists: [varialCmsList._id],
        // })
    
        // await newContact.validate()
        // await newContact.save()
        await client.collection('contacts').insertOne({
          name: body.name,
          email: body.email,
          mailingLists: [varialCmsList._id]
        })
      } else {
        const contact = await client.collection('contacts').findOne({ email: body.email.toLowerCase() })
  
        if (contact.mailingLists.some(i => JSON.stringify(i) === JSON.stringify(varialCmsList._id))) {
          // do nothing
        } else {
          // contact.mailingLists = [...contact.mailingLists, varialCmsList._id]
          // await contact.validate()
          // await contact.save()
          await client.collection('contacts').updateOne({ _id: contact._id }, {
            $set: {
              mailingLists: [...contact.mailingLists, varialCmsList._id]
            }
          })
        }
      }

    } catch (error) {
      console.error('Mongo error', error)
    }
    // await mongoose.connect(process.env.MONGO_URI)

    
  }

  const customerEmail = {
    from: `Nicholson & Associates <${process.env.MAIL_FROM}>`,
    to: body.email,
    subject: 'Contact request received',
    html: `
      <h1>Your contact request has been received!</h1>
      <p>Thank you for choosing Nicholson & Associates! Our team of experts will be in touch with you soon.</p> 
    `
  }


  const staffEmail = {
    from: `Nicholson & Associates <${process.env.MAIL_FROM}>`,
    to: process.env.MAIL_TO,
    subject: `Contact request received at ${now}`,
    html: `
        <p>Date: ${now}</p>
        <p>Name: ${body.name}</p>
        <p>Email: ${body.email}</p>
        <p>Phone: ${body.phone}</p>
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