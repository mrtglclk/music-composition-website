// src/App.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ——— Your tracks array ———
const tracks = [
  {
    title: "048 — Clarity",
    subtitle: "Ambient, 2025",
    artwork: "/thumbs/clarity.jpeg",
    iframeUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/murat-guelcelik/048-clarity&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    title: "Stagnate",
    subtitle: "Ambient, 2025",
    artwork: "/thumbs/stagnate.jpeg",
    iframeUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/murat-guelcelik/stagnate&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    title: "Wait",
    subtitle: "Electronic, 2025",
    artwork: "/thumbs/wait.jpeg",
    iframeUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/murat-guelcelik/wait&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    title: "010 — Surrounded",
    subtitle: "Electronic, 2024",
    artwork: "/thumbs/surrounded.jpeg",
    iframeUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/murat-guelcelik/010-surrounded&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  },
];

// ——— TrackCard Component ———
function TrackCard({ title, subtitle, artwork, iframeUrl }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
      className="relative rounded-2xl overflow-hidden"
    >
      {playing ? (
        <iframe
          src={iframeUrl}
          className="w-full h-48"
          frameBorder="no"
          allow="autoplay"
        />
      ) : (
        <div
          className="relative h-48 bg-gray-900 cursor-pointer"
          onClick={() => setPlaying(true)}
        >
          <img
            src={artwork}
            alt={`${title} artwork`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <button className="p-3 rounded-full border border-white text-white text-xl">
              ▶
            </button>
          </div>
        </div>
      )}

      <div className="p-4 bg-black">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="text-xs uppercase text-gray-400">{subtitle}</p>
      </div>
    </motion.div>
  );
}

// ——— Works Section ———
function Works() {
  return (
    <section id="works" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-light mb-8">My Music</h2>
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          style={{ columnGap: "1.5rem" }}
        >
          {tracks.map((t, i) => (
            <TrackCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ——— Main App ———
function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
            <a
              href="#home"
              className="hover:text-gray-300 transition-all duration-300 border-b border-transparent hover:border-white pb-1"
            >
              Home
            </a>
            <a
              href="#works"
              className="hover:text-gray-300 transition-all duration-300 border-b border-transparent hover:border-white pb-1"
            >
              Works
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition-all duration-300 border-b border-transparent hover:border-white pb-1"
            >
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
              <h4 className="text-sm uppercase tracking-widest text-gray-400">
                Composer & Sound Artist
              </h4>
              <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight">
                {/* Consider adding a tagline here */}
              </h1>
              <div className="w-16 h-1 bg-white"></div>
              <p className="text-gray-300 leading-relaxed text-lg">
                <span className="font-medium">Murat Gulcelik</span> (b. 2003) is
                a Turkish-American composer exploring a vast array of musical
                genres. He has experience with various different instruments,
                primarily playing the upright and electric bass currently around
                NYC. He has composed works for film, theater, ballet, chamber
                ensembles, sound art and more. Currently, he is focusing on
                ambient forms and minimalist soundscapes. Recent works bridge
                music, code, dance, and modular sounds.
              </p>
            </div>
            <div className="h-full relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 border-t border-l border-white opacity-20"></div>
              <img
                src="/IMG_7565.JPEG"
                alt="Murat Gulcelik portrait"
                className="w-full h-full object-cover contrast-125 shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 border-b border-r border-white opacity-20"></div>
            </div>
          </div>
        </section>

        {/* Updated WORKS Section */}
        <Works />

        {/* CONTACT Section */}
        <section id="contact" className="py-32">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h4 className="text-sm uppercase tracking-widest text-gray-400">
                Get In Touch
              </h4>
              <h2 className="text-4xl font-light tracking-tight">
                Let's Connect
              </h2>
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
            <div className="absolute -top-10 -left-10 w-32 h-32 border-t border-l border-white opacity-20"></div>
            <img
              src="/bass_end.jpeg"
              alt="Bass portrait"
              className="w-full h-full object-cover contrast-125 shadow-2xl"
            />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 border-b border-r border-white opacity-20"></div>
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
