import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/layouts/standard-page";

export default function NonprofitInsurancePage() {
  return (
    <Layout>
      <Head>
        <title>Nonprofit Coverage - Nicholson & Associates Insurance</title>
        <meta name="description" content="We never want your charitable efforts to be put at risk due to unforeseen circumstances, which is why we are eager to provide insurance solutions to protect your inspiring industry." />
      </Head>
      <main> 
        <section className="section-alt flex flex-col gap-8 items-center">
          <h1 className="text-center text-5xl max-w-[20ch] mx-auto lg:w-fit leading-tight">
            <span className="text-nicholson-blue-500">Next-Level</span> Protection for Nonprofit Organizations
          </h1>
          <p>
            There is little else in the world that feels as good as giving back. Our local nonprofit organizations have seen many unmet needs flooding our communities, and rather than turning a blind eye, they have pulled together to change lives. Through their commitment to service and humanity, nonprofit organizations showcase the good in people and bring out the very best in all of us. We never want your charitable efforts to be put at risk due to unforeseen circumstances, which is why we are eager to provide insurance solutions to protect your inspiring industry.
          </p>
          <p>
            Policies for nonprofit organizations offer comprehensive solutions to cover your work in the community. Some of the essential coverages specific to nonprofits are:
          </p>
          <ul>
            <li>Directors & Officers Liability</li>
            <li>Employment Practices Liability</li>
            <li>Errors & Omissions Coverage</li>
            <li>General Liability</li>
            <li>Special Events Coverage</li>
          </ul>
          <div className="bg-slate-100 grid gap-4 w-full max-w-[65ch] p-4 lg:p-8 shadow rounded-md">
            <legend className="text-xl font-medium text-center">Products</legend>
            <Link href="#liability-coverage">→ Liability Coverage</Link>
          </div>
        </section>
        <section id="liability-coverage" className="section-alt flex flex-col gap-8 items-center">
          <h2>Liability Coverage for Nonprofit Organizations</h2>
          <p>
            Running a nonprofit organization requires some sort of physical space, especially those providing services or products to those in need. In the event of an injury at your location or a distribution center, you want to make sure the harmed individual can be cared for. General Liability helps protect negligent acts and covers medical expenses to those injured on your premises. Even if you only have an office space just for staff, General Liability is still essential because of the additional coverage it provides, such as for marketing efforts or other administrative operations.
          </p>
          <p>
            Some nonprofit organizations rely on the expertise of professionals in various industries. If a professional on your team makes an error that negatively affects someone else, this could be quite damaging for the reputation of your organization and have quite the financial impact. Errors & Omissions coverage protects your professional staff and volunteers against claims of negligence due to an error during the course of their work. Obtaining licensed and credentialed staff can help minimize the risk of mistakes, but in the off chance they happen, you can count on Errors & Omissions coverage to protect your organization. 
          </p>
          <p>
            Many nonprofit organizations have a board of directors that are responsible for overseeing the big picture of operations. They make decisions on how to grow the organization, obtain new donors, and manage the brand. While directors and officers are expected to uphold a higher caliber of ethics and responsibility, they are still human, which means mistakes or mismanagement can happen. Directors & Officers Liability covers your directors in the event a wrongful act occurs or decision is made. This coverage pays for legal expenses associated with a lawsuit to protect your staff and organization. Directors & Officers Liability is essential for any nonprofit organization utilizing a team to manage these large-scale decisions.
          </p>
          <p>
            In addition to a board of directors, your nonprofit organization relies on the continued work and dedication of staff and volunteers. You want to create a safe and welcoming environment for all of your employees, but sometimes problems may arise in the workplace that are out of your control. Employment Practices Liability protects you and your organization in the event of an employment-related claim such as sexual harrassment, wrongful termination, or discrimination. Despite best efforts to offer an inclusive and fair workplace, these incidents can still arise, and having this protection will ensure you have the coverage you need to recover.
          </p>
          <p>
            One of the key activities of every nonprofit organization is fundraising. Oftentimes donations are accepted on an ongoing basis, but most organizations recognize the power and value in putting on fun community events to drive community support for their efforts. Fundraising events such as dinners, silent auctions, or community picnics are great ways to build a sense of connection and comradery around your organization's mission. Unfortunately, your standard General Liability insurance won't extend to off-site operations like a fundraising gala or donor pool party  unless an endorsement is added. Special Events insurance is one option available for these events to make sure that you are protected in case something happens during the festivities. Special Events coverage provides Liability protection for a limited time to cover injuries or damages caused at your fundraising events. By opting for this coverage, you can ensure that all of your guests have a great time and are covered if something goes wrong.
          </p>
          <p>
            Interested in learning more? Our team of commercial insurance agents is available to provide an in-depth review of your nonprofit organization to manage risks and protect your efforts.
          </p>
        </section>
      </main>
    </Layout>
  )
}
