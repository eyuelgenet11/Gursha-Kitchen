'use client';
import { useState, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { menuData, menuCategories, MenuItem } from '@/data/menu';

export default function DigitalMenu() {
  const [activeCategory, setActiveCategory] = useState('salad');
  const [lang, setLang] = useState<'en' | 'am'>('en');
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.08 });

    revealRefs.current.forEach(ref => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [activeCategory]);

  useEffect(() => {
    document.body.style.overflow = (menuOpen || selected !== null) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, selected]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const filtered = useMemo(() => menuData.filter(i => i.category === activeCategory), [activeCategory]);

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', color: 'var(--text-main)' }}>

      {/* Mobile Drawer */}
      <nav className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem' }}>Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem' }}>The Story</Link>
        <Link href="/digital-menu" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontSize: '3rem' }}>Menu</Link>
      </nav>

      {/* Header */}
      <header style={{ borderBottom: '1px solid var(--border-light)', background: 'var(--bg-main)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container nav-inner" style={{ height: 'var(--header-height)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" className="nav-logo">
            <div className="nav-logo-img">
              <Image src="/logo-02.jpg" alt="Logo" width={56} height={56} style={{ objectFit: 'cover' }} />
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo-brand">GURSHA</span>
              <span className="nav-logo-sub">KITCHEN</span>
            </div>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '0.6rem 1.1rem',
                color: 'var(--secondary)',
                border: '1px solid var(--secondary)',
                transition: 'all 0.3s ease',
                background: 'transparent',
                cursor: 'pointer',
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'var(--secondary)';
                e.currentTarget.style.color = 'var(--bg-main)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--secondary)';
              }}
            >
              {lang === 'en' ? 'አማርኛ' : 'English'}
            </button>

            <button
              className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className="container" style={{ padding: '4rem 0 6rem' }}>
        <div className="hyatt-reveal active" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="eyebrow">Our Selection</span>
          <h1 className="section-title">The Digital Menu</h1>
          <div className="hr-line" style={{ maxWidth: '50px', margin: '1.5rem auto' }} />
        </div>

        {/* Category tabs — horizontal scroll on mobile */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '0',
          marginBottom: '4rem',
          borderBottom: '1px solid var(--border-light)',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}>
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                revealRefs.current = [];
              }}
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: activeCategory === cat.id ? 'var(--primary)' : 'var(--text-muted)',
                padding: '0.75rem 1.25rem',
                transition: 'all 0.3s ease',
                position: 'relative',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                borderBottom: activeCategory === cat.id ? '2px solid var(--primary)' : '2px solid transparent',
                marginBottom: '-1px',
                background: 'none',
                cursor: 'pointer',
              }}
            >
              {cat[lang]}
              {activeCategory === cat.id && (
                <span style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}></span>
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '0' }}>
          {filtered.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              ref={addToRefs}
              className="hyatt-reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '1.5rem',
                paddingTop: '2.5rem',
                paddingBottom: '2.5rem',
                borderBottom: '1px solid var(--border-light)',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
                borderRadius: 0,
              }}
              onClick={() => setSelected(item)}
              onMouseOver={e => (e.currentTarget.style.background = 'rgba(203,65,11,0.03)')}
              onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 4vw, 1.9rem)', marginBottom: '0.5rem', lineHeight: 1.1 }}>{item[lang].title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.8, maxWidth: '500px' }}>{item[lang].description}</p>
              </div>
              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.2rem', color: 'var(--secondary)' }}>
                  $
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item Detail Modal */}
      {selected && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(241,235,217,0.97)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', animation: 'fadeIn 0.4s ease', padding: '1rem' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="hyatt-reveal active"
            style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="img-zoom-hover" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', marginBottom: '2rem', boxShadow: '0 30px 70px rgba(0,0,0,0.12)' }}>
              <Image src={selected.image} alt={selected[lang].title} fill sizes="(max-width: 768px) 100vw, 560px" style={{ objectFit: 'cover' }} />
            </div>
            <span className="eyebrow" style={{ fontSize: '0.65rem' }}>
              <span className="hr-dot" />{selected.category}<span className="hr-dot" />
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 8vw, 3.2rem)', marginBottom: '1rem' }}>{selected[lang].title}</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.9 }}>{selected[lang].description}</p>
            <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '2.5rem' }}>$</div>
            <button className="btn-primary" style={{ padding: '0.9rem 3rem' }} onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ padding: '5rem 0 4rem', textAlign: 'center', borderTop: '1px solid var(--border-light)' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <Image src="/logo-02.jpg" alt="Logo" width={60} height={60} style={{ opacity: 0.18, borderRadius: '50%', filter: 'grayscale(1)', margin: '0 auto' }} />
        </div>
        <p style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.35 }}>Gursha Kitchen Luxury Dining</p>
      </footer>
    </div>
  );
}
