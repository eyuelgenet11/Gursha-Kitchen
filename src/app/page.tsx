'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';



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
        <Link href="/about" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', letterSpacing: '0.05em', color: 'var(--text-main)' }}>Services</Link>
        <Link href="/digital-menu" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', letterSpacing: '0.05em', color: 'var(--text-main)' }}>Menu</Link>
        <Link href="#contact" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', letterSpacing: '0.05em', color: 'var(--text-main)' }}>Contact</Link>
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
            <Link href="/about" className="nav-link">Services</Link>
            <Link href="/digital-menu" className="nav-link">Menu</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
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
          src="/spaghetti bolognese.jpg"
          alt="Gursha Kitchen — Authentic Ethiopian Dining"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', filter: 'brightness(0.45)' }}
          priority
        />
        <div className="container hyatt-reveal active" style={{ position: 'relative', zIndex: 10, color: 'white', padding: '0 1rem', marginTop: '4rem' }}>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.02em',
            lineHeight: 1.1,
            maxWidth: '900px',
            margin: '0 auto 1.5rem'
          }}>
            Share a little piece of Heaven with your inner circle.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
            Authentic Ethiopian flavors. Modern international favorites. Crafted by a certified culinary team at the heart of Addis Ababa.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/digital-menu" className="btn-primary" style={{ background: 'white', color: '#1A1A1A', border: 'none', fontSize: '0.85rem', padding: '0.8rem 1.8rem' }}>
              View Menu
            </Link>
            <Link href="#contact" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', padding: '0.8rem 1.8rem' }}>
              Order Now
            </Link>
            <Link href="/about#catering" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', padding: '0.8rem 1.8rem' }}>
              Book Catering
            </Link>
          </div>
        </div>
      </section>

      {/* ── Brand Color Strip ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div style={{ background: 'var(--primary)', height: '6px' }} />
        <div style={{ background: 'var(--accent)', height: '6px' }} />
        <div style={{ background: 'var(--secondary)', height: '6px' }} />
      </div>

      {/* ── Quick Highlights Strip ── */}
      <div style={{ background: 'var(--bg-main)', borderBottom: '1px solid var(--border-light)', padding: '1.5rem 0', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <div className="container" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', minWidth: 'max-content' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.05em' }}>🍔 Burger Lab</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.05em' }}>🍝 Italian Flavors</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.05em' }}>🥘 Traditional Corner</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.05em' }}>🥗 The Green Room</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.05em' }}>🍳 Breakfast Club</span>
        </div>
      </div>

      {/* ── Why Gursha Kitchen ── */}
      <section className="section">
        <div className="container">
          <div ref={addToRefs} className="hyatt-reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="eyebrow">The Gursha Experience</span>
            <h2 className="section-title">Why Gursha Kitchen?</h2>
            <div className="hr-line" style={{ maxWidth: '40px', margin: '1.5rem auto' }} />
          </div>

          <div className="grid-2" style={{ gap: '4rem' }}>
            <div ref={addToRefs} className="hyatt-reveal">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1rem' }}>Secret Spice Blends</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Every dish is elevated with our signature, house-crafted spice mixes, bringing out authentic and vibrant flavors in every bite.
              </p>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1rem' }}>Special Culinary</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Directed by a specialized Main Chef ensuring recipe standardization, consistent quality, and an exceptional dining experience.
              </p>
            </div>
            
            <div ref={addToRefs} className="hyatt-reveal">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1rem' }}>Tradition Meets Modern</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                From classic Tibs Firfir to rich Pesto Pasta, we seamlessly bridge Ethiopian heritage with global comfort food favorites.
              </p>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1rem' }}>Riverside Escape</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Located around Bambis, Addis Ababa. A modern haven for foodies, professionals, and travelers seeking tranquility by the water.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ambience / Visual ── */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="grid-2">
            <div ref={addToRefs} className="hyatt-reveal" style={{ order: 1, alignSelf: 'center' }}>
              <span className="eyebrow">The Atmosphere</span>
              <h2 className="section-title">Designed for<br />Connection</h2>
              <div className="hr-line" style={{ maxWidth: '40px', margin: '1.5rem 0' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: '380px', lineHeight: 1.9 }}>
                Whether you&apos;re grabbing a quick breakfast, hosting a business lunch, or enjoying a sunset dinner by the water, Gursha Kitchen is designed for comfort and flavor.
              </p>
            </div>

            <div ref={addToRefs} className="hyatt-reveal" style={{ background: 'white', padding: '1rem', boxShadow: '0 30px 70px rgba(0,0,0,0.09)', order: 2 }}>
              <div className="img-zoom-hover" style={{ position: 'relative', width: '100%', aspectRatio: '4/5', background: '#f0ead8' }}>
                <Image src="/interior-1.png" alt="Gursha Kitchen Dining Area" fill sizes="(max-width: 900px) 100vw, 600px" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact & Order ── */}
      <section id="contact" className="section" style={{ background: 'white' }}>
        <div className="container">
          <div ref={addToRefs} className="hyatt-reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="eyebrow">Reach Out</span>
            <h2 className="section-title">Get in Touch</h2>
            <div className="hr-line" style={{ maxWidth: '40px', margin: '1.5rem auto' }} />
          </div>

          <div className="grid-2" style={{ gap: '4rem' }}>
            <div ref={addToRefs} className="hyatt-reveal">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1.5rem' }}>Location & Hours</h3>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Location</h4>
                <p style={{ lineHeight: 1.6 }}>Around Bambis, next to Mekaneyesus building<br/>Addis Ababa, Ethiopia</p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Phone</h4>
                <p style={{ lineHeight: 1.6 }}>+251 981 74 75 76<br/>+251 981 76 77 78</p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Hours</h4>
                <p style={{ lineHeight: 1.6 }}>Daily: 7:00 AM – 9:00 PM</p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Follow Us</h4>
                <p style={{ lineHeight: 1.6 }}>
                  Follow us for daily specials, behind-the-scenes clips, and riverside moments:<br/>
                  <a href="#" style={{ color: 'var(--primary)', fontWeight: 500 }}>📸 @GurshaKitchen</a> | <a href="#" style={{ color: 'var(--primary)', fontWeight: 500 }}>🎵 @GurshaKitchen</a>
                </p>
              </div>
            </div>

            <div ref={addToRefs} className="hyatt-reveal" style={{ background: 'var(--bg-alt)', padding: '3rem', borderRadius: '4px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1.5rem' }}>Order With Us</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Choose your preferred way to enjoy Gursha Kitchen:</p>
              
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <li>
                  <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', display: 'block', marginBottom: '0.2rem' }}>Delivery</strong>
                  <span style={{ color: 'var(--text-muted)' }}>Available via Feres, SafeWay, or WhatsApp</span>
                </li>
                <li>
                  <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', display: 'block', marginBottom: '0.2rem' }}>Pickup</strong>
                  <span style={{ color: 'var(--text-muted)' }}>Call ahead or order online for quick counter service</span>
                </li>
                <li>
                  <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', display: 'block', marginBottom: '0.2rem' }}>Dine-In</strong>
                  <span style={{ color: 'var(--text-muted)' }}>Walk-ins welcome. Reservations recommended for groups of 6+</span>
                </li>
                <li>
                  <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', display: 'block', marginBottom: '0.2rem' }}>Catering</strong>
                  <span style={{ color: 'var(--text-muted)' }}>Minimum 15 guests. Book 3 days in advance.</span>
                </li>
              </ul>

              <div style={{ marginTop: '2.5rem' }}>
                <Link href="/about#catering" className="btn-primary" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>Inquire for Catering</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: 'var(--secondary)', color: 'white', padding: '6rem 0 3rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Come for the food.<br />Stay for the vibe.
          </h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <a href="tel:+251981747576" className="btn-primary" style={{ background: 'white', color: 'var(--secondary)', border: 'none' }}>Reserve a Table</a>
            <a href="#contact" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>Order for Delivery</a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.5 }}>
              © 2026 Gursha Kitchen. All Rights Reserved.
            </p>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {['Instagram', 'Facebook', 'TikTok'].map(s => (
                <Link key={s} href="#" style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.6, color: 'white' }}>{s}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
