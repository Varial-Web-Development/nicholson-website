import Link from "next/link"

export default function SpotlightSection({ events }) {
  return (
    <section className="section grid gap-8 md:gap-16 lg:gap-24 place-items-center bg-nicholson-blue-500">
      <h2 className="text-[26px] md:text-[40px] lg:text-5xl text-white">Community <span className="text-nicholson-green-500">Spotlight</span></h2>
      {events.map(event => {
        const { coverImage, name, url } = event.fields

        return (
          <div key={event._id} className="grid justify-center justify-items-center gap-4 lg:gap-8">
            <div className="bg-white rounded-full p-4">
              <Link href={url}>
                <a>
                  <picture>
                    <img src={`${coverImage.url}?w=750`} alt={coverImage.description} width="200" height="200" className="w-full max-w-[250px]" />
                  </picture>
                </a>
              </Link>
              
            </div>
            <Link href={url}>
              <a className="text-white text-lg md:text-xl lg:text-2xl font-medium">{name}</a>
            </Link>
          </div>
        )
      })}
      <Link href="/community">
        <a className="bg-nicholson-green-500 py-3 px-6 rounded-full w-full text-center max-w-[300px] lg:text-[20px] shadow">See all events</a>
      </Link>
    </section>
  )
}
