'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';
import { menuData } from '@/data/menu';

export default function AdminDashboard() {
  const [tableNumber, setTableNumber] = useState('1');
  const [activeTab, setActiveTab] = useState<'qr' | 'menu'>('qr');

  const baseUrl = 'https://gurshakitchen.et/digital-menu';
  const menuUrl = `${baseUrl}?table=${tableNumber}`;

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', color: 'var(--text-main)' }}>
      {/* Header */}
      <header style={{ height: '110px', background: 'white', borderBottom: '1px solid var(--border-light)', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '8px' }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--border-light)', flexShrink: 0 }}>
              <Image src="/logo-02.jpg" alt="Logo" width={70} height={70} style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, fontFamily: 'var(--font-display)' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--secondary)' }}>GURSHA</span>
              <span style={{ fontSize: '0.6rem', color: 'var(--primary)', letterSpacing: '0.2em', fontWeight: 900 }}>KITCHEN</span>
            </div>
          </Link>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Admin Console</span>
        </div>
      </header>

      <div className="container" style={{ padding: '4rem 0' }}>
        <div style={{ display: 'flex', gap: '3rem', marginBottom: '5rem' }}>
          {['qr', 'menu'].map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t as any)}
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: activeTab === t ? 'var(--text-main)' : 'var(--text-muted)',
                paddingBottom: '0.5rem',
                borderBottom: activeTab === t ? '2px solid var(--primary)' : '2px solid transparent'
              }}
            >
              {t === 'qr' ? 'QR Management' : 'Inventory'}
            </button>
          ))}
        </div>

        {activeTab === 'qr' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Generate Guest Access</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
                Create a unique QR code for each table to allow guests to browse the digital menu and place requests.
              </p>
              
              <div style={{ marginBottom: '3rem' }}>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Table Number</label>
                <input 
                  type="text" 
                  value={tableNumber} 
                  onChange={(e) => setTableNumber(e.target.value)}
                  style={{ width: '100%', padding: '1rem', background: 'transparent', border: '1px solid var(--border-light)', fontSize: '1.2rem', fontFamily: 'var(--font-display)' }}
                />
              </div>
              
              <button 
                onClick={() => window.print()} 
                className="btn-primary"
                style={{ width: '100%' }}
              >
                Print Access Card
              </button>
            </div>

            <div style={{ background: 'white', padding: '4rem', textAlign: 'center', border: '1px solid var(--border-light)' }}>
              <div style={{ marginBottom: '2rem' }}>
                <QRCodeSVG value={menuUrl} size={250} level="H" includeMargin />
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>Table {tableNumber}</p>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Scan to view menu</p>
            </div>
          </div>
        ) : (
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>Menu Inventory</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {menuData.map(item => (
                <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '2rem', padding: '1.5rem', borderBottom: '1px solid var(--border-light)', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontSize: '0.6rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase' }}>{item.category}</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{item.en.title}</p>
                  </div>
                  <span style={{ fontWeight: 600 }}>{item.price} ETB</span>
                  <button style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 700 }}>Edit</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
