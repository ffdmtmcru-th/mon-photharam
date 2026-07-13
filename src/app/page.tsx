import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600">
      {/* Navigation */}
      <nav className="bg-black bg-opacity-20 backdrop-blur-md p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Mon Photharam</h1>
          <div className="flex gap-4">
            <Link href="/ramany-withi" className="text-white hover:text-yellow-300 transition font-semibold">
              🏛️ Ramany Withi
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Mon Photharam
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Integrated Digital Media for Sustainable Tourism Development
          </p>
          <p className="text-lg text-blue-100 mb-12">
            Case Study: Photharam District, Ratchaburi Province
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link
              href="/ramany-withi"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
            >
              🏛️ Explore Ramany Withi
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 text-white">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Local Culture</h3>
              <p className="text-blue-100">Discover authentic Mon traditions and heritage</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 text-white">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Creative Economy</h3>
              <p className="text-blue-100">Support local artisans and community businesses</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 text-white">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-blue-100">Eco-friendly tourism for future generations</p>
            </div>
          </div>

          {/* Main Feature Section */}
          <div className="mt-20 bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 text-white max-w-2xl">
            <h4 className="text-3xl font-bold mb-4">🏛️ Ramany Withi</h4>
            <p className="text-blue-100 mb-6">Interactive cultural experience featuring:</p>
            <ul className="text-left space-y-3 text-blue-100">
              <li>✓ Interactive map of cultural sites</li>
              <li>✓ Mon heritage timeline and history</li>
              <li>✓ Culinary stories and traditional recipes</li>
              <li>✓ Local wisdom and agricultural knowledge</li>
              <li>✓ AR/VR mural experiences</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-30 backdrop-blur-md text-white text-center py-6 mt-12">
        <p>© 2026 Mon Photharam. Building sustainable digital tourism.</p>
      </footer>
    </main>
  )
}
