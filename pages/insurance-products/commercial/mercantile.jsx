import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/layouts/standard-page";

export default function MercantileInsurancePage() {
  return (
    <Layout>
      <Head>
        <title>Mercantile Coverage - Nicholson & Associates Insurance</title>
        <meta name="description" content="Insurance coverage for mercantile operations are designed to protect your products, staff, and brand." />
      </Head>
      <main> 
        <section className="section-alt flex flex-col gap-8 items-center">
          <h1 className="text-center text-5xl max-w-[20ch] mx-auto lg:w-fit leading-tight">
            <span className="text-nicholson-blue-500">Extensive</span> Insurance Options for Retail Owners
          </h1>
          <p>
            Retail is one of the oldest industries, and over time the risks at play have changed drastically. We understand how your market, needs, and operations have changed in the development of new technologies and advancements, and we are here to help you secure insurance to keep your sales and growth going strong. Our markets for mercantile businesses are robust and comprehensive so your innovation and creativity can be at the forefront of your mind.
          </p>
          <p>
            Insurance coverage for mercantile operations are designed to protect your products, staff, and brand. Some of the essential coverages specific to retail owners are:
          </p>
          <ul>
            <li>Business Personal Property</li>
            <li>Cyber Liability</li>
            <li>Employee Theft</li>
            <li>General Liability</li>
            <li>Inland Marine Coverage</li>
          </ul>
          <div className="bg-slate-100 grid gap-4 w-full max-w-[65ch] p-4 lg:p-8 shadow rounded-md">
            <legend className="text-xl font-medium text-center">Products</legend>
            <Link href="#property-protection">→ Property Protection</Link>
            <Link href="#negligence-coverage">→ Negligence Coverage</Link>
          </div>
        </section>
        <section id="property-protection" className="section-alt flex flex-col gap-8 items-center">
          <h2>Property Protection for Mercantile </h2>
          <p>
            Retail shops offer everything we need, and your unique brand comes with special products to bring a new level of convenience, efficiency, or perhaps fun to the lives of your customers. You depend on your space and inventory to keep growing, which is why physical hazards can be so detrimental for retail shops. Business Personal Property coverage protects the equipment and tools you use on a daily basis to run your business, including computers, printers, cash registers, credit card readers, and more. If there is a covered loss like a fire or theft, you will be able to replace the lost or damaged equipment so you can get right back on track.
          </p>
          <p>
            Depending on your business, you may opt to showcase your products outside of your store at fairs or events. Unfortunately, there are usually some limitations with Business Personal Property where your items may not be covered away from your store, especially while in transit. Inland Marine coverage is essential for protecting your inventory while it is off premises. This coverage will also cover raw materials used for your products while they are in transit to you and also extends to your items while they are being shipped to third-party vendors or customers in case they are lost, damaged, or stolen. If you operate with any of these potential risks, Inland Marine coverage is a great way to minimize the financial impact of these situations.
          </p>
          <p>
            No business owner likes to imagine that their staff would ever steal from them, but unfortunately it happens more than we might think. Employees often don't plan ahead for theft on the job, but rather are presented with small windows of opportunity where they believe they can get away with stealing. Employee Theft coverage protects you and your business against these potential opportunities and covers the financial impact of fraudulent staff activity. This could even include theft of money, securities, or customer property, so no matter the circumstances, you can recover from the loss and move forward.
          </p>
        </section>
        <section id="negligence-coverage" className="section-alt flex flex-col gap-8 items-center">
          <h2 className="max-w-[20ch] leading-tight text-center">Negligence Coverage for Mercantile</h2>
          <p>
            Retail shops traditionally operate in a physical space with displays and racks of inventory waiting for potential customers. If someone is hurt in your store or their property is somehow damaged, you want to be able to cover this and protect yourself in the process. General Liability is essential for every business owner, especially those that have a public space with foot traffic. This coverage pays for legal expenses associated with a lawsuit and settlements for medical bills or repair costs.
          </p>
          <p>
            As a retail shop owner, you deal with customer information with every transaction. Credit cards are the most popular payment method in this modern age, so your shop is logging this sensitive information quite often. Depending on the nature of your business, you may also collect personal information like address, phone number, or email address. If your system is ever hacked, this information could be compromised and wreak havoc on your brand and reputation, not to mention cost your customers a fortune to recover from identity theft or fraudulent transactions. Cyber Liability safeguards your business by covering expenses related to a cyber attack, including mandatory notifications, fixes to weaknesses in your technology, and costs incurred by your customers. This coverage is essential even if you have encryption software or high-level security on your technology.
          </p>
          <p>
            Ready to review your coverage? Our team of commercial insurance agents is here to help you fill in the gaps and get the right protection for your retail shop.
          </p>
        </section>
      </main>
    </Layout>
  )
}
