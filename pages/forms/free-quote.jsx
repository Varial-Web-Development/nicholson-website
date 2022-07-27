import FreeQuoteForm from "../../components/forms/free-quote";
import Layout from "../../components/layouts/standard-page";

export default function FreeQuotePage() {
  return (
    <Layout>
      <main className="section grid place-items-center bg-gradient-to-b from-nicholson-blue-500 to-nicholson-green-500">
        <FreeQuoteForm />
      </main>
    </Layout>
  )
}
