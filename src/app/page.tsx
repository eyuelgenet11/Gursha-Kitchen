'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const featuredItems = [
  { title: 'Special Doro Wat', category: 'Traditional', price: '450', image: '/tibbs.webp' },
  { title: 'Gursha Kitfo', category: 'Signature', price: '520', image: '/tibbs.webp' },
  { title: 'Bayaynetu', category: 'Vegetarian', price: '380', image: '/tibbs.webp' },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach(ref => ref && observer.observe(ref));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div style={{ background: 'var(--bg-main)', color: 'var(--text-main)' }}>
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', paddingTop: '10px' }}>
            <div style={{ width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--border-light)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', flexShrink: 0 }}>
              <Image src="/logo-02.jpg" alt="Gursha Kitchen" width={90} height={90} style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, fontFamily: 'var(--font-display)' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '0.05em', color: 'var(--secondary)' }}>GURSHA</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '0.4em', fontWeight: 900 }}>KITCHEN</span>
            </div>
          </Link>
          
          <div className="nav-links">
            <Link href="/about" className="nav-link">The Story</Link>
            <Link href="/digital-menu" className="nav-link">Menu</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
            <Link href="/digital-menu" className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>Reserve Table</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
        <Image src="/hero-burger.png" alt="Traditional Hospitality" fill sizes="100vw" style={{ objectFit: 'cover', filter: 'brightness(0.6)' }} priority />
        <div className="container hyatt-reveal active" style={{ position: 'relative', zIndex: 10, color: 'white' }}>
          <span className="eyebrow" style={{ color: 'white', opacity: 0.9 }}>
            <span className="hr-dot"></span>Established 2018<span className="hr-dot"></span>
          </span>
          <h1 style={{ color: 'white', fontSize: 'clamp(3.5rem, 10vw, 7rem)', marginBottom: '2rem', fontStyle: 'italic' }}>A Tradition of <br/> Hospitality</h1>
          <Link href="/digital-menu" className="btn-primary" style={{ background: 'white', color: 'black', border: 'none' }}>Explore the Menu</Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section">
        <div className="container">
          <div ref={addToRefs} className="hyatt-reveal" style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <span className="eyebrow">Culinary Excellence</span>
            <h2 className="section-title">The Gursha Experience</h2>
            <div className="hr-line" style={{ maxWidth: '40px', margin: '2rem auto' }}></div>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              Experience the soul of Ethiopian cuisine through dishes crafted with intention, 
              locally sourced ingredients, and generations of heritage.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {featuredItems.map((item, i) => (
              <div key={i} ref={addToRefs} className="luxury-card hyatt-reveal">
                <div className="img-zoom-hover" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#f5f5f5' }}>
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 800px" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <span className="eyebrow" style={{ fontSize: '0.65rem', marginBottom: '1rem' }}>{item.category}</span>
                  <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '450px', lineHeight: 2 }}>
                    A masterpiece of flavor and tradition, prepared with our signature spice blends and a commitment to excellence.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 500 }}>{item.price} ETB</span>
                    <Link href="/digital-menu" className="btn-outline" style={{ padding: '0.75rem 2rem', fontSize: '0.75rem' }}>View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambience Section */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '8rem', alignItems: 'start' }}>
            <div ref={addToRefs} className="hyatt-reveal" style={{ paddingTop: '4rem' }}>
              <span className="eyebrow">The Ambience</span>
              <h2 className="section-title">Designed for <br/> Comfort</h2>
              <div className="hr-line" style={{ maxWidth: '40px', margin: '2rem 0' }}></div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '5rem', maxWidth: '400px', lineHeight: 2 }}>
                Our interior is a thoughtful blend of modern luxury and traditional warmth. 
                Every detail is designed to enhance your dining experience.
              </p>
              
              <div className="img-zoom-hover" style={{ padding: '2.5rem', background: 'white', boxShadow: '0 30px 60px rgba(0,0,0,0.05)', display: 'inline-block' }}>
                <div style={{ position: 'relative', width: '320px', aspectRatio: '3/4', background: '#f5f5f5' }}>
                  <Image src="/interior-2.png" alt="Restroom Detail" fill sizes="320px" style={{ objectFit: 'cover' }} />
                </div>
                <p style={{ marginTop: '2rem', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.6, textAlign: 'center' }}>
                  Refined Craftsmanship
                </p>
              </div>
            </div>

            <div ref={addToRefs} className="hyatt-reveal" style={{ background: 'white', padding: '1.5rem', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}>
              <div className="img-zoom-hover" style={{ position: 'relative', width: '100%', aspectRatio: '4/5', background: '#f5f5f5' }}>
                <Image src="/interior-1.png" alt="Dining Area" fill sizes="(max-width: 768px) 100vw, 600px" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ background: 'var(--bg-alt)', padding: '12rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div ref={addToRefs} className="hyatt-reveal" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontStyle: 'italic', marginBottom: '4rem', fontWeight: 300, lineHeight: 1.4 }}>
              &ldquo;True hospitality is found in the sharing of a meal. In Ethiopia, we call it Gursha.&rdquo;
            </h2>
            <div className="hr-line" style={{ maxWidth: '60px', margin: '0 auto 3rem' }}></div>
            <p className="eyebrow" style={{ color: 'var(--text-main)', fontSize: '0.85rem' }}>Chef Elias Gebre</p>
          </div>
        </div>
      </section>

      {/* Getting Here */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '8rem', alignItems: 'center' }}>
            <div ref={addToRefs} className="hyatt-reveal">
              <span className="eyebrow">Location</span>
              <h2 className="section-title">Getting Here</h2>
              <div className="hr-line" style={{ maxWidth: '40px', margin: '2rem 0' }}></div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 2 }}>
                Gursha Kitchen is situated in the heart of Addis Ababa's diplomatic district, 
                directly opposite the Hyatt Regency on Jomo Kenyatta St.
              </p>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Address</h4>
                  <p style={{ color: 'var(--text-main)' }}>Jomo Kenyatta St, Addis Ababa</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Valet Parking</h4>
                  <p style={{ color: 'var(--text-main)' }}>Available daily at the main entrance.</p>
                </div>
                <Link href="https://maps.google.com" target="_blank" className="btn-outline" style={{ display: 'inline-block', width: 'fit-content', marginTop: '1rem' }}>Open in Google Maps</Link>
              </div>
            </div>

            <div ref={addToRefs} className="hyatt-reveal" style={{ background: 'var(--bg-main)', padding: '1rem', boxShadow: '0 40px 80px rgba(0,0,0,0.08)' }}>
              <div className="img-zoom-hover" style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
                <Image src="/map.PNG" alt="Gursha Kitchen Location Map" fill sizes="(max-width: 768px) 100vw, 800px" style={{ objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <div ref={addToRefs} className="hyatt-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '6rem' }}>
            <div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Jomo Kenyatta St</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Addis Ababa, Ethiopia</p>
            </div>
            <div>
              <span className="eyebrow">Reservations</span>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>+251 911 22 33 44</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Daily 11:00 AM — 11:00 PM</p>
            </div>
            <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Link href="/digital-menu" className="btn-primary" style={{ padding: '1.25rem 3rem' }}>Digital Menu</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '6rem 0', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.6 }}>© 2026 Gursha Kitchen. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '3rem' }}>
            {['Instagram', 'Facebook', 'TripAdvisor'].map(s => (
              <Link key={s} href="#" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.8 }}>{s}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
