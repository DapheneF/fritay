'use client';
import Image from 'next/image';

const ITEMS = [
  { name: 'Griot', desc: 'Porc frit mariné dans une sauce épicée', price: '$20', img: '/images/griot.jpg' },
  { name: 'Dinde', desc: 'Dinde assaisonnée aux épices haïtiennes', price: '$20', img: '/images/dinde.jpg' },
  { name: 'Tassot de Bœuf', desc: 'Morceaux de bœuf marinés et frits', price: '$30', img: '/images/tassot.jpg' },
  { name: 'Poulet', desc: 'Poulet assaisonné aux épices haïtiennes', price: '$20', img: '/images/poulet.jpg' },
  { name: 'Poisson Entier', desc: 'Poisson assaisonné aux épices haïtiennes', price: '$30', img: '/images/poisson.jpg' },
  { name: 'Pâtés', desc: 'Pâté kodé lakay', price: '$9', img: '/images/pates.jpg' },
];

// Modification ici : Transformation en tableau d'objets avec prix
const SIDES = [
  { name: 'Riz Noir / Djon Djon', price: 5 },
  { name: 'Bananes Pesées', price: 0 },
  { name: 'Akra', price: 0 },
  { name: 'Marinades', price: 0 },
  { name: 'Pikliz', price: 0 },
  { name: 'Ti Pâtés', price: 0 },
];

export default function Menu() {
  return (
    <section id="menu" style={{
      padding: '5rem 1.5rem',
      background: 'var(--bg2)',
    }}>
      <p style={{
        fontSize: '12px', letterSpacing: '4px',
        textTransform: 'uppercase', color: '',
        textAlign: 'center', marginBottom: '6px',
      }}>
        Ce soir au menu
      </p>
      <h2 style={{
        fontFamily: 'var(--font-bebas)',
        fontSize: '48px', letterSpacing: '4px',
        color: 'var(--orange)', textAlign: 'center', marginBottom: '2.5rem',
      }}>
        Menu Spécial
      </h2>

      {/* Menu grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '14px', maxWidth: '800px', margin: '0 auto 3rem',
      }}>
        {ITEMS.map((item) => (
          <div
            key={item.name}
            style={{
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              borderRadius: '10px', overflow: 'hidden',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--orange)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
              <Image
                src={item.img}
                alt={item.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: '14px' }}>
              <span style={{ fontWeight: 800, fontSize: '15px', display: 'block' }}>
                {item.name}
              </span>
              <span style={{
                fontSize: '11px', color: 'var(--muted)',
                margin: '4px 0 10px', display: 'block', lineHeight: 1.4,
              }}>
                {item.desc}
              </span>
              <span style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: '26px', color: 'var(--orange)', letterSpacing: '1px',
              }}>
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Sides */}
      <div style={{
        background: 'var(--orange-dim)',
        border: '1px solid var(--border)',
        borderRadius: '10px', padding: '1.5rem',
        maxWidth: '800px', margin: '0 auto', textAlign: 'center',
      }}>
        <p style={{
          fontSize: '12px', letterSpacing: '3px',
          textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '12px',
        }}>
          Accompagnements inclus
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
          {SIDES.map(side => (
            <span key={side.name} style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: '20px', padding: '6px 16px',
              fontSize: '13px', color: '#070606',
            }}>
              {/* Affichage conditionnel du prix */}
              {side.name} {side.price > 0 && <strong style={{color: 'var(--orange)'}}>(+${side.price})</strong>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}