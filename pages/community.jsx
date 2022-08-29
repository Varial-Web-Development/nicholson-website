import { MongoClient } from 'mongodb'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layouts/standard-page'
import RichText from '../util/RichText'

export async function getStaticProps() {
  const mongo = new MongoClient(process.env.MONGO_URI)
  let events = []

  try {
    await mongo.connect()
    const client = mongo.db('VarialCMS')

    const model = await client.collection('content_models').findOne({ 'name.value': 'Event' })
    await client.collection('contents').find({ contentModel: model._id, published: true }).forEach(event => events.push(event))
  } catch (error) {
    console.error('Error with Mongo', error)
  }

  return {
    props: {
      events: JSON.parse(JSON.stringify(events))
    },
    revalidate: 300,
  }
}

export default function Community({ events }) {
  const now = new Date()

  console.log('now', now)
  console.log('events', events)
  return (
    <Layout>
      <Head>
        <title>Community - Nicholson & Associates Insurance</title>
        <meta name="description" content="Check out these upcoming and past events that Nicholson & Associates has proudly participated in!" />
      </Head>
      <main>
        <section className="section-alt flex flex-col items-center gap-8">
          <h1 className="text-center text-3xl md:text-5xl max-w-[25ch] mx-auto lg:w-fit leading-tight">Connection and Commitment to <span className="text-nicholson-blue-500">Community</span></h1>
          <p>
            Nicholson & Associates is always searching for ways to support philanthropic and community efforts in our local towns. 
            The youth, art, education, and recreation programs of our communities are incredibly important to us, and we see great 
            value in supporting organizations that are making these wonderful amenities possible.
          </p>
        </section>
        <section className='section-alt grid gap-8 w-fit max-w-[1200px] mx-auto'>
          <h2 className="max-w-[20ch] leading-tight text-center mx-auto">Engaging Events with Nicholson & Associates</h2>
          <p className='mx-auto'>Check out these upcoming and past events that Nicholson & Associates has proudly participated in!</p>
          <h3 className='text-lg font-semibold'>Upcoming Events</h3>
          <div>
            {events.filter(event => new Date(event.fields.startDate).getTime() > now.getTime()).map(event => {
              const { name, description, coverImage, url } = event.fields

              return (
                <div key={event._id} className="border border-nicholson-blue-500 shadow rounded-md p-4 grid justify-center justify-items-center gap-4">
                  <picture>
                    <img src={`${coverImage.url}?w=750`} alt={coverImage.description} width="300" height="300" />
                  </picture>
                  <h3 className='text-lg'>{name}</h3>
                  <RichText src={description} />
                  <Link href={url}>
                    <a className='text-nicholson-blue-500'>
                      → Learn more about {name}
                    </a>
                  </Link>
                </div>
              )
            })}
          </div>
          <h3 className='text-lg font-semibold'>Past Events</h3>
          <div>
            {events.filter(event => new Date(event.fields.startDate).getTime() < now.getTime()).map(event => {
              const { name, description, coverImage, url } = event.fields

              return (
                <div key={event._id} className="border border-nicholson-blue-500 shadow rounded-md p-4 grid justify-center justify-items-center gap-4">
                  <picture>
                    <img src={`${coverImage.url}?w=750`} alt={coverImage.description} width="300" height="300" />
                  </picture>
                  <h3 className='text-lg'>{name}</h3>
                  <RichText src={description} />
                  <Link href={url}>
                    <a className='text-nicholson-blue-500'>
                      → Learn more about {name}
                    </a>
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
        {/* <section className="section-alt flex flex-col items-center gap-8">
          <h2 className="max-w-[20ch] leading-tight text-center">Engaging Events with Nicholson & Associates</h2>
          <p>Check out these upcoming and past events that Nicholson & Associates has proudly participated in!</p>
          <div>
            {events.map(event => {
              const { name, description, coverImage, url } = event.fields

              return (
                <div key={event._id} className="border border-nicholson-blue-500 shadow rounded-md p-4 grid justify-center justify-items-center gap-4">
                  <picture>
                    <img src={`${coverImage.url}?w=750`} alt={coverImage.description} width="300" height="300" />
                  </picture>
                  <h3 className='text-lg'>{name}</h3>
                  <RichText src={description} />
                  <Link href={url}>
                    <a className='text-nicholson-blue-500'>
                      → Learn more about {name}
                    </a>
                  </Link>
                </div>
              )
            })}
          </div>
        </section> */}
      </main>
    </Layout>
  )
}
