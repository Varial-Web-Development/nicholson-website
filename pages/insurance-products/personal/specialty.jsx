import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/layouts/standard-page";

export default function SpecialtyInsurancePage() {
  return (
    <Layout>
      <Head>
        <title>Specialty Coverage - Nicholson & Associates Insurance</title>
        <meta name="description" content="With Specialty Insurance coverage, you can have protection that brings peace of mind and allows you truly enjoy the here and now." />
      </Head>
      <main>
        <section className="section-alt flex flex-col gap-8 items-center">
          <h1 className="text-center text-5xl max-w-[20ch] mx-auto lg:w-fit leading-tight">
            Specialty Coverage for <span className="text-nicholson-blue-500">Special</span> Moments
          </h1>
          <p>
            As we navigate through life, there are many wonderful ways that we celebrate each other and the world around us. Family vacations are milestone celebrations are some of the most important aspects of our lives, and we should do everything we can to preserve and protect them. With Specialty Insurance coverage, you can have protection that brings peace of mind and allows you truly enjoy the here and now. 
          </p>
          <div className="bg-slate-100 grid gap-4 w-full max-w-[65ch] p-4 lg:p-8 shadow rounded-md">
            <legend className="text-xl font-medium text-center">Products</legend>
            <Link href="#travel">→ Travel Insurance</Link>
            <Link href="#special-events">→ Special Events Insurance</Link>
            <Link href="#key-coverages">→ Key Coverages</Link>
          </div>
        </section>
        <section id="travel" className="section-alt flex flex-col gap-8 items-center">
          <h2>Travel Insurance</h2>
          <p>
            Whether it's for business or pleasure, traveling comes with its own set of surprises, and nothing is worse than getting sick while hundreds of miles from home. If you travel internationally, it is important to consider the possibility of becoming ill while in a foreign country and make arrangements to ensure you are properly protected.
          </p>
          <p>
            Imagine you are enjoying a romantic getaway or knee-deep in a three-day business trip, and suddenly you end up in a car accident. You are rushed to the hospital only to find that your American Health Insurance plan isn't accepted outside of the U.S. With medical expenses on the rise, even a minor injury could mean major medical bills. The last thing you want to worry about in a distant destination is coming out of pocket for treatment after an accident or incident. Travel Insurance removes that worry by providing coverage for medical bills during your international visits.
          </p>
          <p>
            Living somewhere inevitably allows you to develop immunity against local conditions. Depending on where you are headed, you may wish to consult a physician to make sure you are prepared for your trip. Foreign countries do not necessarily have a higher rate of disease, but are inherently more risky to outsiders because of a variety of environmental and cultural factors. Pollution levels and air quality, common viruses, and even food products may react differently in people that have not been exposed over a long enough period of time. By taking this extra precaution, you can understand any potential risks in the area and opt for any vaccinations, preventative care, and medications that can help prevent illness during your travels.
          </p>
          <p>
            Even with proactive health planning, Travel Insurance is still an essential policy to carry just in case the unexpected happens. <Link href="/contact-us"><a className="text-nicholson-blue-500 underline">Contact us</a></Link> today to speak with one of our licensed personal lines insurance agents and learn how Travel Insurance can help you stay protected overseas. 
          </p>
        </section>
        <section id="special-events" className="section-alt flex flex-col gap-8 items-center">
          <h2 className="max-w-[20ch] leading-tight text-center">Special Events Insurance</h2>
          <p>
            It's not every day that you get to celebrate 50 years in business or marry your lifelong sweetheart. For those memorable occasions, you never want to be left on the hook for damages or injuries that occurred during the celebration. With Special Events Insurance, you can protect yourself from liability that arises from a special event so you can really let your hair down and celebrate. 
          </p>
          <p>
            Special Events Insurance is essential in making sure your big day doesn't result in big consequences. Extravagant celebrations like weddings, anniversary parties, or baby showers come with quite the price tag, not to mention high stress in the planning phase. If something goes wrong before or during the celebration, there is a lot more at stake financially and emotionally to make it right. Special Events Insurance often has coverage options geared toward a range of relevant risks, including Liquor Liability, vendor issues, guest injuries, and damage to the venue.
          </p>
          <p>
            It may not be the most romantic part of wedding planning, but getting ahead of any potential problems will bring the bride, groom, and any other planners great peace of mind. As resilient as you may be as a couple, you probably don't want to test your problem-solving skills and tenacity right after you walk down the aisle. Additionally, you can often select cancellation coverage in the event your wedding cannot be held at all due to unforeseen circumstances out of your control. This can range from natural disasters to family emergencies and allows you to postpone your celebration without incurring a huge financial loss.
          </p>
          <p>
            Coverage for special events can also be used to cover commercial interests. Businesses often seek special events coverage for events they organize to recognize their staff or appreciate their loyal customers. As a business owner, you already have a wide range of potential risks, and you certainly don't want to add one more to the list. Unfortunately, your standard businessowners policy likely does not extend liability protection to special events since they are offsite and come with a unique set of risks. In these instances, Special Events Insurance is available to cover the business and relevant staff in the event something goes awry.
          </p>
          <p>
            With the amount of money being spent to throw a memorable event, it is well worth opting for some additional protection. <Link href="/contact-us"><a className="text-nicholson-blue-500 underline">Contact us</a></Link> today to speak with one of our licensed personal lines agents and discover how Special Events Insurance can protect your special day.
          </p>
        </section>
        <section className="section-alt flex flex-col gap-8 items-center">
          <h2 className="max-w-[20ch] leading-tight text-center">Key Coverages</h2>
          <div>
            <h3 className="text-lg lg:text-3xl">Liability</h3>
            <p>
              If someone is hurt or property is damaged at your event, you don't want to be left unprepared. Liability protects you in the event you are deemed negligent for Bodily Injury or Property Damage during a special event. This coverage is often required by the venue or company hosting the event, with a minimum requirement usually set at $1,000,000. This is often short-term coverage simply to protect the duration of the event, which could be as short as 24 hours. 
            </p>
          </div>
          <div>
            <h3 className="text-lg lg:text-3xl">Liquor Liability</h3>
            <p>
              Drinking comes with its own unique set of risks, namely personal injury and potential damage to property. Special events often come with the expectation of alcohol such as with an open bar or catering, so Liquor Liability should always be purchased for these cases. This coverage will protect you if you are deemed liable for the injury or damage to others caused by intoxication or as a result of accidental overserving.
            </p>
          </div>
          <div>
            <h3 className="text-lg lg:text-3xl">Cancellation Coverage</h3>
            <p>
              Organizing special events often requires upfront deposits to secure locations, food, and other party essentials. Cancellation coverage reimburses you for costs incurred to set up the event if the event is cancelled for unforeseen reasons. 
            </p>
          </div>
          <div>
            <h3 className="text-lg lg:text-3xl">Deductible</h3>
            <p>
              Not necessarily a coverage, this policy stipulation requires that a certain dollar amount be paid out of pocket before the policy can begin paying out. Essentially, your deductible is how much you want to be required to pay upfront before your insurance coverage can be utilized.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  )
}