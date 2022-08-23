import { useState } from "react";
import Layout from "../components/layouts/standard-page";
import Spinner from "../components/ui/spinner";

export default function PolicyChange() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  
  function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)

    const { name, email, phone, carrier, policyNumber, comments } = event.target

    fetch('/api/forms/policy-change', {
      method: 'POST',
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        carrier: carrier.value,
        policyNumber: policyNumber.value,
        comments: comments.value,
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
      .catch(error => {
        setError('Server error. Please try again later.')
        setLoading(false)
      })

      
  }

  return (
    <Layout>
      <main className="section grid gap-8">
        <h1 className="text-center text-5xl w-[10ch] mx-auto lg:w-[20ch] leading-tight">Get <span className="text-nicholson-blue-500">Connected</span> with the Click of a Button</h1>
        <p className="mx-auto">
          Have some changes? No problem! You can easily fill out our Policy Change Request Form and 
          one of our licensed insurance agents will connect with you soon to make any necessary updates on your existing Nicholson policies. 
          If you are an existing Nicholson & Associates customer, please fill out the form below to submit a request, change, or update. 
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-[65ch] mx-auto w-full grid gap-4"
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
                required
              />
            </label>
            <label htmlFor="carrier" className="grid">
              Carrier
              <input 
                id="carrier"
                name="carrier"
                required
              />
            </label>
            <label htmlFor="policyNumber" className="grid">
              Policy Number
              <input 
                id="policyNumber"
                name="policyNumber"
                required
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
      </main>
    </Layout>
  )
}
