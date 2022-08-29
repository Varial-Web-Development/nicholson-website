import Head from 'next/head'
import Layout from '../components/layouts/standard-page'

export default function Community() {
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
        <section className="section-alt flex flex-col items-center gap-8">
          <h2 className="max-w-[20ch] leading-tight text-center">Engaging Events with Nicholson & Associates</h2>
          <p>Check out these upcoming and past events that Nicholson & Associates has proudly participated in!</p>
        </section>
      </main>
    </Layout>
  )
}
