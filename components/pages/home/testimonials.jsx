export default function TestimonialsSection() {
  return (
    <section className="section grid gap-8 md:gap-16 lg:gap-24">
      <h2 className="text-center">Testimonials</h2>
      <div className="flex flex-col items-center gap-8 md:gap-16 lg:flex-row lg:justify-between">
        <Card 
          name="Susan A."
          review="I've always received excellent service and the entire staff at Nicholson & Associates is very professional and pleasant to work with."
        />
        <Card 
          name="Kylee Davis"
          review="I've never had an insurance agent be so helpful, and so caring before! I've been with Allstate, Farmers, Progressive, and now with Safeco. Hands down the best in Clark county! Cherie Walker was so helpful trying to help me figure out information about my old policy and I wasn't even a client at the time!"
        />
        <Card 
          name="Will Peppers Jr"
          review="Great place for low rates and excellent staff and service I recommend all I know looking for insurance."
        />
      </div>
    </section>
  )
}

function Card({ name, review }) {
  return (
    <div className="grid gap-4 md:gap-8 border-4 p-8 md:p-12 rounded-xl border-nicholson-blue-500">
      <div className="grid gap-1 md:gap-4 lg:gap-5">
        <h3 className="text-lg md:text-[32px]">{name}</h3>
        <div className="flex gap-1.5 md:gap-2.5">
          {[...Array(5)].map((a, i) => <img key={`star_${index}`} src="/img/star.svg" width="18" height="18" alt="" className="md:w-[30px] lg:w-[28px]" />)}
        </div>
      </div>
      <p className="text-[15px] md:text-[21px]">{review}</p>
    </div>
  )
}
