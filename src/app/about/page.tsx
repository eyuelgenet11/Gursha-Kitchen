'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const timeline = [
  { year: '2018', title: 'The Vision', desc: 'Born from a desire to bring Ethiopian hospitality to the global stage.' },
  { year: '2022', title: 'The Flagship', desc: 'Opening our doors opposite the Hyatt Regency in Addis Ababa.' },
  { year: '2026', title: 'The Future', desc: 'Redefining African luxury dining through tradition and innovation.' },
];

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <div style={{ background: 'var(--bg-main)', color: 'var(--text-main)' }}>

      {/* Mobile Drawer */}
      <nav className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem' }}>Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem' }}>The Story</Link>
        <Link href="/digital-menu" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem' }}>Menu</Link>
        <Link href="/digital-menu" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ fontSize: '0.8rem', marginTop: '1rem' }}>Reserve</Link>
      </nav>

      {/* Nav */}
      <nav style={{ height: 'var(--header-height)', display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border-light)', background: 'var(--bg-main)', position: 'sticky', top: 0, zIndex: 1000 }}>
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
          <div className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/digital-menu" className="nav-link">Menu</Link>
            <Link href="/digital-menu" className="btn-primary" style={{ padding: '0.65rem 1.4rem' }}>Reserve</Link>
          </div>
          <button
            className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── Brand Color Strip ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div style={{ background: 'var(--primary)', height: '6px' }} />
        <div style={{ background: 'var(--accent)', height: '6px' }} />
        <div style={{ background: 'var(--secondary)', height: '6px' }} />
      </div>

      {/* Hero Text */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow">The Heritage</span>
            <h1 className="section-title">Beyond the Meal</h1>
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: 1.9, marginBottom: '3.5rem', color: 'var(--text-muted)' }}>
              At Gursha Kitchen, we believe that dining is a sacred act of community.
              Our name comes from the tradition of feeding one another — a gesture of trust,
              love, and profound hospitality that defines the Ethiopian spirit.
            </p>
          </div>

          <div style={{ background: 'white', padding: '0.75rem', boxShadow: '0 25px 60px rgba(0,0,0,0.08)', marginBottom: '5rem' }}>
            <div className="img-zoom-hover" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#f0ead8' }}>
              <Image src="/interior-1.png" alt="Gursha Kitchen Interior" fill sizes="(max-width: 768px) 100vw, 1200px" style={{ objectFit: 'cover' }} />
            </div>
          </div>

          {/* Timeline */}
          <div className="grid-3">
            {timeline.map((item, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--border-light)', paddingTop: '2rem' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', opacity: 0.15, display: 'block', marginBottom: '0.75rem', lineHeight: 1 }}>{item.year}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Philosophy Section */}
      <section style={{ background: 'var(--bg-dark)', color: 'white', padding: '6rem 0' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow" style={{ color: 'rgba(241,235,217,0.5)' }}>Our Philosophy</span>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--bg-main)', fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '1.5rem' }}>Purity in Every Ingredient</h2>
              <p style={{ color: 'rgba(241,235,217,0.65)', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.9 }}>
                We source our spices directly from family farms in the Ethiopian highlands,
                ensuring that every flavor is as authentic as the soil it grew in.
              </p>
              <Link href="/digital-menu" className="btn-primary" style={{ background: 'var(--bg-main)', color: 'var(--bg-dark)', border: 'none' }}>View Menu</Link>
            </div>
            <div style={{ position: 'relative', minHeight: '320px' }}>
              <Image src="/gursha-platter.png" alt="Gursha Platter" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 600px" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
