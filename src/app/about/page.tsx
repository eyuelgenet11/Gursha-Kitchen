'use client';
import Image from 'next/image';
import Link from 'next/link';

const timeline = [
  { year: '2018', title: 'The Vision', desc: 'Born from a desire to bring Ethiopian hospitality to the global stage.' },
  { year: '2022', title: 'The Flagship', desc: 'Opening our doors opposite the Hyatt Regency in Addis Ababa.' },
  { year: '2026', title: 'The Future', desc: 'Redefining African luxury dining through tradition and innovation.' },
];

export default function About() {
  return (
    <div style={{ background: 'var(--bg-main)', color: 'var(--text-main)' }}>
      {/* Header */}
      <nav style={{ height: '100px', display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', paddingTop: '10px' }}>
            <div style={{ width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--border-light)', flexShrink: 0 }}>
              <Image src="/logo-02.jpg" alt="Logo" width={90} height={90} style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, fontFamily: 'var(--font-display)' }}>
              <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--secondary)' }}>GURSHA</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '0.3em', fontWeight: 900 }}>KITCHEN</span>
            </div>
          </Link>
          <div className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/digital-menu" className="nav-link">Menu</Link>
            <Link href="/digital-menu" className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>Reserve</Link>
          </div>
        </div>
      </nav>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow">The Heritage</span>
            <h1 className="section-title">Beyond the Meal</h1>
            <p style={{ fontSize: '1.25rem', lineHeight: 2, marginBottom: '5rem' }}>
              At Gursha Kitchen, we believe that dining is a sacred act of community. 
              Our name comes from the tradition of feeding one another — a gesture of trust, 
              love, and profound hospitality that defines the Ethiopian spirit.
            </p>
          </div>

          <div style={{ background: 'white', padding: '1rem', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', marginBottom: '8rem' }}>
            <div className="img-zoom-hover" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#f5f5f5' }}>
              <Image src="/interior-1.png" alt="Gursha Kitchen Interior" fill sizes="(max-width: 768px) 100vw, 1200px" style={{ objectFit: 'cover' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem' }}>
            {timeline.map((item, i) => (
              <div key={i}>
                <span style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', opacity: 0.2, display: 'block', marginBottom: '1rem' }}>{item.year}</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-dark)', color: 'white', padding: '10rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow" style={{ color: 'white', opacity: 0.6 }}>Our Philosophy</span>
              <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '2rem' }}>Purity in Every Ingredient</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                We source our spices directly from family farms in the Ethiopian highlands, 
                ensuring that every flavor is as authentic as the soil it grew in.
              </p>
              <Link href="/digital-menu" className="btn-primary" style={{ background: 'white', color: 'black', border: 'none' }}>View Menu</Link>
            </div>
            <div style={{ position: 'relative', height: '500px' }}>
              <Image src="/gursha-platter.png" alt="Ingredients" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
