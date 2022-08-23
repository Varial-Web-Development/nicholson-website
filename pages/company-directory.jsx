import { MongoClient } from "mongodb";
import Link from "next/link";
import Layout from "../components/layouts/standard-page";

export async function getStaticProps() {
  const mongo = new MongoClient(process.env.MONGO_URI)
  let locations = []
  let employees = []

  try {
    await mongo.connect()
    const client = mongo.db('VarialCMS')

    const locationModel = await client.collection('content_models').findOne({ 'name.value': 'Location' })
    const employeeModel = await client.collection('content_models').findOne({ 'name.value': 'Employee' })
    await client.collection('contents').find({ contentModel: locationModel._id }).forEach(location => locations.push(location))
    await client.collection('contents').find({ contentModel: employeeModel._id }).forEach(employee => employees.push(employee))
  } catch (error) {
    console.error('Error with Mongo', error)
  }

  return {
    props: {
      locations: JSON.parse(JSON.stringify(locations)),
      employees: JSON.parse(JSON.stringify(employees)),
    },
    revalidate: 300,
  }
}

export default function TeamPage({ locations, employees }) {
  return (
    <Layout>
      <main className="px-4 pt-8 pb-12 md:px-12 md:pt-16 md:pb-24 lg:pt-24 lg:pb-32 grid gap-8 md:gap-16 lg:gap-24">
        <section className="grid justify-center gap-4 md:gap-8">
          <h1 className="text-center text-5xl">Meet your <span className="text-nicholson-blue-500">Local</span> Agents</h1>
          <p>
            The team at Nicholson & Associates is passionate about people and is eager to provide an exceptional experience to every person. 
            With years of expertise and top industry knowledge, our insurance agents are able to seamlessly create solutions to cover every insurance need. 
            Get to know our team and see how they can help protect you, your family, or your business!
          </p>
        </section>
        {locations.map(location => {
          const { city, address, bio, faxNumber, image, phoneNumber, state, zipCode } = location.fields
          
          return (
            <section key={location._id} className="grid gap-16 lg:gap-24 max-w-[1664px] mx-auto">
              <header className="grid lg:grid-cols-2 gap-8 lg:items-center">
                <picture>
                  <source srcSet={`${image.url}?w=1664`} media="(min-width: 768px)" />
                  <img src={`${image.url}?w=750`} alt={image.description} width={400} height={300} className="w-full aspect-[4/3] object-cover rounded-md" />
                </picture>
                <div className="grid gap-2 md:gap-12">
                  <h2 className="text-nicholson-blue-500">{city}</h2>
                  <p>{bio}</p>
                  <address className="not-italic grid gap-2">
                    <span className="flex-col md:flex-row flex flex-wrap md:items-center md:gap-8">
                      <Link href={`tel:${phoneNumber}`}>
                        <a className="flex items-center gap-2 text-lg text-[#333333] font-light tracking-wider"><img src="/img/phone.svg" width="36" /> {phoneNumber}</a>
                      </Link>
                      <Link href={`tel:${faxNumber}`}>
                        <a className="flex items-center gap-2 text-lg text-[#333333] font-light tracking-wider"><img src="/img/fax.svg" width="36" /> {faxNumber}</a>
                      </Link>
                    </span>
                    <Link href={`https://google.com/maps/place/${address.replace(' ', '+')},+${city},+${state}+${zipCode}`}>
                      <a className="flex items-center gap-2 text-lg text-[#333333] font-light tracking-wider"><img src="/img/location.svg" width="36" /> {address}, {city}, {state} {zipCode}</a>
                    </Link>
                  </address>
                </div>
              </header>
              <div className="grid gap-16 md:gap-32 lg:grid-cols-2">
                {employees.filter(employee => employee.fields.location === location._id).map(employee => {
                  const [firstName, ...lastNames] = employee.fields.name.split(' ')

                  return (
                    <div key={employee.fields.name} className="grid md:grid-cols-2 md:items-center md:justify-start md:justify-items-start md:justify-content-start w-fit mx-auto gap-4 md:gap-16 justify-center justify-items-center justify-content-center">
                      <picture className="justify-self-center">
                        <img src={`${employee.fields.image.url}?w=800`} alt={employee.fields.image.description} width={300} height={225} className="aspect-square rounded-full object-cover max-w-[75vw] mx-auto" />
                      </picture>
                      <div className="grid gap-4 md:gap-12">
                        <div className="grid">
                          <h3 className="text-3xl text-center md:text-left"><span className="text-nicholson-blue-500">{firstName}</span> {lastNames.join(' ')}</h3>
                          {employee.fields.jobTitles.map(jobTitle => (
                            <p key={jobTitle} className="text-center md:text-left">{jobTitle}</p>
                          ))}
                        </div>
                        <div className="grid gap-2">
                          <p className="text-center md:text-left flex gap-2 items-center"><img src="/img/phone.svg" width="32" /> {phoneNumber} ext. {employee.fields.phoneExtension}</p>
                          <p className="text-center md:text-left flex gap-2 items-center"><img src="/img/mail.svg" width="32" /> {employee.fields.emailAddress}</p>
                        </div>
                        <Link href={`/company-directory/${employee.fields.name.toLowerCase().replace(/ /g, '-')}`}>
                          <a className="bg-nicholson-blue-500 text-white rounded-full p-4 py-2 md:px-8 md:py-3 block w-full text-center md:w-fit">View full profile</a>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}
      </main>
    </Layout>
  )
}
