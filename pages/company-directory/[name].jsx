import Layout from "../../components/layouts/standard-page";
import {  ObjectID } from "bson";
import { MongoClient } from "mongodb";

export async function getStaticPaths() {
  const mongo = new MongoClient(process.env.MONGO_URI)
  let paths = []
  let employees = []

  try {
    await mongo.connect()
    const client = mongo.db('VarialCMS')

    const employeesModel = await client.collection('content_models').findOne({ 'name.value': 'Employee' })
    await client.collection('contents').find({ contentModel: employeesModel._id }).forEach(employee => employees.push(employee))

    employees.forEach(employee => {
      paths.push({
        params: {
          name: employee.fields.name.toLowerCase().replace(/ /g, '-')
        }
      })
    })
  } catch (error) {
    console.error('Mongo error', error)
  }
  
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const mongo = new MongoClient(process.env.MONGO_URI)
  let teamMember = {}
  let location = {}

  try {
    await mongo.connect()
    const client = mongo.db('VarialCMS')
    const employeesModel = await client.collection('content_models').findOne({ 'name.value': 'Employee' })
  
    teamMember = await client.collection('contents')
      .findOne({ 
        contentModel: employeesModel._id,
        'fields.name': context.params.name
          .split('-')
          .map(name => {
            const [firstLetter, ...rest] = name
  
            return [firstLetter.toUpperCase(), ...rest].join('')
          })
          .join(' ')
      })
  
      location = await client.collection('contents').findOne({ _id: ObjectID(teamMember.fields.location) })
    } catch (error) {
      console.log('Mongo error', error)
    }

  return {
    props: {
      teamMember: JSON.parse(JSON.stringify(teamMember)),
      location: JSON.parse(JSON.stringify(location)),
    },
    revalidate: 180,
  }
}

export default function TeamMember({ teamMember, location }) {
  const { bio, emailAddress, image, jobTitles, name, phoneExtension } = teamMember.fields
  const [firstName, ...lastNames] = name.split(' ')

  return (
    <Layout>
      <main className="px-4 pt-8 pb-12 md:px-12 md:pt-16 md:pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 max-w-[1600px] mx-auto">
        <header>
          <picture>
            <source srcSet={`${image.url}?w=1600`} media="(min-width: 768px)" />
            <img src={`${image.url}?w=750`} alt={image.description} width={600} height={600} className="rounded-md w-full" />
          </picture>
        </header>
        <section className="grid gap-6 lg:flex lg:flex-col lg:justify-center lg:gap-16">
          <div className="grid gap-1">
            <h1 className="text-3xl text-center md:text-5xl lg:text-6xl lg:text-start tracking-wider"><span className="text-nicholson-blue-500 ">{firstName}</span> {lastNames.join(' ')}</h1>
            {jobTitles.map(jobTitle => <p key={jobTitle} className="tracking-wider text-xl md:text-2xl lg:text-4xl text-center lg:text-start">{jobTitle}</p>)}
          </div>
          <p className="md:max-w-full lg:max-w-[60ch]">{bio}</p>
          <div className="grid gap-2">
            <div className="grid gap-2 md:flex md:flex-wrap md:gap-8">
              <p className="flex items-center gap-[1ch] tracking-wider lg:text-lg"><img src="/img/phone.svg" width="24" height="24" alt="phone number" className="lg:w-8" /> {location.fields.phoneNumber} ext. {phoneExtension}</p>
              <p className="flex items-center gap-[1ch] tracking-wider lg:text-lg"><img src="/img/mail.svg" width="24" height="24" alt="email address" className="lg:w-8" />{emailAddress}</p>
            </div>
              <p className="flex items-center gap-[1ch] tracking-wider lg:text-lg"><img src="/img/location.svg" width="24" height="24" alt="email address" className="lg:w-8" />{location.fields.city}, {location.fields.state}</p>
          </div>
        </section>
      </main>
    </Layout>
  )
}
