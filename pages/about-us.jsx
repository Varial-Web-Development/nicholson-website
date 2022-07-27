import Layout from "../components/layouts/standard-page";

export default function AboutPage() {
  return (
    <Layout>
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
              <source srcSet="https://media.nicholson-insurance.com/objects/team/drake-nicholson-cropped?w=940" media="(min-width: 1024px" />
              <source srcSet="https://media.nicholson-insurance.com/objects/team/drake-nicholson-cropped?w=1600" media="(min-width: 768px)" />
              <img src="https://media.nicholson-insurance.com/objects/team/drake-nicholson-cropped?w=750" alt="Drake Nicholson" width="375" height="281" className="w-full lg:max-w-[470px] aspect-[4/3] object-cover rounded-md shadow" />
            </picture>
          </div>
          <div className="grid gap-8 md:gap-16 lg:flex lg:gap-24 justify-center items-center">
            <p>
              Family is the very foundation of our agency. Without connection, we have nothing, and it is through this pursuit of connection that we are able to build each other up. 
              Our customers can feel the difference in working with our dedicated and experienced team. With many insurance companies, 
              it can sometimes feel like you are just a name on a screen or a policy number. 
              With us, you truly become part of our Nicholson family, and with that comes a commitment to service and excellence that is unmatched anywhere else. 
            </p>
            <img src="https://media.nicholson-insurance.com/objects/stock-images/family?w=750" className="rounded-md" />
            {/* <picture className="w-fit height-auto">
              <source srcSet="https://media.nicholson-insurance.com/objects/stock-images/family?w=940" media="(min-width: 1024px" />
              <source srcSet="https://media.nicholson-insurance.com/objects/stock-images/family?w=1600" media="(min-width: 768px)" />
              <img src="https://media.nicholson-insurance.com/objects/stock-images/family?w=750" alt="Drake Nicholson" width="343" height="230" className="w-full lg:max-w-[470px] rounded-lg shadow block" />
            </picture> */}
          </div>
        </section>
      </main>
    </Layout>
  )
}