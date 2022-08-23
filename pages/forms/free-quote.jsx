import Head from "next/head";
import FreeQuoteForm from "../../components/forms/free-quote";
import Layout from "../../components/layouts/standard-page";

export default function FreeQuotePage() {
  return (
    <Layout>
      <Head>
        <title>Get a Free Quote - Nicholson & Associates Insurance</title>
        <meta name="description" content="Fill out our free quote form and experience the Nicholson Difference!" />
      </Head>
      <main className="section grid place-items-center bg-gradient-to-b from-nicholson-blue-500 to-nicholson-green-500">
        <FreeQuoteForm />
      </main>
    </Layout>
  )
}
