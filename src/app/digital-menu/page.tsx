'use client';
import { useState, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { menuData, menuCategories, MenuItem } from '@/data/menu';

export default function DigitalMenu() {
  const [activeCategory, setActiveCategory] = useState('salad');
  const [lang, setLang] = useState<'en' | 'am'>('en');
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach(ref => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [activeCategory]); // Re-observe when items change

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const filtered = useMemo(() => {
    return menuData.filter(i => i.category === activeCategory);
  }, [activeCategory]);

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', color: 'var(--text-main)' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid var(--border-light)', background: 'var(--bg-main)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container" style={{ height: '110px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '8px' }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--border-light)', flexShrink: 0 }}>
              <Image src="/logo-02.jpg" alt="Logo" width={70} height={70} style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, fontFamily: 'var(--font-display)' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--secondary)' }}>GURSHA</span>
              <span style={{ fontSize: '0.6rem', color: 'var(--primary)', letterSpacing: '0.2em', fontWeight: 900 }}>KITCHEN</span>
            </div>
          </Link>
          <button 
            onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
            style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.75rem 1.5rem', border: '1px solid var(--border-light)', transition: 'all 0.3s ease' }}
            onMouseOver={e => e.currentTarget.style.borderColor = 'var(--primary)'}
            onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border-light)'}
          >
            {lang === 'en' ? 'አማርኛ' : 'English'}
          </button>
        </div>
      </header>

      <div className="container" style={{ padding: '6rem 0' }}>
        <div className="hyatt-reveal active" style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <span className="eyebrow">Our Selection</span>
          <h1 className="section-title">The Digital Menu</h1>
          <div className="hr-line" style={{ maxWidth: '60px', margin: '2rem auto' }}></div>
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '6rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                revealRefs.current = []; // Clear refs for new animation
              }}
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: activeCategory === cat.id ? 'var(--text-main)' : 'var(--text-muted)',
                padding: '0.5rem 1rem',
                transition: 'all 0.4s ease',
                position: 'relative',
                marginBottom: '-1.6rem'
              }}
            >
              {cat[lang]}
              {activeCategory === cat.id && (
                <span style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }}></span>
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '4rem' }}>
          {filtered.map((item, i) => (
            <div 
              key={`${item.id}-${i}`}
              ref={addToRefs}
              className="hyatt-reveal" 
              style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', paddingBottom: '3rem', borderBottom: '1px solid var(--border-light)', cursor: 'pointer', transition: 'all 0.3s ease' }}
              onClick={() => setSelected(item)}
            >
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 500 }}>{item[lang].title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '600px' }}>{item[lang].description}</p>
              </div>
              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.05em' }}>{item.price} <span style={{ fontSize: '0.65rem', opacity: 0.6 }}>ETB</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item Detail Modal */}
      {selected && (
        <div 
          style={{ position: 'fixed', inset: 0, zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(241,235,217,0.98)', backdropFilter: 'blur(15px)', animation: 'fadeIn 0.5s ease' }}
          onClick={() => setSelected(null)}
        >
          <div className="hyatt-reveal active" style={{ maxWidth: '600px', width: '90%', textAlign: 'center' }} onClick={e => e.stopPropagation()}>
            <div className="img-zoom-hover" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', marginBottom: '3rem', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}>
              <Image src={selected.image} alt={selected[lang].title} fill sizes="(max-width: 768px) 100vw, 600px" style={{ objectFit: 'cover' }} />
            </div>
            <span className="eyebrow" style={{ fontSize: '0.7rem', color: 'var(--primary)' }}><span className="hr-dot"></span>{selected.category}<span className="hr-dot"></span></span>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', fontStyle: 'italic' }}>{selected[lang].title}</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 2 }}>{selected[lang].description}</p>
            <div style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '4rem' }}>{selected.price} ETB</div>
            <button className="btn-primary" style={{ padding: '1rem 4rem' }} onClick={() => setSelected(null)}>Close Selection</button>
          </div>
        </div>
      )}

      {/* Footer Branding */}
      <footer style={{ padding: '10rem 0 6rem', textAlign: 'center' }}>
        <div style={{ marginBottom: '3rem' }}>
          <Image src="/logo-02.jpg" alt="Logo" width={80} height={80} style={{ opacity: 0.2, borderRadius: '50%', filter: 'grayscale(1)', margin: '0 auto' }} />
        </div>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.4 }}>Gursha Kitchen Luxury Dining</p>
      </footer>
    </div>
  );
}
