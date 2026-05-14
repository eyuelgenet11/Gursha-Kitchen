'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
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
        <Link href="/about" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem' }}>Services</Link>
        <Link href="/digital-menu" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem' }}>Menu</Link>
        <Link href="/#contact" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem' }}>Contact</Link>
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
            <Link href="/about" className="nav-link">Services</Link>
            <Link href="/digital-menu" className="nav-link">Menu</Link>
            <Link href="/#contact" className="nav-link">Contact</Link>
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
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow">Restaurant Space & Kitchen</span>
            <h1 className="section-title">A Riverside Dining Experience</h1>
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', lineHeight: 1.9, marginBottom: '3.5rem', color: 'var(--text-muted)' }}>
              Step into a riverside dining experience where warm Ethiopian hospitality meets modern design. Our open-concept kitchen lets you watch our expert chefs in action, ensuring transparency, hygiene, and culinary precision. Whether you&apos;re grabbing a quick breakfast, hosting a business lunch, or enjoying a sunset dinner by the water, Gursha Kitchen is designed for connection, comfort, and flavor.
            </p>
          </div>

          <div style={{ background: 'white', padding: '0.75rem', boxShadow: '0 25px 60px rgba(0,0,0,0.08)', marginBottom: '3rem' }}>
            <div className="img-zoom-hover" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#f0ead8' }}>
              <Image src="/interior-1.png" alt="Gursha Kitchen Interior" fill sizes="(max-width: 768px) 100vw, 1200px" style={{ objectFit: 'cover' }} />
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ padding: '1.5rem', background: 'var(--bg-alt)', flex: '1 1 200px', borderRadius: '4px' }}>
              <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>Indoor & Riverside</strong>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Scenic Seating</span>
            </div>
            <div style={{ padding: '1.5rem', background: 'var(--bg-alt)', flex: '1 1 200px', borderRadius: '4px' }}>
              <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>Open Kitchen</strong>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Culinary Transparency</span>
            </div>
            <div style={{ padding: '1.5rem', background: 'var(--bg-alt)', flex: '1 1 200px', borderRadius: '4px' }}>
              <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>Event-Ready</strong>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Space for Celebrations</span>
            </div>
            <div style={{ padding: '1.5rem', background: 'var(--bg-alt)', flex: '1 1 200px', borderRadius: '4px' }}>
              <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>Secret Recipe</strong>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Signature Spice Blends</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section id="catering" style={{ background: 'var(--bg-dark)', color: 'white', padding: '6rem 0' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow" style={{ color: 'rgba(241,235,217,0.5)' }}>Catering Services</span>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--bg-main)', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Bring the Gursha Experience to Your Event</h2>
              <p style={{ color: 'rgba(241,235,217,0.7)', fontSize: '1.05rem', marginBottom: '3rem', lineHeight: 1.8 }}>
                From corporate meetings and office lunches to weddings and private celebrations, our catering team delivers standardized, high-quality meals with the same secret-spice craftsmanship you taste in-house.
              </p>
              
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>How It Works:</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>1.</span>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.2rem', color: 'var(--bg-main)' }}>Choose Your Menu</strong>
                    <span style={{ color: 'rgba(241,235,217,0.6)', fontSize: '0.95rem' }}>Mix traditional, international, or create a custom package.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>2.</span>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.2rem', color: 'var(--bg-main)' }}>Set Your Details</strong>
                    <span style={{ color: 'rgba(241,235,217,0.6)', fontSize: '0.95rem' }}>Date, guest count, delivery/pickup, and service style (buffet, plated, or boxed).</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>3.</span>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.2rem', color: 'var(--bg-main)' }}>We Handle the Rest</strong>
                    <span style={{ color: 'rgba(241,235,217,0.6)', fontSize: '0.95rem' }}>Professional packaging, timely delivery, and optional on-site setup.</span>
                  </div>
                </li>
              </ul>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <a href="mailto:catering@gurshakitchen.com" className="btn-primary" style={{ background: 'var(--bg-main)', color: 'var(--bg-dark)', border: 'none' }}>Email Inquiry</a>
                <a href="tel:+251981747576" style={{ color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.05em' }}>📞 +251 981 74 75 76</a>
              </div>
            </div>
            
            <div style={{ position: 'relative', height: '100%', minHeight: '400px', borderRadius: '4px', overflow: 'hidden' }}>
              <Image src="/gursha-platter.png" alt="Gursha Catering Platter" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 600px" />
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
            {['Instagram', 'Facebook', 'TikTok'].map(s => (
              <Link key={s} href="#" style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.6 }}>{s}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
