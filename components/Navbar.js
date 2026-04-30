'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
   <nav style={{
  position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
  background: 'rgba(253,246,238,0.95)', backdropFilter: 'blur(10px)',
  borderBottom: '1px solid #F0DCC8',
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '0 2rem', height: '64px',
}}>
      <Link href="/" style={{
  fontFamily: 'var(--font-bebas)',
  fontSize: '28px', letterSpacing: '3px',
  color: '#1a0e00', textDecoration: 'none',
}}>
  GOTI <span style={{ color: 'var(--orange)' }}>FRITAY</span>
</Link>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link href="/#menu" style={{ color: '#5a3a1a', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
  Menu
</Link>
        <Link href="/reservation" style={{
          background: 'var(--orange)', color: '#000',
          padding: '8px 20px', borderRadius: '6px',
          textDecoration: 'none', fontSize: '14px', fontWeight: 800,
          fontFamily: 'var(--font-bebas)', letterSpacing: '2px',
        }}>
          RÉSERVER
        </Link>
      </div>
    </nav>
  );
}