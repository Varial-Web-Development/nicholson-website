import Head from "next/head";
import Layout from "../../../components/layouts/standard-page";

export default function ProfessionalsInsurancePage() {
  return (
    <Layout>
      <Head>
        <title>Professional Coverage - Nicholson & Associates Insurance</title>
        <meta name="description" content="We have a range of commercial insurance options for professionals that will help you stay protected as you continue to change lives for the better." />
      </Head>
      <main> 
        <section className="section-alt flex flex-col gap-8 items-center">
          <h1 className="text-center text-5xl max-w-[20ch] mx-auto lg:w-fit leading-tight">
            Insurance Packages for Every <span className="text-nicholson-blue-500">Professional</span>
          </h1>
          <p>
            Without experts in the community, many of us would be lost. From legal counsel to medical services and everything in between, professionals provide essential services that we simply cannot do without. As fellow professionals, our licensed commercial insurance agents understand your consultative and specialized expertise has its fair share of risks. We have a range of commercial insurance options for professionals that will help you stay protected as you continue to change lives for the better.
          </p>
          <p>
            Insurance solutions for professionals are vast and unique depending on your area of expertise. Some of the essential coverages specific to professionals are:
          </p>
          <ul>
            <li>Business Income</li>
            <li>Business Personal Property</li>
            <li>Professional Liability</li>
          </ul>
        </section>
        <section className="section-alt flex flex-col gap-8 items-center">
          <h2>Operational Protection for Professionals</h2>
          <p>
            Professionals are the backbone of our local economy, providing essential services to the community. Doctors, accountants, attorneys, coaches, and more all work to bring happiness, health, security, and success to those they serve. In this pursuit, professionals face many risks, especially in offering expert advice and counsel to their customers. Consulting is a bulk of the job for professionals, and many clients will take your word for fact. They have developed trust in you and expect that what you tell them is in their best interest and supported by evidence. If they discover that something you said or advised has negatively affected them, they may choose to take legal action against you. Professional Liability is critical for every professional because it covers instances of negligence and pays for legal expenses and associated settlements.
          </p>
          <p>
            Hopefully the profession you chose brings you joy, but if nothing else it helps pay the bills. Your income and livelihood are dependent on your success professionally, so if something disrupts this revenue stream, you may find yourself in trouble. Business Income coverage is essential in covering you in the event your leased or owned space is unusable after a covered loss. This coverage can make all the difference during critical times by providing you with continued income until you can return to providing your professional services.
          </p>
          <p>
            Running any business requires tools and equipment, which range greatly depending on your field. Medical offices and doctors use lots of high-tech medical equipment to conduct examinations and perform procedures, while attorneys may find themselves on the go with a laptop performing legal counsel wherever the client needs it. Either way, professionals rely on physical tools to get their jobs done successfully, and if this equipment is lost, stolen, or damaged, it could be a serious interruption to their work. Business Personal Property coverage provides reimbursement for property you use for your business that is damaged or destroyed. Rather than having to cover these expenses yourself, you can use your Business Personal Property coverage to pay for new equipment after a covered loss.
          </p>
          <p>
            Ready to find the best coverage for you? Our team of commercial insurance agents are here to offer expert counsel on the right way to protect your professional services.
          </p>
        </section>
      </main>
    </Layout>
  )
}
