import { MongoClient } from "mongodb";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layouts/standard-page";
import RichText from "../../util/RichText";

export async function getStaticPaths() {
  const mongo = new MongoClient(process.env.MONGO_URI)
  let paths = []
  let companies = []

  try {
    await mongo.connect()
    const client = mongo.db('VarialCMS')

    const contentModel = await client.collection('content_models').findOne({ 'name.value': 'Carrier' })
    await client.collection('contents').find({ contentModel: contentModel._id }).forEach(company => companies.push(company))
  } catch (error) {
    console.error('Error from getStaticPaths', error)
  }

  companies.forEach(company => paths.push({ 
    params: {
      name: company.fields.slug
    }
  }))

  console.log('paths', paths)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const mongo = new MongoClient(process.env.MONGO_URI)
  let company

  try {
    await mongo.connect()
    const client = mongo.db('VarialCMS')

    const contentModel = await client.collection('content_models').findOne({ 'name.value': 'Carrier' })

    company = await client.collection('contents').findOne({ contentModel: contentModel._id, 'fields.slug': context.params.name })
  } catch (error) {
    console.error('Error from getStaticProps', error)
  }

  return {
    props: {
      company: JSON.parse(JSON.stringify(company))
    }
  }
}

export default function InsuranceCompany({ company }) {
  const { logo, name, phoneNumber, url, billingNumber, billingUrl, claimsNumber, claimsUrl, moreInfo } = company.fields
  
  return (
    <Layout>
      <Head>
        <title>{name} - Insurance Companies - Nicholson & Associates Insurance</title>
        <meta name="description" content="Nicholson & Associates is proudly partnered with many top-rated insurance carriers. 
            Your Nicholson team is here to provide policy support anytime, but you are always welcome to contact your carrier directly if needed. 
            Find your insurance carrier below to get started." />
      </Head>
      <main>
        <section className="section-alt max-w-[1200px] mx-auto grid gap-4 md:gap-8">
          <Link href="/insurance-companies"><a className="text-nicholson-blue-500 text-sm md:text-base">← Insurance Companies</a></Link>
          <section className="grid md:grid-cols-2 max-w-[1200px] mx-auto gap-8 md:gap-16 lg:gap-20">
            <picture>
              <img src={logo.url} width={logo.width} height={logo.height} alt="" className="w-3/4 mx-auto md:w-full max-w-[400px]" />
            </picture>
            <section className="flex flex-col gap-6 w-full">
              <h1 className="text-left text-3xl lg:text-5xl lg:w-fit leading-tight">{name}</h1>
              {phoneNumber && (
                <span className="flex items-center gap-4 text-lg md:text-xl lg:text-2xl tracking-wider font-regular">
                  <img src="/img/phone.svg" width="48" height="48" alt="" className="w-8 md:w-12" />
                  <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
                </span>
              )}
              {url && (
                <span className="flex items-center gap-4 text-xl lg:text-2xl tracking-wider font-regular">
                  <img src="/img/link.svg" width="48" height="48" alt="" className="w-8 md:w-12" />
                  <Link href={url}>
                    <a className="truncate">
                      {url}
                    </a>
                  </Link>
                </span>
              )}
            </section>
          </section>
        </section>
        <section className="grid md:flex md:justify-between gap-8 lg:gap-12 max-w-[1200px] mx-auto section-alt">
          {(billingNumber || billingUrl) && (
            <div className="flex flex-col gap-4 w-fit">
              <h2 className="text-2xl">Billing</h2>
              {billingNumber && (
                <span className="flex items-center gap-4 text-lg tracking-wider font-regular">
                  <img src="/img/phone.svg" width="48" height="48" alt="" className="w-8 md:w-12" />
                  <Link href={`tel:${billingNumber}`}>{billingNumber}</Link>
                </span>
              )}
              {billingUrl && (
                <span className="flex items-center gap-4 text-lg tracking-wider font-regular">
                  <img src="/img/link.svg" width="48" height="48" alt="" className="w-8 md:w-12" />
                  <Link href={billingUrl}><a className="text-nicholson-blue-500 underline">Make a payment</a></Link>
                </span>
              )}
            </div>
          )}
          {(claimsNumber || claimsUrl) && (
            <div className="flex flex-col gap-4 w-fit">
              <h2 className="text-2xl">Claims</h2>
              {claimsNumber && (
                <span className="flex items-center gap-4 text-lg tracking-wider font-regular">
                  <img src="/img/phone.svg" width="48" height="48" alt="" className="w-8 md:w-12" />
                  <Link href={`tel:${claimsNumber}`}>{claimsNumber}</Link>
                </span>
              )}
              {claimsUrl && (
                <span className="flex items-center gap-4 text-lg tracking-wider font-regular">
                  <img src="/img/link.svg" width="48" height="48" alt="" className="w-8 md:w-12" />
                  <Link href={claimsUrl}><a className="text-nicholson-blue-500 underline">File a claim</a></Link>
                </span>
              )}
            </div>
          )}
        </section>
        <section className="section-alt max-w-[1200px] mx-auto grid gap-4 md:gap-6 lg:gap-8">
          <h2>More Information</h2>
          <RichText src={moreInfo} maxWidth="1200px" className="grid gap-2.5" />
          <p className="italic">* Not all products and services may be available in your area</p>
        </section>
      </main>
    </Layout>
  )
}