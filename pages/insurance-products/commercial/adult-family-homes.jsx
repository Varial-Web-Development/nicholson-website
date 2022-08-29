import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/layouts/standard-page";

export default function AdultFamilyHomesPage() {
  return (
    <Layout>
      <Head>
        <title>Adult Family Home Coverage - Nicholson & Associates Insurance</title>
        <meta name="description" content="With our comprehensive commercial insurance options, your adult family home can recover from losses and get back to supporting our elderly and individuals with disabilities." />
      </Head>
      <main>
        <section className="section-alt flex flex-col gap-8 items-center">
          <h1 className="text-center text-5xl max-w-[20ch] mx-auto lg:w-fit leading-tight">
            The <span className="text-nicholson-blue-500">Right</span> Protection for Adult Family Homes  
          </h1>
          <p>
            Running an adult family home is truly work from the heart. You have a passion for caring for our precious senior community as they transition to the next phase of life. You see the potential in individuals with disabilities and seek to provide means for them to engage meaningfully with the community. Despite this love and devotion to service, there are many unique risks facing adult family homes. With our comprehensive commercial insurance options, your adult family home can recover from losses and get back to supporting our elderly and individuals with disabilities. 
          </p>
          <p>
            Insurance for adult family homes can encompass a range of coverages. Some of the essential coverages specific to adult family homes are:
          </p>
          <ul>
            <li>Building Coverage</li>
            <li>Business Income</li>
            <li>Business Personal Property</li>
            <li>Cyber Liability</li>
            <li>Professional Liability</li>
            <li>Employment Practices Liability</li>
            <li>Workers Compensation</li>
          </ul>
          <div className="bg-slate-100 grid gap-4 w-full max-w-[65ch] p-4 lg:p-8 shadow rounded-md">
            <legend className="text-xl font-medium text-center">Products</legend>
            <Link href="#property-coverage">→ Coverage for Property in Adult Family Homes</Link>
            <Link href="#staff-protection">→ Protection for Adult Family Home Staff</Link>
          </div>
        </section>
        <section id="property-coverage" className="section-alt flex flex-col gap-8 items-center">
          <h2>Coverage for Property in Adult Family Homes</h2>
          <p>
            Adult family homes are housing options for individuals that are unable to live on their own. These homes may be large scale commercial buildings, or residential homes used for business purposes. Either way, business insurance is essential in properly covering your property. If you own the building you operate out of, Building coverage can protect the structure in the event of damage or total loss. This includes a range of causes, including fires, wind and hail damage, and more. During repair or reconstruction, Building coverage often is coupled with Loss of Use to help cover expenses for temporary relocation so you can continue to provide your essential services. You can also claim Business Income to cover any lost revenue due to a closure after a covered loss, which often can extend for anywhere from 12 months to 24 months. This can make all the difference when you are unable to maintain your normal income with an interruption to your services.
          </p>
          <p>
            Adult family homes require many items to operate efficiently. From furniture and fixtures to high-tech medical equipment, these homes require a great deal of expensive items to create a welcoming and homey environment for residents. What if some of these things were damaged or stolen, or worse, what if all of these items were completely destroyed? Business Personal Property Coverage ensures you have the financial means to replace property that is lost in a covered claim. If you're a tenant, you can also opt for Tenants Improvements and Betterments Coverage to protect any physical modifications to the space that you paid for. With this property coverage, you can make sure your investments are covered in the event of a loss.
          </p>
          <p>
            In this digital age, there is a great deal of property stored electronically. Many adult family homes maintain sensitive information on their residents, including social security numbers, medical history, and more. Even with antivirus software and encryption, hackers can still cause problems for adult family homes. If any of your resident information is compromised, Cyber Liability can pay for the expenses to make it right. With this coverage, you can rest assured that any system infiltrations can be handled efficiently and corrected to prevent future intrusions.
          </p>
        </section>
        <section id="staff-protection" className="section-alt flex flex-col gap-8 items-center">
          <h2 className="max-w-[20ch] leading-tight text-center">Protection for Adult Family Home Staff</h2>
          <p>
            Adult family homes provide care for adults that need additional support with daily living. Your staff are trained and certified to properly tend to their unique needs and carry the weight of the day to day operations. As professionals, they are expected to provide a certain standard of care. If a resident or resident's family member feels this level of care has not been met, it could result in a lawsuit against your staff. When care is questioned, Professional Liability gives you the power to support your staff in a lawsuit and to protect your business against any negligent actions your staff may commit.
          </p>
          <p>
            Hiring the right staff is the first step in creating a successful and positive adult family home experience for your residents. No matter how wonderful your team is, it is important to ensure you have coverage for employment-related claims or incidents. Employment Practices Liability is a key coverage that every adult family home should carry in the event of a real or perceived breach of employee rights. If there is a claim of sexual harrassment, wrongful termination, or discrimination, this coverage is essential in managing the issue and maintaining your business.
          </p>
          <p>
            With regards to staff, it is also important to make sure they are covered in the event of a work-related injury. Helping care for adults can be laborious work, and even the most experienced professionals could still be prone to harm. If your staff get hurt while on duty, you want to be able to provide options to cover them so they can heal and be back on the job before long. Workers Compensation provides the protection you and your staff need in the event of an injury or illness during the course of employment. This mandatory coverage can help your staff recover and heal from their injuries and also protects you in the event you are found negligent.
          </p>
          <p>
            Not sure where to start? Our team of commercial insurance agents is here to help you navigate the insurance process so you can find the right solution for your adult family home. <Link href="/contact-us"><a className="text-nicholson-blue-500 underline">Contact us</a></Link> today to get started.
          </p>
        </section>
      </main>
    </Layout>
  )
}
