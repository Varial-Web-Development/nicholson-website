
import { MongoClient } from "mongodb";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layouts/standard-page";

export async function getStaticProps() {
  let companies = []
  const mongo = new MongoClient(process.env.MONGO_URI)

  try {
    await mongo.connect()
    const client = mongo.db('VarialCMS')

    const contentModel = await client.collection('content_models').findOne({ 'name.value': 'Carrier' })
    await client.collection('contents').find({ contentModel: contentModel._id }).forEach(company => companies.push(company))
  } catch (error) {
    console.error('Error in getStaticProps', error)
  }
  
  return {
    props: {
      companies: JSON.parse(JSON.stringify(companies)),
    },
    revalidate: 300,
  }
}

export default function InsuranceCompanies({ companies }) {
  const [query, setQuery] = useState('')
  
  return (
    <Layout>
      <Head>
        <title>Insurance Companies - Nicholson & Associates Insurance</title>
        <meta name="description" content="Nicholson & Associates is proudly partnered with many top-rated insurance carriers. 
            Your Nicholson team is here to provide policy support anytime, but you are always welcome to contact your carrier directly if needed. 
            Find your insurance carrier below to get started." />
      </Head>
      <main>
        <section className="section grid gap-8 md:gap-12 lg:gap-12 justify-center">
          <h1 className="text-center text-5xl w-[8ch] mx-auto lg:w-fit leading-tight">Contact Your <span className="text-nicholson-blue-500">Carrier</span></h1>
          <p className="">
            Nicholson & Associates is proudly partnered with many top-rated insurance carriers. 
            Your Nicholson team is here to provide policy support anytime, but you are always welcome to contact your carrier directly if needed. 
            Find your insurance carrier below to get started.  
          </p>
        </section>
        <section className="section max-w-[1600px] mx-auto grid gap-8">
          <header className="flex justify-between flex-col md:flex-row items-center gap-2">
            <h2>Our <span className="text-nicholson-blue-500">Carriers</span></h2>
            <label htmlFor="search" className="relative">
              {/* <span className="absolute text-[12px] top-2 left-3 font-medium text-blue-400">Search</span> */}
              <div className="border border-[#CECECE] rounded-md w-fit flex justify-between gap-2 px-3 focus-within:outline-2 focus-within:outline focus-within:outline-nicholson-blue-500">
                <input 
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  className="border-none active:outline-none focus:outline-none px-0"
                  placeholder="Search"
                />
                <img src="/img/search.svg" alt="search" width="18" height="18"/>
              </div>
            </label>
          </header>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-16">
            {companies && companies.filter(company => company.fields.name.toLowerCase().startsWith(query.toLowerCase())).map(company => {
              const { name, slug, logo } = company.fields
              return (
                <Link
                  key={company._id} 
                  // href={`/insurance-company/${name.trim().toLowerCase().replace(/ /g, '-').replace(/\./g, '')}`}
                  href={`/insurance-company/${slug}`}
                >
                  <a className="grid gap-6">
                    <picture className="border p-4 rounded-md">
                      <img 
                        src={logo.url} 
                        alt={logo.description} 
                        width={400} 
                        height={400}
                        className="w-full aspect-square object-contain rounded-md"
                      />
                    </picture>
                    <p className="text-center font-medium">{name}</p>
                  </a>
                </Link>
              )
            })}
          </div>
        </section>
      </main>
    </Layout>
  )
}