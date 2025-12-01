// src/App.js (improved)
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// —— Tracks ——
const tracks = [
  {
    title: "048 — Clarity",
    subtitle: "Ambient · 2025",
    artwork: "/thumbs/clarity.jpeg",
    iframeUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/murat-guelcelik/048-clarity&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    title: "Stagnate",
    subtitle: "Ambient · 2025",
    artwork: "/thumbs/stagnate.jpeg",
    iframeUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/murat-guelcelik/stagnate&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    title: "Wait",
    subtitle: "Electronic · 2025",
    artwork: "/thumbs/wait.jpeg",
    iframeUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/murat-guelcelik/wait&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  },
  {
    title: "010 — Surrounded",
    subtitle: "Electronic · 2024",
    artwork: "/thumbs/surrounded.jpeg",
    iframeUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/murat-guelcelik/010-surrounded&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  },
];

// —— Utilities ——
const useScrollFlag = (offset = 50) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return scrolled;
};

// —— TrackCard ——
function TrackCard({ title, subtitle, artwork, iframeUrl, active, onOpen }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden bg-neutral-950 ring-1 ring-white/5"
    >
      <AnimatePresence initial={false}>
        {active ? (
          <motion.div key="iframe" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <iframe
              title={`SoundCloud player for ${title}`}
              src={iframeUrl}
              className="w-full h-48 sm:h-52"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            />
          </motion.div>
        ) : (
          <motion.button
            key="cover"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onOpen}
            className="relative h-48 sm:h-52 w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <img
              src={artwork}
              alt={`${title} artwork`}
              loading="lazy"
              className="object-cover w-full h-full"
              onLoad={() => setLoaded(true)}
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                aria-hidden
                className="grid place-items-center h-12 w-12 rounded-full border border-white/70 backdrop-blur-sm"
                whileTap={{ scale: 0.95 }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="translate-x-[1px]">
                  <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
                </svg>
              </motion.span>
            </div>
            {!loaded && (
              <div className="absolute inset-0 animate-pulse bg-neutral-800" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      <div className="p-4">
        <h3 className="text-base md:text-lg font-medium tracking-tight">{title}</h3>
        <p className="text-[11px] md:text-xs uppercase tracking-widest text-neutral-400 mt-1">{subtitle}</p>
      </div>
    </motion.article>
  );
}

// —— Works ——
function Works() {
  const [activeIndex, setActiveIndex] = useState(null); // ensures only one iframe at a time

  return (
    <section id="works" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-light mb-10">Selected Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((t, i) => (
            <TrackCard
              key={i}
              {...t}
              active={activeIndex === i}
              onOpen={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// —— Nav ——
function Nav({ scrolled }) {
  const link = "hover:text-neutral-200 border-b border-transparent hover:border-white/60 pb-1 transition";
  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-xl md:text-2xl font-light tracking-[0.35em]">
          MURAT GULCELIK
        </a>
        <div className="hidden sm:flex items-center gap-10 text-xs md:text-sm font-light tracking-wider uppercase">
          <a href="#home" className={link}>Home</a>
          <a href="#works" className={link}>Works</a>
          <a href="#contact" className={link}>Contact</a>
        </div>
      </nav>
    </header>
  );
}

// —— Hero ——
function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 items-center">
        <div className="space-y-8">
          <p className="text-xl uppercase tracking-[.60em] text-neutral-300">Composer · Sound Artist</p>

          <div className="w-16 h-[2px] bg-white/90" />
          <p className="text-neutral-300 leading-relaxed text-base md:text-lg max-w-prose">
            <span className="font-medium">Murat Gülçelik</span> (b. 2003) is a Turkish‑American composer working across
            ambient forms, minimal processes, and algorithmic sound. Recent works bridge music, code, dance, and modular systems.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -top-8 -left-8 w-24 h-24 border-t border-l border-white/20" />
          <img
            src="/IMG_7565.JPEG"
            alt="Murat Gulcelik portrait"
            loading="eager"
            className="w-full aspect-[4/5] object-cover contrast-125 shadow-2xl"
          />
          <div className="absolute -bottom-8 -right-8 w-24 h-24 border-b border-r border-white/20" />
        </div>
      </div>
    </section>
  );
}

// —— Contact ——
function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">Get in touch</p>
          <h2 className="text-4xl font-light">Let’s Connect</h2>
          <div className="w-16 h-[2px] bg-white/90" />
          <p className="text-neutral-300 leading-relaxed text-base md:text-lg max-w-prose">
            For collaborations, commissions, and performance/film inquiries.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <a
              href="mailto:muratgulcelik@gmail.com"
              className="inline-block border border-white py-3 px-7 hover:bg-white hover:text-black transition uppercase text-xs tracking-wider rounded-full"
            >
              Email Me
            </a>
            <a
              href="https://instagram.com/muratgulcelik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 transition text-neutral-300 hover:text-white uppercase text-xs tracking-wider border-b border-transparent hover:border-white/60"
            >
              @muratgulcelik
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-8 -left-8 w-24 h-24 border-t border-l border-white/20" />

          <div className="absolute -bottom-8 -right-8 w-24 h-24 border-b border-r border-white/20" />
        </div>
      </div>
    </section>
  );
}

// —— App ——
export default function App() {
  const isScrolled = useScrollFlag(50);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-sans tracking-wide">
      <Nav scrolled={isScrolled} />

      <main className="flex-grow pt-24">
        <Hero />
        <Works />
        <Contact />
      </main>

    </div>
  );
}
