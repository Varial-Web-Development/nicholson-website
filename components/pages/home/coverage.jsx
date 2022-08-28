import Link from "next/link";

export default function CoverageSection() {
  return (
    <section className="p-4 pt-8 pb-12 md:px-[54px] md:pt-16 md:pb-24 lg:px-16 lg:pt-24 lg:pb-32 grid gap-8 md:gap-16">
      <h2 className="text-center text-[26px] md:text-[40px] lg:text-5xl">Coverage For <span className="text-nicholson-blue-500 underline underline-offset-2 decoration-nicholson-green-500">Every</span> Need</h2>
      <div className="flex flex-col gap-8 md:gap-16 lg:flex-row flex-wrap justify-center items-center w-full">
        <div className="w-full md:w-fit grid gap-6 md:gap-7 justify-center justify-items-center p-6 md:p-8 border-[6px] border-nicholson-blue-500 rounded-[50px]">
          <img src="/img/garage.svg" width="205" height="205" alt="" className="md:w-[240px]" />
          <h3 className="text-center font-semibold text-xl md:text-[32px]">Personal Insurance</h3>
          <p className="max-w-[35ch]">
            From specialty dwellings to antique auto, we’ve got you covered. We represent a number of well-known and trusted personal insurance carriers so you can confidently cover your personal assets and protect yourself against the unknown. We have affordable and comprehensive options for auto insurance, home insurance, and recreational vehicles, so you can easily shop for the right coverage at the right price, all in one place. 
          </p>
          <Link href="/insurance-products/personal">
            <a className="bg-nicholson-blue-500 text-white w-full text-center md:text-[19px] py-2.5 rounded-full shadow-sm">Learn more</a>
          </Link>
        </div>
        <div className="w-full md:w-fit grid gap-6 md:gap-7 justify-center justify-items-center p-6 md:p-8 border-[6px] border-nicholson-blue-500 rounded-[50px]">
          <img src="/img/business-insurance.svg" width="205" height="205" alt="" className="md:w-[240px]" />
          <h3 className="text-center font-semibold text-xl md:text-[32px]">Business Insurance</h3>
          <p className="max-w-[35ch]">
            Business owners have many unique exposures, and we never want you to be left with a gap in your coverage. Our commercial insurance carriers and coverage options are specifically designed with your industry in mind, so you can rest easy knowing that your business is properly protected. Through our expert advisors and robust insurance packages, we can protect your livelihood and continue to help your business thrive through thick and thin.
          </p>
          <Link href="/insurance-products/commercial">
            <a className="bg-nicholson-blue-500 text-white w-full text-center md:text-[19px] py-2.5 rounded-full shadow-sm">Learn more</a>
          </Link>
        </div>
        <div className="w-full md:w-fit grid gap-6 md:gap-7 justify-center justify-items-center p-6 md:p-8 border-[6px] border-nicholson-blue-500 rounded-[50px]">
          <img src="/img/life-health-insurance.svg" width="196" height="205" alt="" className="md:w-[229px]" />
          <h3 className="text-center font-semibold text-xl md:text-[32px]">Life & Health Insurance</h3>
          <p className="max-w-[35ch]">
          You can never really expect the unexpected, which is why we are proud to offer insurance solutions to protect families and business owners alike. Through our health and life partners, we are able to provide protection for both individual life and health insurance as well as group benefits for employers and employees. With all the ifs in life, we are here to make sure the health and livelihood of you and your loved ones is properly protected. 
          </p>
          <Link href="/insurance-products/life-and-health">
            <a className="bg-nicholson-blue-500 text-white w-full text-center md:text-[19px] py-2.5 rounded-full shadow-sm">Learn more</a>
          </Link>
        </div>
      </div>
    </section>
  )
}