import Head from 'next/head'
import Link from "next/link";
import Layout from "../components/layouts/standard-page";

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>Experience the Nicholson Difference - Nicholson & Associates</title>
        <meta name="description" content="about us description" />
      </Head>
      <main>
        <section className="section grid gap-8 md:gap-16 lg:gap-24">
          <h1 className="text-center grid text-[36px] uppercase tracking-[1.75px]">The <span className="text-nicholson-blue-500 text-[48px]">Nicholson</span> Difference</h1>
          <div className="grid gap-8 md:gap-16 lg:flex lg:gap-24 justify-center items-center">
            <p>
              Nicholson & Associates Insurance LLC was established in 1965 by Larry & Marlene Nicholson with a mission to bring insurance solutions to the local community. 
              The agency was honorably passed on to their son Drake Nicholson, who has continued to bring their vision to life as a leader and experienced insurance agent. 
              Over 50 years later, our commitment to service and community is stronger than ever as we strive to protect what matters most to our neighboring families and business owners. 
            </p>
            <picture className="rounded-md aspect-[4/3]">
              <source srcSet="https://media.nicholson-insurance.com/images/team/drake-nicholson?w=960&h=720" media="(min-width: 1024px" />
              <source srcSet="https://media.nicholson-insurance.com/images/team/drake-nicholson?w=1600&h=1200" media="(min-width: 768px)" />
              <img src="https://media.nicholson-insurance.com/images/team/drake-nicholson?w=752&h=564" alt="Drake Nicholson" width="375" height="281" className="w-full lg:max-w-[470px] aspect-[4/3] object-cover rounded-md shadow" />
            </picture>
          </div>
          <div className="grid gap-8 md:gap-16 lg:flex lg:gap-24 justify-center items-center">
            <p className="lg:order-2">
              Family is the very foundation of our agency. Without connection, we have nothing, and it is through this pursuit of connection that we are able to build each other up. 
              Our customers can feel the difference in working with our dedicated and experienced team. With many insurance companies, 
              it can sometimes feel like you are just a name on a screen or a policy number. 
              With us, you truly become part of our Nicholson family, and with that comes a commitment to service and excellence that is unmatched anywhere else. 
            </p>
            <picture className="w-fit height-auto">
              <source srcSet="https://media.nicholson-insurance.com/images/team/paco-noelle?w=960&h=720" media="(min-width: 1024px" />
              <source srcSet="https://media.nicholson-insurance.com/images/team/paco-noelle?w=1600&h=1200" media="(min-width: 768px)" />
              <img src="https://media.nicholson-insurance.com/images/team/paco-noelle?w=752&h=564" alt="Paco and Noelle" width="320" height="240" className="w-full lg:max-w-[470px] rounded-md shadow block" />
            </picture>
          </div>
          <div className="grid gap-8 md:gap-16 lg:flex lg:gap-24 justify-center items-center">
            <p className="">
              Alongside our customer service, we offer a diverse portfolio of top-rated insurance carriers. 
              With these partnerships we are able to provide insurance solutions to meet almost any need and protect the things that matter most. 
              Rather than being left with limited product and price options, 
              you will have access to a variety of carriers and coverages so you can find the right protection within your budget. 
              The best part? No matter which carrier you choose, you always have our local team here to help when you need it. 
            </p>
            <picture className="w-fit height-auto">
              <source srcSet="https://media.nicholson-insurance.com/images/team/customer-service-olympia?w=960&h=720" media="(min-width: 1024px" />
              <source srcSet="https://media.nicholson-insurance.com/images/team/customer-service-olympia?w=1600&h=1200" media="(min-width: 768px)" />
              <img src="https://media.nicholson-insurance.com/images/team/customer-service-olympia?w=752&h=564" alt="Family with baby in cute hat" width="320" height="240" className="w-full lg:max-w-[470px] rounded-md shadow block" />
            </picture>
          </div>
          <p className="text-center justify-self-center">You deserve more than a 1-800 number and hold music. <Link href="/contact-us"><a className="text-blue-600 font-medium">Contact us</a></Link> today and experience the Nicholson difference for yourself. </p>
        </section>
        <section className="section grid gap-8 md:gap-16 lg:gap-24 bg-gradient-to-b from-nicholson-blue-500 to-nicholson-green-500 justify-center">
          <h2 className="text-white text-center">Our <span className="text-nicholson-green-500">Mission</span></h2>
          <div className="bg-white p-4 md:p-8 lg:p-16 grid gap-8 md:gap-16 lg:gap-24 rounded-md shadow-md max-w-[1664px] ">
            <div className="grid gap-8 md:gap-16 lg:flex lg:gap-24 justify-center items-center">
              <p>
                As we look to the future, we see so much opportunity to continue to serve, protect, and connect with our community. 
                We are deeply passionate about our neighbors and want to see them flourish, even in the midst of loss or uncertainty. 
                With Nicholson & Associates, you can experience peace of mind and support no matter what comes your way. 
              </p>
              <picture>
                <source srcSet="https://media.nicholson-insurance.com/images/team/drake-and-tiffany?w=960&h=720" media="(min-width: 1024px" />
                <source srcSet="https://media.nicholson-insurance.com/images/team/drake-and-tiffany?w=1600&h=1200" media="(min-width: 768px)" />
                <img src="https://media.nicholson-insurance.com/images/team/drake-and-tiffany?w=752&h=564" alt="Drake Nicholson and Tiffany Karpavicius sitting at meeting table" width="320" height="240" className="w-full lg:max-w-[470px] rounded-md shadow block" />
              </picture>
            </div>
            <div className="grid gap-8 md:gap-16 lg:flex lg:gap-24 justify-center items-center">
              <p className="lg:order-2 [hyphens:auto]">
                Our mission is to provide innovative insurance solutions for every risk while educating every client on risk management techniques. 
                We work diligently to build trust and deliver on our commitments with results that consistently exceed expectations. 
              </p>
              <picture>
                <source srcSet="https://media.nicholson-insurance.com/images/team/claudia-at-desk?w=960&h=720" media="(min-width: 1024px" />
                <source srcSet="https://media.nicholson-insurance.com/images/team/claudia-at-desk?w=1600&h=1200" media="(min-width: 768px)" />
                <img src="https://media.nicholson-insurance.com/images/team/claudia-at-desk?w=752&h=564" alt="Claudia Martinez sitting at front desk working in Centralia office" width="320" height="240" className="w-full lg:max-w-[470px] rounded-md shadow block" />
              </picture>
            </div>
          </div>
        </section>
        <section className="section grid gap-8 md:gap-16 lg:gap-24 justify-center">
          <h2 className='text-center'>Who <span className='text-nicholson-blue-500'>We</span> Are</h2>
          <div className="grid gap-8 md:gap-16 lg:flex lg:gap-24 justify-center items-center">
            <p className=''>
              We know insurance can feel overwhelming and complicated at times. 
              Our associates are well-versed and experienced in a variety of insurance products. 
              Through our expertise, we are able to provide guidance and support to find the right insurance solution for you and properly protect against all types of risk. 
            </p>
            <picture className="rounded-md aspect-[4/3]">
              <source srcSet="https://media.nicholson-insurance.com/images/team/jami-cherie-carol-edited?w=960&h=720" media="(min-width: 1024px" />
              <source srcSet="https://media.nicholson-insurance.com/images/team/jami-cherie-carol-edited?w=1600&h=1200" media="(min-width: 768px)" />
              <img src="https://media.nicholson-insurance.com/images/team/jami-cherie-carol-edited?w=752&h=564" alt="Drake Nicholson" width="375" height="281" className="w-full lg:max-w-[470px] aspect-[4/3] object-cover rounded-md shadow" />
            </picture>
          </div>
          <div className="grid gap-8 md:gap-16 lg:flex lg:gap-24 justify-center items-center">
            <p className='lg:order-2'>
              Our licensed insurance professionals have long been devoted to providing the highest level of service, commitment, and care to meet our clients every need. 
              Each step of the way, our risk management advisors are available to provide the guidance and support to help you navigate the world of insurance. 
              Our team is skilled in a variety of commercial industries and personal insurance products, so you can easily work with our agency to cover everything all in one convenient place. 
            </p>
            <picture className="rounded-md aspect-[4/3]">
              <source srcSet="https://media.nicholson-insurance.com/images/team/nikki-amanda?w=960&h=720" media="(min-width: 1024px" />
              <source srcSet="https://media.nicholson-insurance.com/images/team/nikki-amanda?w=1600&h=1200" media="(min-width: 768px)" />
              <img src="https://media.nicholson-insurance.com/images/team/nikki-amanda?w=752&h=564" alt="Drake Nicholson" width="375" height="281" className="w-full lg:max-w-[470px] aspect-[4/3] object-cover rounded-md shadow" />
            </picture>
          </div>
          <div className="grid gap-8 md:gap-16 lg:flex lg:gap-24 justify-center items-center">
            <p className=''>
              Our agents not only work in and serve our community, but they are also community members themselves. 
              They understand our local areas and the values of our town. 
              Our insurance agents and associates truly care about making their local communities great and are eager to help business owners, individuals, and families alike thrive. 
              When they can make a difference, we all win. 
              We feel privileged to live in such a wonderful community and have the opportunity to serve, protect, and connect with our local neighbors and business owners. 
            </p>
            <picture className="rounded-md aspect-[4/3]">
              <source srcSet="https://media.nicholson-insurance.com/images/team/drake-ally?w=960&h=720" media="(min-width: 1024px" />
              <source srcSet="https://media.nicholson-insurance.com/images/team/drake-ally?w=1600&h=1200" media="(min-width: 768px)" />
              <img src="https://media.nicholson-insurance.com/images/team/drake-ally?w=752&h=564" alt="Drake Nicholson" width="375" height="281" className="w-full lg:max-w-[470px] aspect-[4/3] object-cover rounded-md shadow" />
            </picture>
          </div>
        </section>
      </main>
    </Layout>
  )
}