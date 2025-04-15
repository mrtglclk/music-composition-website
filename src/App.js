// src/App.js
import React, { useState, useEffect } from "react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-sans tracking-wide">
      {/* Sticky Navigation Bar with transition effect */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black shadow-lg py-3" : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Name */}
          <div className="text-2xl font-light tracking-widest">
            MURAT GULCELIK
          </div>
          {/* Nav Links */}
          <div className="space-x-10 text-sm font-light tracking-wider uppercase">
            <a href="#home" className="hover:text-gray-300 transition-all duration-300 border-b border-transparent hover:border-white pb-1">
              Home
            </a>
            <a href="#works" className="hover:text-gray-300 transition-all duration-300 border-b border-transparent hover:border-white pb-1">
              Works
            </a>
            <a href="#contact" className="hover:text-gray-300 transition-all duration-300 border-b border-transparent hover:border-white pb-1">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-grow pt-24">
        {/* HERO Section */}
        <section id="home" className="min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h4 className="text-sm uppercase tracking-widest text-gray-400">Composer & Sound Artist</h4>
              <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight"></h1>
              <div className="w-16 h-1 bg-white"></div>
              <p className="text-gray-300 leading-relaxed text-lg">
  <span className="font-medium">Murat Gulcelik</span> (b. 2003) is a Turkish-American
  composer exploring a vast array of musical genres. He has experience with various
  different instruments, primarily playing the upright and electric bass currently around NYC.
  He has composed works for film, theater, ballet, chamber ensembles, sound art and more. 
  Currently, he is focusing on ambient forms and minimalist soundscapes. Recent works bridge 
  music, code, modular sounds, and reflect a fascination with the subtle interplay of space and sound.
</p>
            </div>
            <div className="h-full relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 border-t border-l border-white opacity-20"></div>
              <img
                src="/IMG_7565.JPEG"
                alt="Murat Gulcelik portrait"
                className="w-full h-full object-cover grayscale contrast-125 shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 border-b border-r border-white opacity-20"></div>
            </div>
          </div>
        </section>

        {/* WORKS Section */}
        <section
          id="works"
          className="py-32 relative"
        >
          <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-r from-transparent to-white opacity-20"></div>
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <div className="space-y-4">
              <h4 className="text-sm uppercase tracking-widest text-gray-400">Portfolio</h4>
              <h2 className="text-4xl font-light tracking-tight">Selected Works</h2>
              <p className="text-gray-300 max-w-xl text-lg">
                A curated selection of compositions spanning ambient, electronic, jazz, and
                chamber music explorations.
              </p>
            </div>
            
            {/* Tracks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Track #1 */}
              <div className="space-y-4 group">
                <div className="overflow-hidden">
                  <div className="relative pb-[20%] bg-black transition-transform duration-500 group-hover:scale-[0.98]">
                    <iframe
                      width="100%"
                      height="100%"
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      title="SoundCloud Embed - Clarity"
                      src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/murat-guelcelik/048-clarity&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"
                      className="absolute inset-0 rounded-none shadow-xl bg-black"
                    ></iframe>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-light group-hover:text-gray-600 transition-colors">047 — Clarity</h3>
                  <p className="text-sm uppercase tracking-wider text-gray-500">Ambient Composition, 2025</p>
                </div>
              </div>
              
            {/* Track #2 */}
            <div className="space-y-4 group">
              <div className="overflow-hidden">
                <div className="relative pb-[20%] bg-black transition-transform duration-500 group-hover:scale-[0.98]">
                  <iframe
                    width="100%"
                    height="100%"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    title="SoundCloud Embed - Vacant"
                    src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/murat-guelcelik/048-vacant&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"
                    className="absolute inset-0 rounded-none shadow-xl bg-black"
                  ></iframe>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-light group-hover:text-gray-600 transition-colors">048 — Vacant</h3>
                <p className="text-sm uppercase tracking-wider text-gray-500">Ambient Composition, 2025</p>
              </div>
            </div>



            </div>
          </div>
        </section>

        {/* CONTACT Section */}
        <section
          id="contact"
          className="py-32"
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h4 className="text-sm uppercase tracking-widest text-gray-400">Get In Touch</h4>
              <h2 className="text-4xl font-light tracking-tight">Let's Connect</h2>
              <div className="w-16 h-1 bg-white"></div>
              <p className="text-gray-300 leading-relaxed text-lg max-w-xl">
                For collaborations, questions, and more.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <a
                  href="mailto:muratgulcelik@gmail.com"
                  className="inline-block border border-white py-3 px-8 hover:bg-white hover:text-black transition-all duration-300 tracking-wider uppercase text-sm"
                >
                  Email Me
                </a>
                <a
                  href="https://instagram.com/muratgulcelik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-3 hover:text-gray-400 transition-all duration-300 tracking-wider uppercase text-sm border-b border-transparent hover:border-white"
                >
                  @muratgulcelik
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
           
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm tracking-widest uppercase font-light">
            Murat Gulcelik
          </div>
          <div className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} · All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;