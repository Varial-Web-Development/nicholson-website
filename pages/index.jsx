import Head from "next/head";

import CoverageSection from "../components/pages/home/coverage";
import CredentialsSection from "../components/pages/home/credentials";
import HeroSection from "../components/pages/home/hero";
import IntroSection from "../components/pages/home/intro";
import Layout from "../components/layouts/standard-page";
import TeamSection from "../components/pages/home/team";
import ValuesSection from "../components/pages/home/values";
import SpotlightSection from "../components/pages/home/spotlight";

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
        <ValuesSection />
        <TeamSection />
        <CoverageSection />
        <SpotlightSection />
      </main>
    </Layout>
  )
}
