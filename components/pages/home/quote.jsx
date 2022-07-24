import FreeQuoteForm from "../../forms/free-quote";

export default function QuoteSection() {
  return (
    <section className="section grid gap-8 md:gap-16 lg:gap-24 place-items-center bg-gradient-to-b from-nicholson-blue-500 to-nicholson-green-500">
      <h2 className="text-white text-center">Experience the <span className="text-nicholson-green-500">Nicholson</span> Difference</h2>
      <FreeQuoteForm />
    </section>
  )
}
