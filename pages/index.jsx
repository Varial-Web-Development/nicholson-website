import Head from "next/head";

import CoverageSection from "../components/pages/home/coverage";
import CredentialsSection from "../components/pages/home/credentials";
import HeroSection from "../components/pages/home/hero";
import IntroSection from "../components/pages/home/intro";
import Layout from "../components/layouts/standard-page";
import SpotlightSection from "../components/pages/home/spotlight";
import TeamSection from "../components/pages/home/team";
import TestimonialsSection from "../components/pages/home/testimonials";
import ValuesSection from "../components/pages/home/values";
import QuoteSection from "../components/pages/home/quote";
import { MongoClient } from "mongodb";

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

export default function HomePage({ events }) {
  console.log('events', events)

  return (
    <Layout>
      <Head>
        <title>Local Independent Insurance Agency - Nicholson & Associates</title>
        <meta name="description" content="Nicholson & Associates has proudly been serving Centralia, Olympia, Packwood, and Vancouver and the surrounding areas since 1965, 
          and continues to support local families and business owners alike so they can focus on what matters most." />
      </Head>
      <main>
        <HeroSection />
        <IntroSection />
        <CredentialsSection />
        <ValuesSection />
        <TeamSection />
        <CoverageSection />
        <SpotlightSection events={events} />
        <TestimonialsSection />
        <QuoteSection />
      </main>
    </Layout>
  )
}
