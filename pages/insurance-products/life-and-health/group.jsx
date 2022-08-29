import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/layouts/standard-page";

export default function GroupHealthInsurancePage() {
  return (
    <Layout>
      <Head>
        <title>Group Health Coverage for Business - Nicholson & Associates Insurance</title>
        <meta name="description" content="Employee benefits are an exceptional way to recognize the hard work and dedication your employees exude each and every day." />
      </Head>
      <main> 
        <section className="section-alt flex flex-col gap-8 items-center">
          <h1 className="text-center text-5xl max-w-[20ch] mx-auto lg:w-fit leading-tight">
            Group Life and Health Insurance Benefits for <span className="text-nicholson-blue-500">Every</span> Employer 
          </h1>
          <p>
            People are the lifeblood of every industry, and your staff likely bring a great deal of value to your business. Employee benefits are an exceptional way to recognize the hard work and dedication your employees exude each and every day. Navigating life and health insurance for one person can be daunting, let alone an entire team of people. Nicholson & Associates is here to walk you through the process to find the best insurance solutions for your staff, including Health Insurance, Dental coverage, and Vision plans as well as Life and Disability options. We are eager to help you find the right benefits for your team so you can create a beneficial workplace for your staff and attract the best and brightest employees to your organization.
          </p>
          <div className="bg-slate-100 grid gap-4 w-full max-w-[65ch] p-4 lg:p-8 shadow rounded-md">
            <legend className="text-xl font-medium text-center">Products</legend>
            <Link href="#group-health">→ Group Health Insurance</Link>
            <Link href="#group-life-and-disability">→ Group Life & Disability Insurance</Link>
          </div>
        </section>
        <section id="group-health" className="section-alt flex flex-col gap-8 items-center">
          <h2>Group Health Insurance</h2>
          <p>
            Health Insurance is a critical consideration for many workers today, especially with rising medical costs and increasing rates of accidents and illness nationwide. Potential candidates will be much more apt to apply for and accept jobs that offer some kind of medical benefits package so they can protect themselves and their families. Group Health Insurance plans can be tailored to meet your unique needs and budget, so every business owner can obtain the right coverage for their team. From local businesses with a small crew to larger operations with dozens of employees, we have Group Health Insurance options to fit your business and staff.
          </p>
          <p>
            In addition to standard Health Insurance, we proudly offer additional coverages including Dental and Vision Insurance. These coverages are often overlooked by employers and employees alike, but in the event of an emergency, they become quite important. Routine dental and vision care is an essential part of health maintenance and can be an exceptional added bonus to any employee benefits package. From annual cleanings to urgent root canals, Group Dental coverage can keep your employees healthy by giving them the access to essential dental services. Additionally, with Group Vision Insurance, you can provide peace of mind to staff with routine eye exams, upgraded glasses or contacts, and even bluelight filters to promote a healthier work environment for computer users.
          </p>
          <p>
            Another consideration for employers offering group benefits is Group Accident Insurance. Life is unexpected, and accidents happen more often than we may realize. Urgent and sudden injuries can happen without any warning no matter what industry someone works in. Group Accident Insurance can cover these unplanned financial expenses right away with an upfront payout to your injured staff member. Accidents are often costly and unexpected expenses, so as an employer, you can help take this burden off your staff's shoulders by offering Group Accident Insurance for those sudden injuries.
          </p>
          <p>
            With so many options, it can be overwhelming to get started on an employee benefits plan. <Link href="/contact-us"><a className="text-nicholson-blue-500 underline">Contact us</a></Link> today to speak with a licensed health insurance agent and find the right Group Health Insurance package for your team.
          </p>
        </section>
        <section id="group-life-and-disability" className="section-alt flex flex-col gap-8 items-center">
          <h2 className="max-w-[20ch] leading-tight text-center">Group Life & Disability Insurance</h2>
          <p>
            Life Insurance is often overlooked by many working individuals today, but in times of loss, it can make or break the financial security of almost any family. By offering Group Life Insurance, you can help protect your employees and their families in the event of a tragic loss where your staff member passes away. This benefit is paid to the named family members, whether due to an accident or unforeseen illness. This payout can pay off unpaid debts such as auto loans or mortgages, and can also be used toward funeral expenses such as cremation and burials. No one sets out to work with the intention of not coming home, but unfortunately, this is an unpreventable reality for some families. Group Life Insurance helps prepare your staff for this possibility and protects their families in the event of an unexpected loss to their loved one.
          </p>
          <p>
            Non-fatal injuries are also a relatively common occurrence in today's age, with temporary and permanent disability being ever-present risks in the working world. Group Disability Insurance allows you to protect your employees in the event they sustain a serious injury that prevents them from working for a period of time. If your staff member is unable to work after becoming injured, they can receive a part of their normal income while they recover or transition to a new career. In the event they become permanently disabled, this coverage can cover the gaps between employment and federal disability, which can alleviate the stress caused by loss of income. Group Disability Insurance is an essential benefit to consider to create peace of mind for your staff and offer protection for the income they rely on.
          </p>
          <p>
            Group Life and Disability coverage is quite complex, but we have the option to make it easy. <Link href="/contact-us"><a className="text-nicholson-blue-500 underline">Contact us</a></Link> today to speak with a licensed life and disability insurance agent and secure the right insurance solutions for your staff.
          </p>
        </section>
      </main>
    </Layout>
  )
}
