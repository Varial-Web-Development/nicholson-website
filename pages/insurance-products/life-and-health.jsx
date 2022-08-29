import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layouts/standard-page";

export default function LifeAndHealthInsurancePage() {
  return (
    <Layout>
      <Head>
        <title>Life & Health Insurance - Insurance Products - Nicholson & Associates Insurance</title>
        <meta name="description" content="Life and health insurance options can take the guesswork out of these what-ifs by giving you a plan for the worst-case scenario." />
      </Head>
      <main>
        <section className="section-alt flex flex-col gap-8 items-center">
          <h1 className={`mx-auto leading-tight lg:w-fit w-[8ch] max-w-[20ch] text-5xl text-center `}>
            Life and Health Insurance with Heart and <span className="text-nicholson-blue-500">Soul</span> 
          </h1>
          <p>
            We know that it can be overwhelming to think about the potential what-ifs in life. What if I need to have surgery? What if I develop a chronic health condition? What if I don't make it home? What will my family do without me? All of these thoughts can present troublesome feelings of uncertainty, and most of the time we don't even want to address these things because we strongly hope or believe that they will never happen to us. The reality is that life is unpredictable, and we can never truly guarantee that something good or bad will happen in our lives. We can certainly make conscious choices to practice healthy lifestyle habits and avoid risky behavior, but even the safest people can still find themselves in unfortunate circumstances.
          </p>
          <p>
            Life and health insurance options can take the guesswork out of these what-ifs by giving you a plan for the worst-case scenario. At Nicholson & Associates, we want each individual to have the opportunity to get medical help whenever they need it, and for every family to feel financially secure even in the face of loss. Our comprehensive life insurance policies, health benefit plans, and supplemental options give you the flexibility and freedom to decide how you want to protect yourself and your family in a time of need. With our experienced insurance professionals, we can offer guidance and counsel to support you through this sensitive and challenging topic so that you can feel confident in your protection. Additionally, we provide group options for business owners that are as passionate as we are about providing life and health insurance to their staff. Employees will feel cared for and valued with these workplace perks, and we have just the solution for your team, no matter the industry.
          </p>
        </section>
        <section className="section-alt flex flex-wrap max-w-[1720px] justify-center mx-auto gap-24 md:gap-24 items-start">
          <Card>
            <img src="/img/man.svg" alt="" width="256" height="256" />
            <h2 className="text-xl text-center">Individual Life and Health Insurance Options</h2>
            <p className="w-full max-w-[400px] text-base leading-relaxed text-center">
              Whether you are looking for just yourself or for your whole family, we've got solutions for your life and health insurance needs.
            </p>
            <Link href="/insurance-products/life-and-health/individual">
              <a className="p-3 text-nicholson-blue-500 w-full rounded-full text-center border border-nicholson-blue-500 mt-4">
                Explore Individual Coverage
              </a>
            </Link>
          </Card>
          <Card>
            <img src="/img/people.svg" alt="" width="256" height="256" />
            <h3 className="text-xl text-center">Group Benefits for Life and Health Insurance</h3>
            <p className="w-full max-w-[400px] text-base leading-relaxed text-center">
              Immense value can be added to any position by offering employment benefits. We provide a range of group benefits for life and health insurance so you can create a more beneficial workplace for your staff. 
            </p>
            <Link href="/insurance-products/life-and-health/group">
              <a className="p-3 text-nicholson-blue-500 w-full rounded-full text-center border border-nicholson-blue-500 mt-4">
                Explore Group Coverage
              </a>
            </Link>
          </Card>
        </section>
      </main>
    </Layout>
  )
}

function Card({ children }) {
  return (
    <div 
      className={`
        flex
        flex-col
        gap-4
        items-center
        w-full
        md:max-w-[600px]
        lg:max-w-[400px]
      `}
    >
      {children}
    </div>
  )
}