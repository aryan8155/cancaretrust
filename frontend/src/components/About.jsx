function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-wide text-green-600">About Us</p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Building a compassionate and empowered society
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Can Care Trust is a grassroots non-governmental organization founded by Ms.
            Kavita Srivastava with a strong commitment to serving vulnerable and
            marginalized communities.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            The Trust works with the vision of creating a compassionate, inclusive, and
            empowered society where every individual can live with dignity, security,
            and hope.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Operating at the grassroots level, Can Care Trust focuses on addressing
            real-life challenges faced by senior citizens, women, children, and
            environmentally affected communities.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-green-50 p-8">
            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              To build a caring and empowered society dedicated to social welfare,
              environmental protection, and inclusive development for all.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-8">
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>• Support and uplift helpless and underprivileged senior citizens.</li>
              <li>• Promote women empowerment through awareness and skill development.</li>
              <li>• Work towards environmental protection and sustainability.</li>
              <li>• Strengthen education and awareness at the grassroots level.</li>
              <li>• Create a culture of care, compassion, and social responsibility.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About