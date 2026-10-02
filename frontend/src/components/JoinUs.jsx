import { useState } from 'react'

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  contribution: '',
  availability: '',
  message: '',
}

function JoinUs() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setSubmitted(false)
  }

  function validate() {
    const nextErrors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phonePattern = /^[+\d][\d\s-]{9,14}$/

    if (!form.fullName.trim()) nextErrors.fullName = 'Please enter your full name.'
    if (!emailPattern.test(form.email.trim())) nextErrors.email = 'Please enter a valid email address.'
    if (!phonePattern.test(form.phone.trim())) nextErrors.phone = 'Please enter a valid phone number.'
    if (!form.city.trim()) nextErrors.city = 'Please enter your city.'
    if (!form.contribution) nextErrors.contribution = 'Please choose an area.'
    if (!form.availability) nextErrors.availability = 'Please choose your availability.'
    if (form.message.trim().length < 20) nextErrors.message = 'Please share at least 20 characters.'

    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitted(false)
      return
    }

    setErrors({})
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section className="bg-green-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="pt-4">
          <p className="font-semibold uppercase tracking-wide text-green-600">Join Us</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Be a part of Can Care Trust
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
            Your time, skills and involvement can help create meaningful change in the
            community.
          </p>
          <div className="mt-8 rounded-2xl border border-green-100 bg-white/70 p-6">
            <p className="font-semibold text-gray-900">Every contribution matters.</p>
            <p className="mt-2 leading-relaxed text-gray-600">
              Join a people-first network working for care, dignity, and hope across
              communities in Delhi.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" name="fullName" value={form.fullName} onChange={updateField} error={errors.fullName} placeholder="Your full name" />
            <Field label="Email Address" name="email" type="email" value={form.email} onChange={updateField} error={errors.email} placeholder="you@example.com" />
            <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={updateField} error={errors.phone} placeholder="+91 98765 43210" />
            <Field label="City" name="city" value={form.city} onChange={updateField} error={errors.city} placeholder="Your city" />

            <div className="sm:col-span-2">
              <label htmlFor="contribution" className="mb-2 block text-sm font-medium text-gray-800">
                How would you like to contribute?
              </label>
              <select id="contribution" name="contribution" value={form.contribution} onChange={updateField} className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100">
                <option value="">Select an area</option>
                <option value="community-outreach">Community outreach</option>
                <option value="women-empowerment">Women &amp; girls empowerment</option>
                <option value="health-camps">Health camps</option>
                <option value="education">Education &amp; awareness</option>
                <option value="environment">Environment protection</option>
                <option value="other">Other skills or support</option>
              </select>
              <ErrorMessage message={errors.contribution} />
            </div>

            <fieldset className="sm:col-span-2">
              <legend className="mb-2 block text-sm font-medium text-gray-800">Your availability</legend>
              <div className="grid grid-cols-3 gap-3">
                {['Weekdays', 'Weekends', 'Flexible'].map((option) => (
                  <label key={option} className={`cursor-pointer rounded-xl border px-3 py-3 text-center text-sm transition ${form.availability === option ? 'border-green-700 bg-green-50 font-semibold text-green-800' : 'border-gray-300 text-gray-600 hover:border-green-300'}`}>
                    <input type="radio" name="availability" value={option} checked={form.availability === option} onChange={updateField} className="sr-only" />
                    {option}
                  </label>
                ))}
              </div>
              <ErrorMessage message={errors.availability} />
            </fieldset>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-800">
                Why would you like to join us?
              </label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={updateField} placeholder="Tell us a little about your interests and how you would like to help." className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100" />
              <ErrorMessage message={errors.message} />
            </div>
          </div>

          <button type="submit" className="mt-6 w-full rounded-xl bg-green-700 px-6 py-3.5 font-semibold text-white transition hover:bg-green-800">
            Join Can Care Trust
          </button>

          {submitted && (
            <div role="status" className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
              <p className="font-bold">✓ Thank You!</p>
              <p className="mt-1">Your interest in joining Can Care Trust has been received.</p>
              <p className="mt-1">We appreciate your willingness to contribute.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, error, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-gray-800">{label}</label>
      <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100" />
      <ErrorMessage message={error} />
    </div>
  )
}

function ErrorMessage({ message }) {
  return message ? <p className="mt-1 text-sm text-red-600">{message}</p> : null
}

export default JoinUs