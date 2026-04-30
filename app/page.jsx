import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />

      {/* CTA section */}
      <section style={{
        padding: '5rem 2rem',
        textAlign: 'center',
        background: 'var(--bg)',
        borderTop: '1px solid #1a1a1a',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: '48px', letterSpacing: '4px',
          marginBottom: '1rem',
        }}>
          Prêt à commander ?
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '16px' }}>
          Réservez votre plat à l'avance — Pick-up de 18h à 22h
        </p>
        <Link href="/reservation" style={{
          display: 'inline-block',
          background: 'var(--orange)', color: '#000',
          fontFamily: 'var(--font-bebas)',
          fontSize: '24px', letterSpacing: '3px',
          padding: '16px 48px', borderRadius: '8px',
          textDecoration: 'none',
        }}>
          RÉSERVER MON PLAT
        </Link>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#111', borderTop: '1px solid #1a1a1a',
        textAlign: 'center', padding: '2rem',
      }}>
        <a href="tel:3439875088" style={{ color: 'var(--orange)', textDecoration: 'none', fontSize: '18px', fontWeight: 700 }}>
          📞 343-987-5088
        </a>
        <p style={{ color: '#444', fontSize: '12px', marginTop: '8px' }}>
          GOTI Fritay · Le vrai goût haïtien 🔥 · Commande & Pick-up 18h–22h
        </p>
      </footer>
    </>
  );
}