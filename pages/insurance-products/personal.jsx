import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layouts/standard-page";

export default function PersonalInsurancePage() {
  return (
    <Layout>
      <Head>
        <title>Personal Insurance - Insurance Products - Nicholson & Associates Insurance</title>
        <meta name="description" content="Our team is experienced and licensed in Property & Casualty insurance products, including auto insurance, home and specialty dwelling policies, and coverage for toys such as motorcycles, boats, and RVs. Here you can find all the protection you need in one convenient place. " />
      </Head>
      <main>
        <section className="section-alt flex flex-col gap-8 items-center">
          <h1 
            className={`
              mx-auto 
              leading-tight
              lg:w-fit 
              w-[8ch]
              max-w-[20ch] 
              text-5xl 
              text-center 
            `}
          >
            Personal Insurance with a Personal Touch
          </h1>
          <p>
            Insurance can sometimes feel like a disconnected and complicated 
            aspect of life. What am I covered for? Who do I call for help? 
            Why is this insurance coverage important? With Nicholson & 
            Associates, you always have a licensed personal lines insurance 
            agent ready to answer these questions and more. We make insurance 
            personal by getting to know your unique needs and lifestyle so 
            we can properly protect you against a range of potential risks. 
            No two homes, cars, or people are alike, so why should you accept 
            a one-size-fits-all policy? We understand the diversity amongst 
            our clients and work diligently to ensure you and your family are 
            appropriately covered.
          </p>
          <p>
            Our team is experienced and licensed in Property & Casualty 
            insurance products, including auto insurance, home and specialty 
            dwelling policies, and coverage for toys such as motorcycles, 
            boats, and RVs. Here you can find all the protection you need in 
            one convenient place. 
          </p>
        </section>
        {/* <section className="section-alt flex flex-wrap items-center justify-evenly"> */}
        {/* <section className="grid lg:grid-cols-3 justify-items-center"> */}
        <section className="section-alt flex flex-wrap max-w-[1720px] justify-center mx-auto gap-24 md:gap-24 items-start">
          <Card>
            <div className="grid gap-4">
              <img src="/img/car.svg" alt="" width="256" height="256" />
              <h2 className="text-xl">Personal Auto Insurance</h2>
            </div>
            <p className="w-full max-w-[400px] text-base leading-relaxed text-center">
              For many drivers, auto insurance often feels like a forced 
              additional expense. We strive to create value in this essential 
              coverage by walking you through your policy one step at a time. 
              By understanding your auto insurance, you can make decisions on 
              how you wish to be covered in the event of an accident. From 
              classic cars to daily drivers, we have auto insurance options 
              for every need.
            </p>
            <Link href="/insurance-products/personal/auto">
              <a className="p-3 text-nicholson-blue-500 w-full rounded-full text-center border border-nicholson-blue-500 mt-4">
                Explore Personal Auto Insurance
              </a>
            </Link>
          </Card>
          <Card>
            <div className="grid gap-4">
              <img src="/img/house.svg" alt="" width="256" height="256" />
              <h3 className="text-xl">Home & Dwelling Insurance</h3>
            </div>
            <p className="w-full max-w-[400px] text-base leading-relaxed text-center">
              Homeownership is an incredibly exciting accomplishment, which is why you want to make 
              sure you have the right coverage to protect your investment. We are partnered with 
              many top-rated insurance companies that are designed to cover every homeowner. We 
              know no two homes are exactly alike, and our licensed insurance agents can help you 
              find the right coverage, whether it's for your condo, apartment, home, or rental 
              property. 
            </p>
            <Link href="/insurance-products/personal/home-and-dwelling">
              <a className="p-3 text-nicholson-blue-500 w-full rounded-full text-center border border-nicholson-blue-500 mt-4">
                Explore Home & Dwelling Insurance
              </a>
            </Link>
          </Card>
          <Card>
            <img src="/img/extreme-weather.svg" alt="" width="256" height="256" />
            <h3 className="text-xl">Catastrophic Insurance</h3>
            <p className="w-full max-w-[400px] text-base leading-relaxed text-center">
              No one wants to think about a natural disaster hitting their town, but the reality is 
              that major catastrophes can happen anywhere, even in your own backyard. With flood 
              zones and dormant volcanoes surrounding our beautiful landscapes, a catastrophic 
              incident may not be as far off as you hoped. Luckily, we have catastrophic insurance 
              options to protect you no matter what comes your way. You may not be able to predict 
              a major loss, but with us, you can always be prepared. 
            </p>
            <Link href="/insurance-products/personal/catastrophic">
              <a className="p-3 text-nicholson-blue-500 w-full rounded-full text-center border border-nicholson-blue-500 mt-4">
                Explore Catastrophic Insurance
              </a>
            </Link>
          </Card>
          <Card>
            <img src="/img/motorcycle.svg" alt="" width="256" height="256" />
            <h3 className="text-xl">Toys & Recreational Vehicle Insurance</h3>
            <p className="w-full max-w-[400px] text-base leading-relaxed text-center">
              When that sunshine hits, we are all eager to get out and enjoy it. Summer boating 
              excursions and backwoods ATV trips are all part of the adventure that awaits in the
              Pacific Northwest. Unfortunately, even the most enjoyable things can still come with 
              risks. Whether it's a cross-country roadtrip with your travel trailer or a 
              motorcycle ride up the coast, our comprehensive insurance options can cover your 
              favorite recreational vehicles while in use and during those long off-season months. 
            </p>
            <Link href="/insurance-products/personal/recreational">
              <a className="p-3 text-nicholson-blue-500 w-full rounded-full text-center border border-nicholson-blue-500 mt-4">
                Explore Recreational Vehicle Insurance
              </a>
            </Link>
          </Card>
          <Card>
            <img src="/img/suitcase.svg" alt="" width="256" height="256" />
            <h3 className="text-xl">Specialty Insurance</h3>
            <p className="w-full max-w-[400px] text-base leading-relaxed text-center">
              There are many special moments throughout life that are worth protecting. Traveling 
              to faraway places or throwing once-in-a-lifetime events shouldn&apos;t have anything 
              left to chance, which is why we provide specialty insurance policies to cover you 
              even in these unique situations. Travel Insurance and Special Event coverage are just 
              some of the ways we can help safeguard the memories you will cherish.
            </p>
            <Link href="/insurance-products/personal/specialty">
              <a className="p-3 text-nicholson-blue-500 w-full rounded-full text-center border border-nicholson-blue-500 mt-4">
                Explore Specialty Insurance
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
        h-full
        relative  
      `}
    >
      {children}
    </div>
  )
}
