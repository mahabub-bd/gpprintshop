export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">GP Print Shop</h1>
              <p className="text-blue-200 mt-2">Fast • Quality • Affordable Printing Solutions</p>
            </div>
            <div className="text-right hidden md:block">
              <p className="font-semibold">Same-Day Printing Available</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Your One-Stop Print Shop</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Professional printing services for all your needs. From business cards to wedding invitations,
            we deliver quality prints with fast turnaround times.
          </p>
          <a
            href="tel:+27697806240"
            className="inline-block bg-white text-blue-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-100 transition-colors shadow-lg"
          >
            Call Now: +27 69 780 6240
          </a>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="text-5xl mb-4">📷</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Photo & Personalized Printing</h3>
              <p className="text-gray-600">High-quality photo prints and personalized items for all occasions</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="text-5xl mb-4">🖼️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Photo Frames</h3>
              <p className="text-gray-600">Custom frames to showcase your precious memories</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Invitation Cards</h3>
              <p className="text-gray-600">Beautiful invitations for birthdays, parties, and special events</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="text-5xl mb-4">💒</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Wedding Cards</h3>
              <p className="text-gray-600">Elegant wedding invitations and stationery for your big day</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Services List */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Complete Printing Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">📄 A4, A5, A3 Printing</h3>
              <p className="text-gray-600">All standard sizes available</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">🎨 Color Printing</h3>
              <p className="text-gray-600">Vibrant, high-quality color prints</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">⬛ Black & White Printing</h3>
              <p className="text-gray-600">Crisp monochrome documents</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">🖨️ Digital Scanning</h3>
              <p className="text-gray-600">Professional digitization services</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">✏️ Logo Design</h3>
              <p className="text-gray-600">Custom branding and logo creation</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">🔒 Lamination Service</h3>
              <p className="text-gray-600">Protect your important documents</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">📧 Email/Fax Service</h3>
              <p className="text-gray-600">Document transmission services</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">🪪 ID Photos</h3>
              <p className="text-gray-600">Passport size and ID photos</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">⚡ Same-Day Printing</h3>
              <p className="text-gray-600">Fast turnaround when you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose GP Print Shop?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900">Fast Service</h3>
              <p className="text-gray-600">Same-day printing available for urgent orders</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900">Quality Prints</h3>
              <p className="text-gray-600">High-resolution printing on premium materials</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900">Affordable Prices</h3>
              <p className="text-gray-600">Competitive rates without compromising quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:+27697806240" className="text-blue-200 hover:text-white transition-colors">
                +27 69 780 6240
              </a>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/27618595087"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
              >
                +27 61 859 5087
              </a>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a
                href="mailto:gpmini2024@gmail.com"
                className="text-blue-200 hover:text-white transition-colors"
              >
                gpmini2024@gmail.com
              </a>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-blue-200">
                69 Victoria Road<br />
                Grassy Park<br />
                Cape Town, South Africa
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/27618595087"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">GP Print Shop</p>
          <p className="text-gray-400">Fast • Quality • Affordable Printing Solutions</p>
          <p className="text-gray-500 mt-4 text-sm">© 2025 GP Print Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
