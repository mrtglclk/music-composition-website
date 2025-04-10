import React from "react";

function App() {
  return (
    <div className="bg-[#f5f5f5] text-black min-h-screen font-serif px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Murat Gulcelik</h1>
        <nav className="space-x-6 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#works" className="hover:underline">Works</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>

      {/* Main Content: Bio & Portrait */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-20">
        <img
          src="/your-photo.jpg" // Replace with your image file in public/
          alt="Murat Gulcelik portrait"
          className="w-full object-cover grayscale"
        />
        <div id="about">
          <p className="text-sm leading-relaxed">
            <strong>Murat Gulcelik</strong> (b. 2003) is a Turkish-American composer whose work explores digital silence, acoustic textures, and slow ambient forms. He often draws inspiration from phenomenology, improvisation, and Eastern mysticism. His recent works merge minimalist soundscapes with expressive gestures and have been featured in interdisciplinary collaborations spanning music, code, and poetry.
          </p>
        </div>
      </div>

      {/* Music Embed */}
      <section id="works" className="mb-24">
        <h2 className="text-xl font-semibold mb-4">Recent Work</h2>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          title="SoundCloud Embed"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1629814017&color=%23000000&inverse=false&auto_play=false&show_user=true"
        ></iframe>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="text-center text-sm text-gray-600">
        <p>
          Email: <a href="mailto:your@email.com" className="underline">your@email.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
