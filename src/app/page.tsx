'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const featuredItems = [
  { title: 'Special Doro Wat', category: 'Traditional', price: '450', image: '/tibbs.webp' },
  { title: 'Gursha Kitfo', category: 'Signature', price: '520', image: '/tibbs.webp' },
  { title: 'Beyaynetu', category: 'Vegetarian', price: '380', image: '/tibbs.webp' },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.08 });

    revealRefs.current.forEach(ref => ref && observer.observe(ref));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <div style={{ background: 'var(--bg-main)', color: 'var(--text-main)' }}>

      {/* ── Mobile Drawer ── */}
      <nav className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', letterSpacing: '0.05em', color: 'var(--text-main)' }}>Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', letterSpacing: '0.05em', color: 'var(--text-main)' }}>The Story</Link>
        <Link href="/digital-menu" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', letterSpacing: '0.05em', color: 'var(--text-main)' }}>Menu</Link>
        <Link href="#contact" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', letterSpacing: '0.05em', color: 'var(--text-main)' }}>Contact</Link>
        <Link href="/digital-menu" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ fontSize: '0.8rem', marginTop: '1rem' }}>Reserve Table</Link>
      </nav>

      {/* ── Navigation ── */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link href="/" className="nav-logo">
            <div className="nav-logo-img">
              <Image src="/logo-02.jpg" alt="Gursha Kitchen" width={56} height={56} style={{ objectFit: 'cover' }} />
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo-brand">GURSHA</span>
              <span className="nav-logo-sub">KITCHEN</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            <Link href="/about" className="nav-link">The Story</Link>
            <Link href="/digital-menu" className="nav-link">Menu</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
            <Link href="/digital-menu" className="btn-primary" style={{ padding: '0.65rem 1.4rem' }}>Reserve Table</Link>
          </div>

          {/* Hamburger */}
          <button
            className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ height: '100svh', minHeight: '560px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
        <Image
          src="/tibbs.webp"
          alt="Gursha Kitchen — Authentic Ethiopian Dining"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', filter: 'brightness(0.52)' }}
          priority
        />
        <div className="container hyatt-reveal active" style={{ position: 'relative', zIndex: 10, color: 'white', padding: '0 1rem' }}>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <span className="hr-dot" />Established 2018<span className="hr-dot" />
          </span>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(3rem, 13vw, 8rem)',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.03em',
            lineHeight: 1.0,
          }}>
            A Tradition of<br />Hospitality
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', marginBottom: '2.5rem', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
            Authentic Ethiopian cuisine in the heart of Addis Ababa
          </p>
          <Link href="/digital-menu" className="btn-primary" style={{ background: 'white', color: '#1A1A1A', border: 'none', fontSize: '0.78rem' }}>
            Explore the Menu
          </Link>
        </div>
      </section>

      {/* ── Brand Color Strip ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div style={{ background: 'var(--primary)', height: '6px' }} />
        <div style={{ background: 'var(--accent)', height: '6px' }} />
        <div style={{ background: 'var(--secondary)', height: '6px' }} />
      </div>

      {/* ── Featured Section ── */}
      <section className="section">
        <div className="container">
          <div ref={addToRefs} className="hyatt-reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="eyebrow">Culinary Excellence</span>
            <h2 className="section-title">The Gursha Experience</h2>
            <div className="hr-line" style={{ maxWidth: '40px', margin: '1.5rem auto' }} />
            <p style={{ maxWidth: '560px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              Experience the soul of Ethiopian cuisine through dishes crafted with intention,
              locally sourced ingredients, and generations of heritage.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {featuredItems.map((item, i) => (
              <div
                key={i}
                ref={addToRefs}
                className="hyatt-reveal"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr)',
                  gap: '2rem',
                  borderBottom: '1px solid var(--border-light)',
                  padding: '3.5rem 0',
                  alignItems: 'center',
                }}
              >
                <div className="img-zoom-hover" style={{ position: 'relative', width: '100%', aspectRatio: '4/3', background: '#e8e2d0' }}>
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 50vw, 400px" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '0 0.5rem' }}>
                  <span className="eyebrow" style={{ fontSize: '0.62rem', marginBottom: '0.75rem' }}>{item.category}</span>
                  <h3 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.8rem)', marginBottom: '1rem', fontFamily: 'var(--font-display)', lineHeight: 1.05 }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem', maxWidth: '380px', lineHeight: 1.9, fontSize: '0.95rem' }}>
                    A masterpiece of flavor and tradition, prepared with our signature spice blends and commitment to excellence.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '1.2rem', color: 'var(--secondary)', fontFamily: 'var(--font-bebas)' }}>$</span>
                    <Link href="/digital-menu" className="btn-outline" style={{ padding: '0.6rem 1.5rem', fontSize: '0.72rem' }}>View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ambience Section ── */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="grid-2">
            <div ref={addToRefs} className="hyatt-reveal" style={{ order: 1 }}>
              <span className="eyebrow">The Ambience</span>
              <h2 className="section-title">Designed for<br />Comfort</h2>
              <div className="hr-line" style={{ maxWidth: '40px', margin: '1.5rem 0' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: '380px', lineHeight: 1.9 }}>
                Our interior is a thoughtful blend of modern luxury and traditional warmth.
                Every detail is designed to enhance your dining experience.
              </p>
              <div className="img-zoom-hover" style={{ background: 'white', padding: '1rem', boxShadow: '0 20px 50px rgba(0,0,0,0.07)', display: 'inline-block' }}>
                <div style={{ position: 'relative', width: 'min(280px, 100%)', aspectRatio: '3/4', background: '#f0ead8' }}>
                  <Image src="/interior-2.png" alt="Gursha Kitchen Restroom Detail" fill sizes="280px" style={{ objectFit: 'cover' }} />
                </div>
                <p style={{ marginTop: '0.75rem', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5, textAlign: 'center' }}>
                  Refined Craftsmanship
                </p>
              </div>
            </div>

            <div ref={addToRefs} className="hyatt-reveal" style={{ background: 'white', padding: '1rem', boxShadow: '0 30px 70px rgba(0,0,0,0.09)', order: 2 }}>
              <div className="img-zoom-hover" style={{ position: 'relative', width: '100%', aspectRatio: '4/5', background: '#f0ead8' }}>
                <Image src="/interior-1.png" alt="Gursha Kitchen Dining Area" fill sizes="(max-width: 900px) 100vw, 600px" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section style={{ background: 'var(--secondary)', padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
        {/* Yellow accent top bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--accent)' }} />
        <div className="container" style={{ textAlign: 'center' }}>
          <div ref={addToRefs} className="hyatt-reveal" style={{ maxWidth: '760px', margin: '0 auto' }}>
            {/* Big decorative quote mark */}
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(5rem, 15vw, 10rem)', lineHeight: 0.7, color: 'var(--accent)', opacity: 0.4, marginBottom: '2rem' }}>&ldquo;</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 6vw, 3rem)',
              letterSpacing: '0.04em',
              marginBottom: '2.5rem',
              fontWeight: 400,
              lineHeight: 1.3,
              color: 'var(--bg-main)',
            }}>
              True hospitality is found in the sharing of a meal. In Ethiopia, we call it Gursha.
            </h2>
            <div style={{ width: '50px', height: '2px', background: 'var(--accent)', margin: '0 auto 2rem' }} />
            <p className="eyebrow" style={{ color: 'rgba(248,245,240,0.5)' }}>Chef Elias Gebre</p>
          </div>
        </div>
        {/* Yellow accent bottom bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: 'var(--accent)' }} />
      </section>

      {/* ── Getting Here ── */}
      <section id="location" className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid-2">
            <div ref={addToRefs} className="hyatt-reveal">
              <span className="eyebrow">Location</span>
              <h2 className="section-title">Getting Here</h2>
              <div className="hr-line" style={{ maxWidth: '40px', margin: '1.5rem 0' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.9 }}>
                Gursha Kitchen is situated in the heart of Addis Ababa's diplomatic district,
                directly opposite the Hyatt Regency on Jomo Kenyatta St.
              </p>
              <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.4rem', color: 'var(--text-muted)' }}>Address</h4>
                  <p style={{ fontWeight: 500 }}>Jomo Kenyatta St, Addis Ababa</p>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.4rem', color: 'var(--text-muted)' }}>Valet Parking</h4>
                  <p>Available daily at the main entrance.</p>
                </div>
              </div>
              <Link
                href="https://maps.app.goo.gl/vKY88jqDWSctFUYbA"
                target="_blank"
                className="btn-outline"
                style={{ width: 'fit-content' }}
              >
                Open in Google Maps
              </Link>
            </div>

            <div ref={addToRefs} className="hyatt-reveal" style={{ background: 'var(--bg-main)', padding: '0.75rem', boxShadow: '0 30px 70px rgba(0,0,0,0.07)' }}>
              <div className="img-zoom-hover" style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
                <Image src="/map.PNG" alt="Gursha Kitchen Location Map" fill sizes="(max-width: 900px) 100vw, 600px" style={{ objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="section">
        <div className="container">
          <div ref={addToRefs} className="hyatt-reveal">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <span className="eyebrow">Find Us</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', marginBottom: '0.5rem' }}>Jomo Kenyatta St</h3>
                <p style={{ color: 'var(--text-muted)' }}>Addis Ababa, Ethiopia</p>
              </div>
              <div>
                <span className="eyebrow">Reservations</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', marginBottom: '0.5rem' }}>+251 911 22 33 44</h3>
                <p style={{ color: 'var(--text-muted)' }}>Daily 11:00 AM — 11:00 PM</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Link href="/digital-menu" className="btn-primary">Digital Menu</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.5 }}>
            © 2026 Gursha Kitchen. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {['Instagram', 'Facebook', 'TripAdvisor'].map(s => (
              <Link key={s} href="#" style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.6 }}>{s}</Link>
            ))}
          </div>
        </div>
      </footer>

      {/* ── Mobile card layout fix ── */}
      <style>{`
        @media (max-width: 680px) {
          .featured-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
