import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-black font-serif px-6 py-10">
      
      {/* Header */}
      <header className="flex justify-between items-center mb-12 sticky top-0 bg-opacity-90 backdrop-blur-sm py-4">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Murat Gulcelik
        </h1>
        <nav className="space-x-6 text-sm">
          <a
            href="#about"
            className="hover:underline hover:text-gray-700 transition-colors"
          >
            About
          </a>
          <a
            href="#works"
            className="hover:underline hover:text-gray-700 transition-colors"
          >
            Works
          </a>
          <a
            href="#contact"
            className="hover:underline hover:text-gray-700 transition-colors"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content: Bio & Portrait */}
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-20">
          <img
            src="/IMG_7565.JPEG" // Replace with your image file in public/
            alt="Murat Gulcelik portrait"
            className="w-full h-auto rounded-lg shadow-lg object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out"
          />
          <section id="about">
            <p className="text-sm leading-relaxed mb-6">
              <strong>Murat Gulcelik</strong> (b. 2003) is a Turkish-American composer
              exploring digital silence, acoustic textures, and slow ambient forms.
              Influenced by phenomenology and improvisation, his music merges minimalist
              soundscapes with bold expressive gestures. Recent works bridge music, code,
              and dance, reflecting a fascination with the subtle interplay of space and
              sound.
            </p>
          </section>
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
            className="rounded-lg shadow-md"
          ></iframe>
        </section>
      </main>

      {/* Contact Section */}
      <footer
        id="contact"
        className="text-center text-xs md:text-sm text-gray-600 border-t pt-4 mt-12"
      >
        <div className="mb-3">
          {/* Email Button */}
          <a
            href="mailto:muratgulcelik@gmail.com"
            className="inline-block bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
          >
            Email Me
          </a>
        </div>

        {/* Instagram Link */}
        <p>
          Instagram:{' '}
          <a
            href="https://instagram.com/muratgulcelik"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700 transition-colors"
          >
            @muratgulcelik
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
