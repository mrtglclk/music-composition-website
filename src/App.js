// src/App.js
import React from "react";

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-sans">
      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 bg-neutral-900 shadow-md">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo / Name */}
          <div className="text-2xl font-bold tracking-wide">
            Murat Gulcelik
          </div>
          {/* Nav Links */}
          <div className="space-x-6 text-sm font-medium">
            <a href="#home" className="hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#works" className="hover:text-gray-300 transition-colors">
              Works
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-grow">
        {/* HOME Section */}
        <section
          id="home"
          className="max-w-6xl mx-auto px-4 py-12 space-y-8"
        >
          <h1 className="text-4xl font-bold tracking-tight">Welcome</h1>
          <p className="text-neutral-300 leading-relaxed max-w-2xl">
            <strong>Murat Gulcelik</strong> (b. 2003) is a Turkish-American
            composer exploring digital silence, acoustic textures, and slow
            ambient forms. Influenced by phenomenology and improvisation, his
            music merges minimalist soundscapes with bold expressive gestures.
            Recent works bridge music, code, and dance, reflecting a fascination
            with the subtle interplay of space and sound.
          </p>
          <div>
            <img
              src="/IMG_7565.JPEG"
              alt="Murat Gulcelik portrait"
              className="w-full max-w-md rounded shadow-lg object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out"
            />
          </div>
        </section>

        {/* WORKS Section */}
        <section
          id="works"
          className="max-w-6xl mx-auto px-4 py-12 space-y-8 border-t border-neutral-800"
        >
          <h2 className="text-3xl font-bold tracking-tight">Works</h2>
          <p className="text-neutral-400 max-w-2xl">
            A selection of pieces spanning ambient, electronic, jazz, and
            chamber music. More coming soon.
          </p>
          {/* Track #1 */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">048 - Clarity</h3>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              title="SoundCloud Embed - Clarity"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/murat-guelcelik/048-clarity&color=%23111111&auto_play=false&show_user=true"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
          {/* Track #2 */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Another Track</h3>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              title="SoundCloud Embed - Another Track"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1629814017&color=%23111111&auto_play=false&show_user=true"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </section>

        {/* CONTACT Section */}
        <section
          id="contact"
          className="max-w-6xl mx-auto px-4 py-12 space-y-8 border-t border-neutral-800"
        >
          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
          <p className="text-neutral-300 max-w-2xl">
            Let’s connect! Feel free to email me or follow my Instagram.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="mailto:muratgulcelik@gmail.com"
              className="inline-block bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://instagram.com/muratgulcelik"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-400 transition-colors"
            >
              @muratgulcelik
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 py-4 text-center text-sm text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Murat Gulcelik</p>
      </footer>
    </div>
  );
}

export default App;
