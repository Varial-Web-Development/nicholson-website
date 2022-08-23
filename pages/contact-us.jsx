import Head from "next/head";
import { useState } from "react";
import Layout from "../components/layouts/standard-page";
import Spinner from "../components/ui/spinner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    const { name, email, phone, comments, newsletter } = event.target

    fetch('/api/forms/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        comments: comments.value,
        newsletter: newsletter.checked,
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response.success) {
        setSent(true)
      } else {
        if (response.error_message === 'client mail gun error') setSent(true)
        if (response.error_message === 'mail gun error') setError('Server error. Please try again later.')
      }

      setLoading(false)
    })
  }

  return (
    <Layout>
      <Head>
        <title>Contact Us - Nicholson & Associates Insurance</title>
        <meta name="description" content="Have questions or need help with your insurance? We would love to hear from you! Please fill out the form below and we will be in touch with you soon." />
      </Head>
      <main className="section grid gap-8 md:gap-16 lg:gap-24">
        <div className="grid gap-4">
          <h1 className="text-center text-5xl w-[10ch] mx-auto lg:w-[20ch] leading-tight">Contact <span className="text-nicholson-blue-500">Us</span></h1>
          <p className="mx-auto">
            Have questions or need help with your insurance? We would love to hear from you! Please fill out the form below and we will be in touch with you soon. 
          </p>
        </div>
        <section className="grid lg:grid-cols-2 max-w-[1416px] mx-auto gap-8 lg:gap-32 w-full items-center">
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 max-w-[592px] md:w-[592px] mx-auto"
          >
            {error && <p className="text-red-700">{error}</p>}
            <label htmlFor="name" className="grid">
              Name
              <input
                id="name"
                name="name"
                required
              />
            </label>
            <label htmlFor="email" className="grid">
              Email
              <input
                id="email" 
                type="email"
                name="email"
                required
              />
            </label>
            <label htmlFor="phone" className="grid">
              Phone
              <input 
                id="phone"
                name="phone"
              />
            </label>
            <label htmlFor="comments" className="grid">
              Question or Comments
              <textarea 
                id="comments"
                name="comments"
                rows="4"
                className="resize-none"
                required
              />
            </label>
            <label htmlFor="newsletter" className="flex gap-4 items-center">
              <input 
                type="checkbox"
                id="newsletter"
                name="newsletter"
              />
              Sign up for newsletter?
            </label>
            <button 
              className={`bg-nicholson-blue-500 rounded-full text-white py-2.5 px-8 w-fit ${sent && 'bg-nicholson-green-500 text-black'}`}
              disabled={sent || loading}
            >
              {sent ? (
                'Message sent!'
              ) : (
                loading ? (
                  <Spinner width="16" height="16" />
                ) : (
                  'Submit'
                )
              )}
            </button>
          </form>
            <div
              style={{
                clipPath: 'polygon(0 10%, 100% 10%, 100% 100%, 0% 100%)',
              }}
            >
              <iframe 
                src="https://maps.google.com/maps/d/embed?mid=1jFYMtPzOj0kMDmO0mQ-scIyy1sY-6RY"
                className="w-full md:w-[592px] lg:w-full mx-auto h-full min-h-[300px] md:min-h-[450px] lg:min-h-[600px] relative -top-[30px]"
              />
            </div>
        </section>
      </main>
    </Layout>
  )
}