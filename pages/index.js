import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layouts/standard-page";
import CredentialsSection from "../components/pages/home/credentials";
import HeroSection from "../components/pages/home/hero";
import IntroSection from "../components/pages/home/intro";

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Local Independent Insurance Agency - Nicholson & Associates</title>
        <meta name="description" content="my description" />
      </Head>
      <main>
        <HeroSection />
        <IntroSection />
        <CredentialsSection />
      </main>
    </Layout>
  )
}
