import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{
  minHeight: '100vh',
  display: 'flex', flexDirection: 'column',
  alignItems: 'center', justifyContent: 'center',
  textAlign: 'center', padding: '6rem 2rem 3rem',
  position: 'relative', overflow: 'hidden',
  backgroundImage: 'url(/images/poulet.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}>
  {/* Overlay sombre par dessus la photo */}
  <div style={{
    position: 'absolute', inset: 0,
    background: 'rgba(0,0,0,0.75)',
  }} />
      {/* Glow effects */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,140,0,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,140,0,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <span style={{
          display: 'inline-block',
          background: 'var(--orange)', color: '#000',
          fontWeight: 800, fontSize: '11px',
          letterSpacing: '3px', textTransform: 'uppercase',
          padding: '7px 20px', borderRadius: '2px', marginBottom: '1.5rem',
        }}>
          🍽 Cuisine Haïtienne Authentique
        </span>

        <h1 style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(72px, 18vw, 130px)',
          lineHeight: 0.85, letterSpacing: '6px',
          color: '#fff',
          textShadow: '5px 5px 0 var(--orange)',
          marginBottom: '0.6rem',
        }}>
          SOIRÉE<br />FRITAY
        </h1>

        <p style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(20px, 5vw, 34px)',
          letterSpacing: '8px', color: 'var(--orange)',
          marginBottom: '2.5rem',
        }}>
          Menu Spécial
        </p>

        {/* Event info pills */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          flexWrap: 'wrap', gap: '14px', marginBottom: '2.5rem',
        }}>
          {[
            { label: 'Date', value: 'Vendredi 08 Mai' },
            { label: 'Pick-up', value: '18h – 22h' },
            { label: 'Téléphone', value: '343-987-5088' },
          ].map((pill) => (
            <div key={pill.label} style={{
               background: 'var(--bg2)', color: '#000',
              border: '1px solid var(--orange-border)',
              borderRadius: '6px', padding: '12px 28px', textAlign: 'center',
            }}>
              <span style={{
                display: 'block', fontSize: '10px',
                letterSpacing: '2.5px', textTransform: 'uppercase',
                color: 'var(--orange)', marginBottom: '3px',
              }}>{pill.label}</span>
              <span style={{ display: 'block', fontSize: '16px', fontWeight: 700 }}>
                {pill.value}
              </span>
            </div>
          ))}
        </div>

        {/* Payment note */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'var(--orange-dim)',
          border: '1px solid var(--orange-border)',
          borderRadius: '6px', padding: '10px 22px',
          fontSize: '13px', color: '#ddd', marginBottom: '2.5rem',
        }}>
          💵 Paiement : <strong style={{ color: 'var(--orange)' }}>Cash</strong> ou{' '}
          <strong style={{ color: 'var(--orange)' }}>Interac</strong> à la livraison
        </div>

        <div>
          <Link href="/reservation" style={{
            display: 'inline-block',
            background: 'var(--orange)', color: '#000',
            fontFamily: 'var(--font-bebas)',
            fontSize: '22px', letterSpacing: '3px',
            padding: '14px 40px', borderRadius: '8px',
            textDecoration: 'none',
          }}>
            RÉSERVER MON PLAT
          </Link>
        </div>
      </div>
    </section>
  );
}