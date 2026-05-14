'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';
import { MenuItem } from '@/data/menu';

export default function AdminDashboard() {
  const [tableNumber, setTableNumber] = useState('1');
  const [activeTab, setActiveTab] = useState<'qr' | 'menu'>('menu');
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<{id: string, en: string, am: string}[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  
  const [editingItem, setEditingItem] = useState<(MenuItem & {isNew?: boolean}) | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch('/api/menu')
      .then(res => res.json())
      .then(data => {
        if (data.error) console.error('API Error:', data.error);
        setMenuData(data.items || []);
        setCategories(data.categories || []);
        setLoading(false);
      });
  }, []);

  const saveMenu = async (newItems: MenuItem[]) => {
    setSaving(true);
    await fetch('/api/menu', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ categories, items: newItems })
    });
    setMenuData(newItems);
    setSaving(false);
    setEditingItem(null);
  };

  const handleSaveItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    let newItems: MenuItem[];
    if (editingItem.isNew) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { isNew, ...itemData } = editingItem;
      newItems = [...menuData, itemData];
    } else {
      newItems = menuData.map(item => item.id === editingItem.id ? editingItem : item);
    }
    saveMenu(newItems);
  };

  const handleDeleteItem = (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      const newItems = menuData.filter(item => item.id !== id);
      saveMenu(newItems);
    }
  };

  const baseUrl = 'https://gurshakitchen.et/digital-menu';
  const menuUrl = `${baseUrl}?table=${tableNumber}`;

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-main)', padding: '1rem', color: 'var(--text-main)' }}>
        <div style={{ background: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Admin Access</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Please enter your PIN to continue.</p>
          <input 
            type="password" 
            value={pinInput} 
            onChange={e => setPinInput(e.target.value)}
            style={{ width: '100%', padding: '1rem', fontSize: '1.5rem', textAlign: 'center', letterSpacing: '0.5rem', border: '2px solid var(--border-light)', borderRadius: '0.5rem', marginBottom: '1rem', background: 'var(--bg-light)', color: 'var(--text-main)' }}
            placeholder="****"
            maxLength={4}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                pinInput === '7576' ? setIsAuthenticated(true) : alert('Incorrect PIN');
              }
            }}
          />
          <button 
            onClick={() => pinInput === '7576' ? setIsAuthenticated(true) : alert('Incorrect PIN')}
            className="btn-primary" 
            style={{ width: '100%', padding: '1rem' }}
          >
            Unlock
          </button>
        </div>
      </div>
    );
  }

  if (loading) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-main)' }}>Loading Admin...</div>;

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
          {['menu', 'qr'].map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t as 'qr' | 'menu')}
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: activeTab === t ? 'var(--text-main)' : 'var(--text-muted)',
                paddingBottom: '0.5rem',
                borderBottom: activeTab === t ? '2px solid var(--primary)' : '2px solid transparent',
                background: 'transparent', cursor: 'pointer'
              }}
            >
              {t === 'qr' ? 'QR Management' : 'Inventory'}
            </button>
          ))}
        </div>

        {activeTab === 'qr' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>Generate Guest Access</h2>
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
              
              <button onClick={() => window.print()} className="btn-primary" style={{ width: '100%' }}>Print Access Card</button>
            </div>

            <div style={{ background: 'white', padding: '4rem', textAlign: 'center', border: '1px solid var(--border-light)' }}>
              <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                <QRCodeSVG value={menuUrl} size={250} level="H" includeMargin />
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>Table {tableNumber}</p>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Scan to view menu</p>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)' }}>Menu Inventory</h2>
              <button 
                className="btn-primary"
                onClick={() => setEditingItem({ id: Date.now().toString(), category: categories[0].id, price: '0.00', image: '/placeholder.jpg', en: { title: '', description: '' }, am: { title: '', description: '' }, isNew: true })}
              >
                + Add Item
              </button>
            </div>
            
            <div style={{ display: 'grid', gap: '1rem' }}>
              {menuData.map(item => (
                <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto auto auto', gap: '2rem', padding: '1.5rem', borderBottom: '1px solid var(--border-light)', alignItems: 'center', background: 'white' }}>
                  <div style={{ width: '80px', height: '60px', position: 'relative', background: '#eee' }}>
                    {item.image && item.image !== '/tibbs.webp' && item.image !== '/placeholder.jpg' && (
                      <Image src={item.image} alt="" fill style={{ objectFit: 'cover' }} />
                    )}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.6rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase' }}>{categories.find(c => c.id === item.category)?.en || item.category}</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{item.en.title}</p>
                  </div>
                  <span style={{ fontWeight: 600 }}>{item.price === '0.00' ? '$' : `${item.price} ETB`}</span>
                  <button onClick={() => setEditingItem(item)} style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 700, background: 'transparent', border: 'none', cursor: 'pointer' }}>Edit</button>
                  <button onClick={() => handleDeleteItem(item.id)} style={{ color: 'red', fontSize: '0.75rem', fontWeight: 700, background: 'transparent', border: 'none', cursor: 'pointer' }}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {editingItem && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div style={{ background: 'white', padding: '2rem', width: '100%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '2rem' }}>{editingItem.isNew ? 'Add New Item' : 'Edit Item'}</h3>
              <form onSubmit={handleSaveItem} style={{ display: 'grid', gap: '1.5rem' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Category</label>
                    <select value={editingItem.category} onChange={e => setEditingItem({...editingItem, category: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)' }}>
                      {categories.map(c => <option key={c.id} value={c.id}>{c.en}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Price (ETB)</label>
                    <input type="number" step="0.01" value={editingItem.price} onChange={e => setEditingItem({...editingItem, price: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)' }} required />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Image Path (e.g. /doro.jpg)</label>
                  <input type="text" value={editingItem.image} onChange={e => setEditingItem({...editingItem, image: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)' }} required />
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                  <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>English</h4>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    <input type="text" placeholder="Title" value={editingItem.en.title} onChange={e => setEditingItem({...editingItem, en: {...editingItem.en, title: e.target.value}})} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)' }} required />
                    <textarea placeholder="Description" value={editingItem.en.description} onChange={e => setEditingItem({...editingItem, en: {...editingItem.en, description: e.target.value}})} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)', minHeight: '80px' }} />
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                  <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Amharic (አማርኛ)</h4>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    <input type="text" placeholder="ርዕስ (Title)" value={editingItem.am.title} onChange={e => setEditingItem({...editingItem, am: {...editingItem.am, title: e.target.value}})} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)' }} required />
                    <textarea placeholder="መግለጫ (Description)" value={editingItem.am.description} onChange={e => setEditingItem({...editingItem, am: {...editingItem.am, description: e.target.value}})} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)', minHeight: '80px' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                  <button type="button" onClick={() => setEditingItem(null)} className="btn-outline" style={{ padding: '0.8rem 1.5rem' }}>Cancel</button>
                  <button type="submit" className="btn-primary" style={{ padding: '0.8rem 2rem' }} disabled={saving}>{saving ? 'Saving...' : 'Save Item'}</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
