export default function CredentialsSection() {
  return (
    <section className="bg-gradient-to-r from-nicholson-blue-500 to-[#6890D4] p-4 pt-8 pb-12 md:px-[54px] lg:px-32 md:pt-16 md:pb-24 lg:pt-24 lg:pb-24 grid place-items-center">
      <div className="bg-white w-full max-w-[1468px] rounded-md p-8 grid md:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-12 shadow">
        <div className="grid gap-4 md:gap-7 justify-items-center">
          <img src="/img/open-sign.svg" width="100" height="100" alt="open sign" />
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-center">1965</h2>
          <p className="text-center md:max-w-[22ch]">Serving Washington needs since</p>
        </div>
        <div className="grid gap-4 md:gap-7 justify-items-center">
          <img src="/img/location-pin.svg" width="100" height="100" alt="open sign" />
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-center">4</h2>
          <p className="text-center md:max-w-[22ch]">Convenient Locations: <br /> Olympia, Centralia, Packwood, and Vancouver</p>
        </div>
        <div className="grid gap-4 md:gap-7 justify-items-center">
          <img src="/img/medal.svg" width="92" height="100" alt="open sign" />
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-center">23+</h2>
          <p className="text-center md:max-w-[22ch]">Top rated companies to choose the right fit</p>
        </div>
        <div className="grid gap-4 md:gap-7 justify-items-center">
          <img src="/img/star.svg" width="100" height="100" alt="open sign" />
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-center">4.9</h2>
          <p className="text-center md:max-w-[22ch]">Google star rating</p>
        </div>
      </div>
    </section>
  )
}