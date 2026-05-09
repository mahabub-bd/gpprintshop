export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(139,92,246,0.1),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(6,182,212,0.08),transparent_40%)]" />
      </div>

      {/* Header */}
      <header className="backdrop-blur-xl bg-black/50 border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GP</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">GP Print Shop</h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-300 hover:text-white text-sm transition-colors">Services</a>
              <a href="#pricing" className="text-slate-300 hover:text-white text-sm transition-colors">Pricing</a>
              <a href="#contact" className="text-slate-300 hover:text-white text-sm transition-colors">Contact</a>
            </nav>
            <a
              href="tel:+27697806240"
              className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-all"
            >
              Call Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-slate-300 text-sm">Open Now • Cape Town</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Premium Printing
              </span>
              <br />
              <span className="bg-linear-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Professional printing services for all your needs. Business cards, wedding invitations,
              photo prints & more — delivered fast.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/27618595087"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-cyan-500 to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-400 hover:to-cyan-500 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Started
              </a>
              <a
                href="tel:+27697806240"
                className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-all"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Same Day", value: "Printing" },
              { label: "5000+", value: "Happy Customers" },
              { label: "15+", value: "Years Experience" },
              { label: "100%", value: "Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Services</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">What We Offer</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Photo Printing", desc: "High-quality prints in all sizes", icon: "📷" },
              { title: "Photo Frames", desc: "Custom frames for your memories", icon: "🖼️" },
              { title: "Wedding Cards", desc: "Elegant invitations for your big day", icon: "💒" },
              { title: "Business Cards", desc: "Professional cards that impress", icon: "💼" },
              { title: "Flyers & Brochures", desc: "Marketing materials that stand out", icon: "📄" },
              { title: "Logo Design", desc: "Custom branding for your business", icon: "✏️" },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white/2 border border-white/10 rounded-2xl p-8 hover:bg-white/4 hover:border-cyan-500/30 transition-all"
              >
                <div className="text-5xl mb-5">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-slate-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-white/1">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Complete Printing Solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              "A4, A5, A3 Printing",
              "Color & B&W",
              "Digital Scanning",
              "Lamination",
              "ID Photos",
              "Email/Fax Service",
              "Invitation Cards",
              "Stickers & Labels",
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white/2 border border-white/10 p-5 rounded-xl text-center hover:border-cyan-500/20 transition-all"
              >
                <span className="text-slate-300">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">Simple, Transparent Pricing</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "B&W Printing", price: "From R2", features: ["A4 prints", "Fast turnaround", "Bulk discounts available"] },
              { name: "Color Printing", price: "From R5", features: ["Vibrant colors", "Premium paper", "Various sizes"] },
              { name: "Business Cards", price: "From R150", features: ["100 cards per pack", "Full color", "Design included"] },
            ].map((plan, i) => (
              <div key={i} className="bg-white/2 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                <ul className="space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-400 text-sm">
                      <svg className="w-5 h-5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-white/1">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Process</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Contact Us", desc: "Send us a message or call" },
              { step: "02", title: "Discuss", desc: "Tell us what you need" },
              { step: "03", title: "We Print", desc: "Quality prints, fast turnaround" },
              { step: "04", title: "Collect", desc: "Pick up or delivery" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-bold text-white/10 absolute -translate-y-4 -translate-x-1/2 left-1/2">{item.step}</div>
                <div className="relative bg-white/2 border border-white/10 rounded-2xl p-6 pt-10">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Sarah M.", text: "Fast service and excellent quality! Got my wedding invitations done in just 2 days.", stars: 5 },
              { name: "John P.", text: "Best prices in Cape Town. Been using them for years for all my business printing.", stars: 5 },
              { name: "Aisha K.", text: "Very professional and helpful. They helped me design the perfect logo.", stars: 5 },
            ].map((review, i) => (
              <div key={i} className="bg-white/2 border border-white/10 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.378-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-6">&ldquo;{review.text}&rdquo;</p>
                <p className="text-white font-semibold">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white/1">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Contact</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">Get In Touch</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">Have questions? Reach out and we&apos;ll get back to you within minutes</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+27 69 780 6240",
                  link: "tel:+27697806240",
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                  label: "WhatsApp",
                  value: "+27 61 859 5087",
                  link: "https://wa.me/27618595087",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "gpmini2024@gmail.com",
                  link: "mailto:gpmini2024@gmail.com",
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.145 2 11.25c0 2.96 1.587 5.586 3.986 7.117V22l3.735-2.076A10.07 10.07 0 0012 20.5c5.523 0 10-4.145 10-9.25S17.523 2 12 2zm1.09 12.483l-2.35-2.504-4.59 2.504 5.054-5.37 2.408 2.504 4.547-2.504-5.069 5.37z" />
                    </svg>
                  ),
                  label: "Messenger",
                  value: "Message us",
                  link: "https://m.me/gpprintshop",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 bg-white/2 border border-white/10 p-5 rounded-xl hover:bg-white/4 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Info Card */}
            <div className="bg-white/2 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Visit Our Shop</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm mb-1">Address</p>
                    <p className="text-white">
                      69 Victoria Road<br />Grassy Park<br />Cape Town, South Africa
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm mb-1">Hours</p>
                    <p className="text-white">
                      Mon-Fri: 8:00 - 18:00<br />
                      Sat: 9:00 - 15:00<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/27618595087"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full flex items-center justify-center gap-2 bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-bold py-4 rounded-xl hover:from-emerald-400 hover:to-emerald-500 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GP</span>
              </div>
              <div>
                <p className="text-white font-semibold">GP Print Shop</p>
                <p className="text-slate-500 text-sm">Fast • Quality • Affordable</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://wa.me/27618595087" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a href="https://m.me/gpprintshop" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.145 2 11.25c0 2.96 1.587 5.586 3.986 7.117V22l3.735-2.076A10.07 10.07 0 0012 20.5c5.523 0 10-4.145 10-9.25S17.523 2 12 2zm1.09 12.483l-2.35-2.504-4.59 2.504 5.054-5.37 2.408 2.504 4.547-2.504-5.069 5.37z" />
                </svg>
              </a>
            </div>
            <p className="text-slate-600 text-sm">© 2025 GP Print Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
