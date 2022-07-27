import Link from "next/link";
import Layout from "../components/layouts/standard-page";

export default function PageNotFound() {
  return (
    <Layout>
      <main className="section grid place-items-center">
        <div className="grid justify-items-center gap-4 text-center">
          <img src="/img/error-404.svg" alt="404 error" width="256" height="256" />
          <h1 className="text-3xl font-bold">404 - Page not found</h1>
          <p className="text-center">If you believe this is an error, feel free to <Link href="/contact-us"><a className="text-nicholson-blue-500 font-medium">contact us</a></Link>.</p>
        </div>
      </main>
    </Layout>
  )
}