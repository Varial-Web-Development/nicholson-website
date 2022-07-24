export default function FreeQuoteForm() {
  function handleSubmit(event) {
    event.preventDefault()
    console.log('test')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 md:p-12 grid gap-4 rounded-md shadow-md w-full max-w-[688px]">
      <span className="text-nicholson-blue-500 text-lg md:text-[28px] lg:text-[40px] text-center font-medium">Get a Free Quote</span>
      <div className="grid gap-1">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" className="w-full" required />
      </div>
      <div className="grid gap-1">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className="w-full" required />
      </div>
      <div className="grid gap-1">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" className="w-full" required />
      </div>
      <div className="grid gap-1">
        <label htmlFor="insuranceType">Insurance Type</label>
        <select id="insuranceType" name="insuranceType" required>
          <option>Personal</option>
          <option>Business</option>
          <option>Life & Health</option>
        </select>
      </div>
      <div className="grid gap-1">
        <label htmlFor="comments">Questions or Comments</label>
        <textarea id="comments" name="comments" rows="4" className="w-full" />
      </div>
      <button className="action-button mt-4 shadow-sm">Get Quote</button>
    </form>
  )
}
