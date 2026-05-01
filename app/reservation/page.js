import Navbar from '@/components/Navbar';
import ReservationForm from '@/components/ReservationForm';

export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main style={{
        minHeight: '100vh',
        padding: '6rem 1.5rem 4rem',
        background: 'var(--bg)',
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{
            fontSize: '10px', letterSpacing: '6x',
            textTransform: 'uppercase', color: 'var(--orange)',
            textAlign: 'center', marginBottom: '6px',
          }}>
            Réservez votre plat
          </p>
          <h1 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: '52px', letterSpacing: '4px',
            color: 'or',textAlign: 'center', marginBottom: '4px',
          }}>
            Réservation
          </h1>
          <p style={{
            textAlign: 'center', color: 'var(--muted)',
            fontSize: '14px', marginBottom: '2.5rem',
          }}>
            Réservez à l'avance pour faciliter la préparation · Pick-up 18h–22h
          </p>

          <ReservationForm />
        </div>
      </main>

     <footer style={{
  background: '#1a0e00',
  borderTop: '3px solid #E8720C',
  padding: '3rem 2rem 2rem',
}}>
  <div style={{
    maxWidth: '900px', margin: '0 auto',
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem', marginBottom: '2rem',
  }}>

    {/* Logo + description */}
    <div>
      <p style={{
        fontFamily: 'var(--font-bebas)', fontSize: '32px',
        letterSpacing: '3px', color: '#fff', marginBottom: '8px',
      }}>
        GOTI <span style={{ color: '#E8720C' }}>FRITAY</span>
      </p>
      <p style={{ color: '#8a6a50', fontSize: '13px', lineHeight: 1.7 }}>
        Cuisine haïtienne authentique.<br />
        Saveurs d'Haïti, faites avec amour.
      </p>
    </div>

    {/* Infos */}
    <div>
      <p style={{ color: '#E8720C', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 700 }}>
        Informations
      </p>
      <p style={{ color: '#ccc', fontSize: '13px', marginBottom: '6px' }}>
        📅 Tous les vendredis
      </p>
      <p style={{ color: '#ccc', fontSize: '13px', marginBottom: '6px' }}>
        🕐 Pick-up : 18h – 22h
      </p>
      <p style={{ color: '#ccc', fontSize: '13px', marginBottom: '6px' }}>
        📍 Ottawa-Gatineau
      </p>
      <p style={{ color: '#ccc', fontSize: '13px' }}>
        💵 Cash ou Interac
      </p>
    </div>

    {/* Contact */}
    <div>
      <p style={{ color: '#E8720C', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 700 }}>
        Contact
      </p>
      <a href="tel:3439875088" style={{ display: 'block', color: '#fff', textDecoration: 'none', fontSize: '20px', fontFamily: 'var(--font-bebas)', letterSpacing: '2px', marginBottom: '8px' }}>
        📞 343-987-5088
      </a>
      <a href="mailto:daphenefaubert@gmail.com" style={{ display: 'block', color: '#8a6a50', textDecoration: 'none', fontSize: '12px', marginBottom: '16px' }}>
        daphenefaubert@gmail.com
      </a>
      <a href="/reservation" style={{
        display: 'inline-block',
        background: '#E8720C', color: '#fff',
        fontFamily: 'var(--font-bebas)', fontSize: '16px',
        letterSpacing: '2px', padding: '10px 24px',
        borderRadius: '6px', textDecoration: 'none',
      }}>
        RÉSERVER
      </a>
    </div>

  </div>

  {/* Bottom bar */}
  <div style={{
    borderTop: '1px solid #2a1800',
    paddingTop: '1.5rem',
    display: 'flex', flexWrap: 'wrap',
    justifyContent: 'space-between', alignItems: 'center',
    gap: '8px', maxWidth: '900px', margin: '0 auto',
  }}>
    <p style={{ color: '#444', fontSize: '12px', margin: 0 }}>
      © 2025 Goti Fritay · Tous droits réservés
    </p>
    <p style={{ color: '#444', fontSize: '12px', margin: 0, fontStyle: 'italic' }}>
      Merci de soutenir un petit business local 🧡
    </p>
  </div>
</footer>
    </>
  );
}