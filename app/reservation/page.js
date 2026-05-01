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
            fontSize: '10px', letterSpacing: '6px',
            textTransform: 'uppercase', color: 'var(--orange)',
            textAlign: 'center', marginBottom: '6px',
          }}>
            Réservez votre plat
          </p>
          <h1 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: '52px', letterSpacing: '4px',
            color: 'var(--orange)',textAlign: 'center', marginBottom: '4px',
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
        background: '#111', borderTop: '1px solid #1a1a1a',
        textAlign: 'center', padding: '2rem',
      }}>
        <a href="tel:3439875088" style={{ color: 'var(--orange)', textDecoration: 'none', fontSize: '18px', fontWeight: 700 }}>
          📞 343-987-5088
        </a>
        <p style={{ color: '#444', fontSize: '12px', marginTop: '8px' }}>
          Soirée Fritay · Vendredi 13 Février · Pick-up 18h–22h
        </p>
      </footer>
    </>
  );
}