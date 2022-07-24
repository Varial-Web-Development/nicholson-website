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
        <TestimonialsSection />
        <QuoteSection />
      </main>
    </Layout>
  )
}
