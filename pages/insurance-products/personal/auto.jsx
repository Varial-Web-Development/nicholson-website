import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/layouts/standard-page";

export default function PersonalAutoPage() {
  return (
    <Layout>
      <Head>
        <title>Personal Auto Coverage - Nicholson & Associates Insurance</title>
        <meta name="description" content="We provide coverage options for your daily driver as well as the vintage one sitting 
            out back for emergencies. Cars are often not cheap to repair or replace, which is why 
            it is essential to understand how auto insurance can protect your motorized investments. 
            A personal insurance agent can help you determine the best way to protect your vehicles 
            while making the most of your budget." />
      </Head>
      <main>
        <section className="section-alt flex flex-col gap-8 items-center">
          <h1 className="text-center text-5xl max-w-[20ch] mx-auto lg:w-fit leading-tight">
            Auto Insurance Options for <span className="text-nicholson-blue-500">Every</span> Need
          </h1>
          <p>
            As a requirement by the state of Washington, auto insurance is often overlooked for the 
            essential and comprehensive protection that it is. We strive to create value in this 
            essential coverage by reviewing the benefits of auto insurance so you can see how it 
            works to protect you. With versatile coverage options and a range of insurance carriers, 
            you can easily find the right coverage for your vehicles. Our personal insurance agents 
            are here to offer guidance and support with your auto insurance so you can feel 
            confident that your coverage is tailored to meet your specific concerns and needs.
          </p>
          <div className="bg-slate-100 grid gap-4 w-full max-w-[65ch] p-4 lg:p-8 shadow rounded-md">
            <legend className="text-xl font-medium text-center">Products</legend>
            <Link href="#personal-auto">→ Personal auto</Link>
            <Link href="#antique-auto">→ Antique auto</Link>
            <Link href="#sr-22">→ SR-22</Link>
          </div>
        </section>
        <section id="personal-auto" className="section-alt flex flex-col gap-8 items-center">
          <h2>Personal Auto</h2>
          <p>
            We provide coverage options for your daily driver as well as the vintage one sitting 
            out back for emergencies. Cars are often not cheap to repair or replace, which is why 
            it is essential to understand how auto insurance can protect your motorized investments. 
            A personal insurance agent can help you determine the best way to protect your vehicles 
            while making the most of your budget. 
          </p>
          <p>
            Depending on the value and condition of your vehicle, you may wish to cover it 
            differently. While a brand new car is exciting and fun, it usually comes with some 
            immediate debt when you drive off the lot. If you get in an accident too soon after 
            purchase, the car could become totaled and the amount you owe on the car could exceed 
            what it is worth. Our Personal Auto Insurance policies come with options to fill this 
            gap between value and loan amount so you never get stuck footing the bill for a car 
            that has since been towed to the junkyard. 
          </p>
          <p>
            Personal Auto Insurance is more than just coverage for the car itself, though. It also 
            offers protection for negligence, which refers to any accidental damages or injuries 
            you may cause behind the wheel. Life is unpredictable, and even the safest, most 
            attentive drivers may one day find themselves in a car accident. When that happens, you 
            never want to be caught unprepared, which is why opting for adequate liability 
            insurance limits is so important. Our team understands how critical this coverage is 
            when it comes down to a claim and is ready to provide options for you so you can 
            determine the best way to protect yourself, your family, and your assets. 
          </p>
          <p>
            Personal Auto Insurance is an essential coverage, and we are here to help you make the 
            most of it. <Link href="/contact-us"><a className="text-nicholson-blue-500 underline">Contact us</a></Link> today to speak with one of our licensed personal insurance 
            agents to find the best solution for you.
          </p>
        </section>
        <section id="antique-auto" className="section-alt flex flex-col gap-8 items-center">
          <h2 className="max-w-[20ch] leading-tight text-center">Antique Auto, Collectible Cars, and Customized Vehicles</h2>
          <p>
            We know you take great pride in your vehicle and have invested your hard-earned money 
            into restoring it or keeping it in tip-top shape. There is a great deal of intrinsic 
            and social value tied to these unique and custom vehicles that unfortunately does not 
            translate onto a standard auto insurance policy. This is where specialty coverage for 
            your car comes in through antique auto insurers and customized coverage options to 
            protect your investment. 
          </p>
          <p>
            If you insure your antique auto or customized vehicle on a regular auto policy, you 
            unfortunately run the risk of getting paid less than it is worth. A Specialty Auto 
            policy allows you to state the value of the car based on the current market value 
            and your current total investment. This means that if you get in an accident, your 
            classic car won&apos;t be valued with depreciation like a standard vehicle. Instead, 
            the payout amount will be relevant to the value you chose to carry on your policy so 
            you can fully repair or replace it without skipping a beat. We know a loss like that 
            isn&apos;t easy to recover from since these vehicles can be quite rare or even 
            one-of-a-kind. However, with a specialty auto policy, this loss is softened since you 
            can insure your investment to value and have the funds you need to take advantage of 
            another collectible as soon as you find the right one. 
          </p>
          <p>
            While antique cars and custom parts may come with a high price tag, this coverage does 
            not. It is often quite affordable considering the additional protection you get. This 
            is largely because these policies are designed based on the regular use of the vehicle. 
            Often, your classic car is not your daily driver, so why should it be insured the same 
            way? Antique auto insurers take into account miles driven, event participation, and 
            improvements made to adjust your costs more closely to the potential risks. This helps 
            you get the coverage you need without breaking the bank. 
          </p>
          <p>
            <Link href="/contact-us"><a className="text-nicholson-blue-500 underline">Contact us</a></Link> today to speak to one of our licensed personal lines agents and discover how 
            an Antique, Classic, or Custom Auto Insurance policy can better protect your prized 
            possession.
          </p>
        </section>
        <section id="sr-22" className="section-alt flex flex-col gap-8 items-center">
          <h2 className="max-w-[20ch] leading-tight text-center">SR-22</h2>
          <p>
            We know that in life, we all make mistakes. When it comes to reckless driving or DUIs, 
            we are just glad to see you are safely on the other side and on the road to recovery. 
            Nicholson & Associates is proud to offer solutions for drivers requiring an SR-22 
            after a driving infraction or DUI. We make the process simple and painless so you can 
            get the coverage you need to recover your license and get back on the road. 
          </p>
          <p>
            So what is an SR-22? After getting a driving record infraction or DUI, the state often 
            requires the driver to file that they carry liability insurance. An SR-22 is an 
            additional form that can be added to personal auto insurance to prove that you are 
            carrying adequate protection. In most cases, an SR-22 is required by the state for 
            three years after the conviction. 
          </p>
          <p>
            It can be overwhelming to figure out where to start after something like this, and our 
            personal insurance agents are here to help. We offer multiple insurance carriers that 
            offer SR-22 so you can shop different options and find the most competitive protection 
            for you. Through our carriers, reporting your coverage and SR-22 to the state is 
            handled so you can return to your normal daily life without any extra hassle. 
          </p>
          <p>
            With Nicholson & Associates, you never have to face the aftermath of your infraction 
            alone. <Link href="/contact-us"><a className="text-nicholson-blue-500 underline">Contact us</a></Link> today to speak to one of our personal lines insurance agents and get 
            the support you need to get back on track. 
          </p>
        </section>
        <section className="section-alt flex flex-col gap-8 items-center">
          <h2 className="max-w-[20ch] leading-tight text-center">Key Coverages</h2>
          <div>
            <h3 className="text-lg lg:text-3xl">Liability</h3>
            <p>
              This coverage protects you in the event you are responsible for a car accident. It is 
              offered in a split limit to cover damages to physical property and injuries to 
              passengers in the other vehicle. It is essential to make sure you have high enough 
              limits to cover a potential accident and protect your assets. 
            </p>
          </div>
          <div>
            <h3 className="text-lg lg:text-3xl">Uninsured and Underinsured Motorist</h3>
            <p>
              With so many uninsured drivers on the road, this is a coverage you won&apos;t want to 
              skip over. Although the coverage is optional, it is highly recommended on every 
              policy in the event you are hit by an uninsured or underinsured driver or get caught 
              in a hit-and-run accident. This coverage acts like liability but pays for your own 
              damages and injuries. 
            </p>
          </div>
          <div>
            <h3 className="text-lg lg:text-3xl">Personal Injury Protection</h3>
            <p>
              Medical costs always seem to be on the rise, and you never want to get left on the 
              hook for unpaid hospital or doctor bills. Personal injury protection offers coverage 
              for medical bills for you and your passengers so you can get medical treatment right 
              away without worrying about accumulating medical debts you can&apos;t afford. Whether 
              you have health insurance or not, Personal Injury Protection is a great way to get 
              the care you need without the hassle. 
            </p>
          </div>
          <div>
            <h3 className="text-lg lg:text-3xl">Comprehensive & Collision</h3>
            <p>
              These two coverages often go hand in hand since they both protect physical damages to 
              your vehicle. So what&apos;s the difference? Comprehensive covers damages caused by 
              things other than a collision, such as a tree branch falling on your car or a rock 
              chipping your windshield. The only exception is collisions with animals on the road, 
              which are also covered under Comprehensive. Collision coverage, on the other hand, 
              strictly covers damages to your car caused by you colliding with another object, be 
              that another car, the garage door, or a telephone pole. Both come with a deductible 
              of your choice that you pay out of pocket in the event you file a claim to cover the 
              cost of repairs. 
            </p>
          </div>
          <div>
            <h3 className="text-lg lg:text-3xl">Towing</h3>
            <p>
              Nothing is worse than getting a flat tire on the way to work or having a transmission 
              failure while heading out for a long weekend. This coverage provides reimbursement 
              for towing expenses if your car becomes undrivable while out on the road. It usually 
              comes with a mileage limit, so be sure to verify the allotted distance for your 
              specific policy. 
            </p>
          </div>
        </section>
      </main>
    </Layout>
  )
}
