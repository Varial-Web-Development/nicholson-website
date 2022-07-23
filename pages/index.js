import Head from "next/head";
import Layout from "../components/layouts/standard-page";

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Local Independent Insurance Agency - Nicholson & Associates</title>
        <meta name="description" content="my description" />
      </Head>
      <main>
        hello world
      </main>
    </Layout>
  )
}
