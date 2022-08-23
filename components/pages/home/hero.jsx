import Link from "next/link";

export default function HeroSection() {
  return (
    <section 
      className={`
        bg-[url(https://media.nicholson-insurance.com/images/locations/nicholson-olympia?w=750)] 
        md:bg-[url(https://media.nicholson-insurance.com/images/locations/nicholson-olympia?w=1536)] 
        bg-center 
        lg:bg-right
        bg-cover 
        lg:bg-contain
        lg:bg-no-repeat
        w-screen
        min-w-screen
        aspect-[375/404] 
        lg:aspect-[1920/800] 
        grid 
        items-center 
        relative 
        px-4 
        md:px-10
        lg:px-32
      `}
    >
      <div className="relative z-10 grid gap-4 md:gap-8">
        <span className="text-[32px] md:text-5xl lg:text-[64px] leading-[39px] md:leading-[59px] lg:leading-[78px] tracking-[1.75px] font-extrabold text-white w-[10ch] md:w-[15ch]">Where Coverage Meets <span className="text-nicholson-green-500">Community</span></span>
        <Link href="/forms/free-quote">
          <a className="bg-nicholson-green-500 w-fit py-3 px-6 md:py-5 md:px-20 rounded-full font-semibold shadow-md md:text-2xl">Get a free quote today</a>
        </Link>
      </div>
      <div className="w-screen aspect-[375/404] lg:aspect-[1920/800] bg-gradient-to-r from-nicholson-blue-500 lg:via-nicholson-blue-500 lg:to-[hsl(218_25%_26%_/_0)] absolute" />
    </section>
  )
}
