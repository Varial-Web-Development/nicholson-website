export default function SpotlightSection() {
  return (
    <section className="section grid gap-8 md:gap-16 lg:gap-24 place-items-center bg-nicholson-blue-500">
      <h2 className="text-[26px] md:text-[40px] lg:text-5xl text-white">Community <span className="text-nicholson-green-500">Spotlight</span></h2>
      <div className="bg-white px-8 py-14 md:px-12 md:py-[82px] rounded-full shadow-md">
        <img src="/img/stac-logo.svg" width="125" height="81" alt="Steamboat Tennis and Athletic Club" className="w-[176px]" />
      </div>
    </section>
  )
}
