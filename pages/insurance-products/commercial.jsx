import Link from "next/link";
import Layout from "../../components/layouts/standard-page";

export default function CommercialInsurancePage() {
  return (
    <Layout>
      <main>
        <section className="section-alt flex flex-col gap-8 items-center">
          <h1 className="text-center text-5xl max-w-[20ch] mx-auto lg:w-fit leading-tight">
            <span className="text-nicholson-blue-500">Protecting</span> Business Owners Across the Pacific Northwest
          </h1>
          <p>
            Our local economies are quite vast, from major corporations and small businesses to impactful nonprofits organizations and public agencies. As a fellow business with roots right here in Washington and Oregon, Nicholson & Associates sees the potential of our surrounding communities and understands the challenges and opportunities that face every neighboring business owner. That's why we have sought to provide a wide range of Commercial Insurance coverages and options for many diverse industries. We value the contribution our business owners bring to the communities they serve, and we want to make sure that they can continue to thrive even in the worst of circumstances. 
          </p>
          <p>
            Through our comprehensive Commercial Insurance policies and coverage options, every business owner can feel confident in protecting one of their greatest accomplishments. Whether you are a new start-up or have a long legacy in the community, we are here to support your entrepreneurial goals and keep you viable when the unexpected strikes. It is truly a privilege to serve our fellow business owners and see the amazing things they can do to build and grow right here in the Pacific Northwest. 
          </p>
        </section>
        <section className="section-alt flex flex-col gap-8 items-center">
          <h2>Our Coverage Options</h2>
          <p>
            Commercial Insurance is quite broad, with a variety of in-depth and unique coverages designed to meet a range of concerns and interests. Each individual business is different, and every business owner has their own valid concerns when it comes to how they want to protect their investment, income, and future. Our team of experienced insurance professionals is here to help you determine the essential coverage for your business and provide industry counsel in choosing the right coverage for your needs. With our wide range of monoline insurance coverages, you can find exactly what you need to properly protect your small business or growing enterprise, all in one place. 
          </p>
          <div className="section-alt flex lg:flex-nowrap max-w-[1800px] justify-center mx-auto gap-24 md:gap-24 items-center">
            <Card>
              <img src="/img/shield.svg" alt="" width="256" height="256" />
              <h2 className="text-xl">Surety Bonds</h2>
              <p className="w-full max-w-[400px]">
                You know you are good for your word, but how can you prove it to potential customers? With our range of Surety Bonds, you can easily guarantee your work and demonstrate the high caliber of service to bring to the table. 
              </p>
              <Link href="/insurance-products/commercial/surety-bonds">
                <a className="bg-nicholson-blue-500 p-3 text-center text-white w-full max-w-[400px] rounded-full mt-4">
                  Learn more
                </a>
              </Link>
            </Card>
            <Card>
              <img src="/img/fall-down-stairs.svg" alt="" width="256" height="256" />
              <h2 className="text-xl">Liability Coverage</h2>
              <p className="w-full max-w-[400px]">
                Even the most cautious people can make mistakes. With Liability coverage, you can safeguard your assets against claims of negligence and keep your business going even in the face of a lawsuit. 
              </p>
              <Link href="/insurance-products/commercial/liability-coverage">
                <a className="bg-nicholson-blue-500 p-3 text-center text-white w-full max-w-[400px] rounded-full mt-4">
                  Learn more
                </a>
              </Link>
            </Card>
            <Card>
              <img src="/img/office-protected.svg" alt="" width="256" height="256" />
              <h2 className="text-xl">Property & Packages</h2>
              <p className="w-full max-w-[400px]">
                Starting any business isn't cheap, and starting over with any established company could be financially devastating. With Property coverage and business packages, you can protect your investments and easily replace destroyed assets after a physical loss.
              </p>
              <Link href="/insurance-products/commercial/property-and-packages">
                <a className="bg-nicholson-blue-500 p-3 text-center text-white w-full max-w-[400px] rounded-full mt-4">
                  Learn more
                </a>
              </Link>
            </Card>
          </div>
        </section>
        <section className="section-alt flex flex-col gap-8 items-center">
          <h2>Our Industries</h2>
          <p>
            We proudly provide Business Owner Policies, Commercial Package Policies, and supplemental commercial coverage tailored to a range of industries. Our team of licensed commercial insurance agents understands the unique risks presented to specific businesses, and we have the extensive and premier insurance markets to offer the right coverage at a competitive rate. Through our collaborative consultative process, we can help any business owner better understand their industry and create solutions for every concern. Together, we can make sure you are properly protected so you can focus on doing what you love. 
          </p>
          <div className="section-alt flex flex-col gap-24">
            <div className="flex flex-wrap lg:flex-nowrap max-w-[1800px] justify-center mx-auto gap-24 md:gap-24 items-center">
              <Card>
                <img src="/img/nursing-home.svg" alt="" width="256" height="256" />
                <h2 className="text-xl">Adult Family Homes</h2>
                <p className="w-full max-w-[400px]">
                  Protection for adult family homes that lets you focus on providing exceptional care. 
                </p>
                <Link href="/insurance-products/commercial/adult-family-homes">
                  <a className="bg-nicholson-blue-500 p-3 text-center text-white w-full max-w-[400px] rounded-full mt-4">
                    Learn more
                  </a>
                </Link>
              </Card>
              <Card>
                <img src="/img/weightlifting.svg" alt="" width="256" height="256" />
                <h2 className="text-xl">Athletic Clubs</h2>
                <p className="w-full max-w-[400px]">
                  Coverage for gyms, fitness studios, and health coaching services to keep health and fitness alive and well in the community.
                </p>
                <Link href="/insurance-products/commercial/athletic-clubs">
                  <a className="bg-nicholson-blue-500 p-3 text-center text-white w-full max-w-[400px] rounded-full mt-4">
                    Learn more
                  </a>
                </Link>
              </Card>
              <Card>
                <img src="/img/car.svg" alt="" width="256" height="256" />
                <h2 className="text-xl">Automotive</h2>
                <p className="w-full max-w-[400px]">
                  Policies and packages for auto shops and auto sales to support your automotive services and expertise. 
                </p>
                <Link href="/insurance-products/commercial/automotive">
                  <a className="bg-nicholson-blue-500 p-3 text-center text-white w-full max-w-[400px] rounded-full mt-4">
                    Learn more
                  </a>
                </Link>
              </Card>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap max-w-[1800px] justify-center mx-auto gap-24 md:gap-24 items-center">
            <Card>
                <img src="/img/pub.svg" alt="" width="256" height="256" />
                <h2 className="text-xl">Bars, Pubs, & Taverns</h2>
                <p className="w-full max-w-[400px]">
                  Coverage to keep bars, pubs, and taverns lively in all the right ways. 
                </p>
                <Link href="/insurance-products/commercial/bars-and-pubs">
                  <a className="bg-nicholson-blue-500 p-3 text-center text-white w-full max-w-[400px] rounded-full mt-4">
                    Learn more
                  </a>
                </Link>
              </Card>
              <Card>
                <img src="/img/beer-keg.svg" alt="" width="256" height="256" />
                <h2 className="text-xl">Breweries and Distilleries</h2>
                <p className="w-full max-w-[400px]">
                  Insurance solutions for breweries and distilleries so you can bring your craft to the community without worry.  
                </p>
                <Link href="/insurance-products/commercial/breweries-and-distilleries">
                  <a className="bg-nicholson-blue-500 p-3 text-center text-white w-full max-w-[400px] rounded-full mt-4">
                    Learn more
                  </a>
                </Link>
              </Card>
              <Card>
                <img src="/img/builder.svg" alt="" width="256" height="256" />
                <h2 className="text-xl">Contractors</h2>
                <p className="w-full max-w-[400px]">
                  Coverage for contractors involved in design, development, construction, and everything in between to keep our commercial and residential development booming.   
                </p>
                <Link href="/insurance-products/commercial/contractors">
                  <a className="bg-nicholson-blue-500 p-3 text-center text-white w-full max-w-[400px] rounded-full mt-4">
                    Learn more
                  </a>
                </Link>
              </Card>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap max-w-[1800px] justify-center mx-auto gap-24 md:gap-24 items-center">
              <Card>
                <img src="/img/firetruck.svg" alt="" width="256" height="256" />
                <h2 className="text-xl">Fire/Emergency Services</h2>
                <p className="w-full max-w-[400px]">
                  Protection for fire and emergency services that serve and protect our homes and businesses.   
                </p>
                <Link href="/insurance-products/commercial/emergency-services">
                  <a className="bg-nicholson-blue-500 p-3 text-center text-white w-full max-w-[400px] rounded-full mt-4">
                    Learn more
                  </a>
                </Link>
              </Card>
              <Card>
                <img src="/img/apartment.svg" alt="" width="256" height="256" />
                <h2 className="text-xl">Habitational</h2>
                <p className="w-full max-w-[400px]">
                  Policies and packages for habitational business owners so you can provide space for our growing families and entrepreneurs.   
                </p>
                <Link href="/insurance-products/commercial/habitational">
                  <a className="bg-nicholson-blue-500 p-3 text-center text-white w-full max-w-[400px] rounded-full mt-4">
                    Learn more
                  </a>
                </Link>
              </Card>
              <Card>
                <img src="/img/store.svg" alt="" width="256" height="256" />
                <h2 className="text-xl">Mercantile</h2>
                <p className="w-full max-w-[400px]">
                  Coverage for your retail shop to locally offer a range of goods to our community.  
                </p>
                <Link href="/insurance-products/commercial/mercantile">
                  <a className="bg-nicholson-blue-500 p-3 text-center text-white w-full max-w-[400px] rounded-full mt-4">
                    Learn more
                  </a>
                </Link>
              </Card>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap max-w-[1800px] justify-center mx-auto gap-24 items-center">
              <Card>
                <img src="/img/charity.svg" alt="" width="256" height="256" />
                <h2 className="text-xl">Nonprofit Organizations</h2>
                <p className="w-full max-w-[400px]">
                  Policies and packages for nonprofit organizations so you can focus on being the difference you want to see in the world.
                </p>
                <Link href="/insurance-products/commercial/non-profit">
                  <a className="bg-nicholson-blue-500 p-3 text-center text-white w-full max-w-[400px] rounded-full mt-4">
                    Learn more
                  </a>
                </Link>
              </Card>
              <Card>
                <img src="/img/lawyer.svg" alt="" width="256" height="256" />
                <h2 className="text-xl">Professionals</h2>
                <p className="w-full max-w-[400px]">
                  Insurance solutions for professionals such as doctors, lawyers, accountants, and more so you can provide consultative services to those in need. 
                </p>
                <Link href="/insurance-products/commercial/professionals">
                  <a className="bg-nicholson-blue-500 p-3 text-center text-white w-full max-w-[400px] rounded-full mt-4">
                    Learn more
                  </a>
                </Link>
              </Card>
              <Card>
                <img src="/img/restaurant.svg" alt="" width="256" height="256" />
                <h2 className="text-xl">Restaurants</h2>
                <p className="w-full max-w-[400px]">
                  Coverage for restaurants to provide a unique experience of food and connection. 
                </p>
                <Link href="/insurance-products/commercial/restaurants">
                  <a className="bg-nicholson-blue-500 p-3 text-center text-white w-full max-w-[400px] rounded-full mt-4">
                    Learn more
                  </a>
                </Link>
              </Card>
            </div>
          </div>
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