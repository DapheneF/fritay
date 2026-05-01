'use client';
import { useState } from 'react';

const ITEMS = [
  { name: 'Griot', desc: 'Porc frit mariné', price: 20 },
  { name: 'Dinde', desc: 'Dinde assaisonnée', price: 20 },
  { name: 'Tassot de Bœuf', desc: 'Bœuf mariné et frit', price: 30 },
  { name: 'Poulet', desc: 'Poulet assaisonné', price: 20 },
  { name: 'Poisson Entier', desc: 'Poisson assaisonné', price: 30 },
  { name: 'Pâtés', desc: 'Pâté kodé lakay', price: 9 },
];

// Modification 1 : Tableau d'objets pour gérer le supplément
const SIDES_DATA = [
  { name: 'Riz Noir / Djon Djon', price: 5 },
  { name: 'Bananes Pesées', price: 0 },
  { name: 'Akra', price: 0 },
  { name: 'Pikliz', price: 0 },
  { name: 'Ti Pâtés', price: 0 },
];

const HEURES = ['18h00','18h30','19h00','19h30','20h00','20h30','21h00','21h30','22h00'];

const inputStyle = {
  width: '100%', background: '#fff', border: '1px solid #F0DCC8',
  borderRadius: '7px', color: '#1a0e00', fontFamily: 'inherit',
  fontSize: '15px', padding: '11px 15px', outline: 'none',
};

const labelStyle = {
  display: 'block', fontSize: '10px', letterSpacing: '2px',
  textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '7px',
};

export default function ReservationForm() {
  const [form, setForm] = useState({ prenom: '', nom: '', tel: '', email: '', heure: '', special: '' });
  const [order, setOrder] = useState(ITEMS.map(i => ({ ...i, checked: false, qty: 1 })));
  const [sides, setSides] = useState([]);
  const [status, setStatus] = useState('idle');

  // Modification 2 : Calcul du total incluant le supplément des accompagnements
  const totalItems = order.reduce((s, i) => i.checked ? s + i.price * i.qty : s, 0);
  const totalSides = sides.reduce((s, sideName) => {
    const sideInfo = SIDES_DATA.find(sd => sd.name === sideName);
    return s + (sideInfo ? sideInfo.price : 0);
  }, 0);
  
  const total = totalItems + totalSides;

  const toggleItem = (idx) => {
    setOrder(prev => prev.map((item, i) => i === idx ? { ...item, checked: !item.checked } : item));
  };

  const changeQty = (idx, delta) => {
    setOrder(prev => prev.map((item, i) => i === idx ? { ...item, qty: Math.max(1, item.qty + delta) } : item));
  };

  const toggleSide = (side) => {
    setSides(prev => prev.includes(side) ? prev.filter(s => s !== side) : [...prev, side]);
  };

  const handleSubmit = async () => {
    if (!form.prenom || !form.nom) return alert('Veuillez entrer votre nom complet.');
    if (!form.tel) return alert('Veuillez entrer votre numéro de téléphone.');
    if (!form.email) return alert('Veuillez entrer votre email.');
    if (!form.heure) return alert('Veuillez choisir une heure de pick-up.');
    if (!order.some(i => i.checked)) return alert('Veuillez sélectionner au moins un plat.');

    const commande = order
      .filter(i => i.checked)
      .map(i => `${i.name} x${i.qty} ($${(i.price * i.qty).toFixed(2)})`)
      .join(', ');

    setStatus('loading');

    const res = await fetch('/api/reservation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        commande,
        accompagnements: sides.join(', ') || 'Aucun',
        total: `$${total.toFixed(2)}`,
      }),
    });

    const data = await res.json();
    setStatus(data.success ? 'success' : 'error');
  };

  if (status === 'success') return (
    <div style={{
      background: '#fff', border: '1px solid #F0DCC8',
      borderRadius: '12px', padding: '3rem', textAlign: 'center',
    }}>
      <p style={{ fontSize: '60px', marginBottom: '1rem' }}>🎉</p>
      <h3 style={{
        fontFamily: 'var(--font-bebas)', fontSize: '40px',
        letterSpacing: '3px', color: 'var(--orange)', marginBottom: '10px',
      }}>Merci !</h3>
      <p style={{ color: '#5a3a1a', fontSize: '16px', lineHeight: 1.7 }}>
        Votre réservation a bien été reçue.<br />
        Un email de confirmation vous a été envoyé à <strong>{form.email}</strong>.<br />
         Veuillez vérifier votre boîte de réception (et vos spams).<br /><br />
        Paiement : <strong style={{ color: 'var(--orange)' }}>Cash ou Interac</strong> au pick-up.<br />
        Pour Interac : envoyez à <strong>daphenefaubert@gmail.com</strong><br /><br />
        À vendredi ! 🍗
      </p>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

      {/* Payment banner */}
      <div style={{
        background: '#FFF3E8', borderLeft: '3px solid var(--orange)',
        borderRadius: '8px', padding: '14px 18px',
        fontSize: '13px', color: '#5a3a1a', lineHeight: 1.6,
      }}>
        💵 <strong style={{ color: 'var(--orange)' }}>Paiement à la livraison / pick-up</strong> — Cash ou Interac acceptés.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div>
          <label style={labelStyle}>Prénom *</label>
          <input style={inputStyle} placeholder="Dane" value={form.prenom} onChange={e => setForm({ ...form, prenom: e.target.value })} />
        </div>
        <div>
          <label style={labelStyle}>Nom *</label>
          <input style={inputStyle} placeholder="Faubert" value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div>
          <label style={labelStyle}>Téléphone *</label>
          <input style={inputStyle} placeholder="(343) 000-0000" value={form.tel} onChange={e => setForm({ ...form, tel: e.target.value })} />
        </div>
        <div>
          <label style={labelStyle}>Heure pick-up *</label>
          <select style={inputStyle} value={form.heure} onChange={e => setForm({ ...form, heure: e.target.value })}>
            <option value="">Choisir</option>
            {HEURES.map(h => <option key={h}>{h}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label style={labelStyle}>Email *</label>
        <input style={inputStyle} type="email" placeholder="exemple@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      </div>

      <div>
        <label style={{ ...labelStyle, marginBottom: '10px' }}>Menu Spécial *</label>
        <div style={{ background: '#fff', border: '1px solid #F0DCC8', borderRadius: '10px', overflow: 'hidden' }}>
          {order.map((item, idx) => (
            <div key={item.name} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 16px', background: '#fff',
              borderBottom: idx < order.length - 1 ? '1px solid #F0DCC8' : 'none',
              gap: '10px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <div
                  onClick={() => toggleItem(idx)}
                  style={{
                    width: '20px', height: '20px', flexShrink: 0,
                    background: item.checked ? 'var(--orange)' : '#FDF6EE',
                    border: `1px solid ${item.checked ? 'var(--orange)' : '#F0DCC8'}`,
                    borderRadius: '5px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', fontWeight: 900,
                    color: item.checked ? '#fff' : 'transparent',
                    transition: 'all 0.15s',
                  }}
                >✓</div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a0e00' }}>{item.name}</div>
                  <div style={{ fontSize: '11px', color: '#8a6a50' }}>{item.desc}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                {item.checked && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <button onClick={() => changeQty(idx, -1)} style={{
                      width: '28px', height: '28px', background: '#FDF6EE',
                      border: '1px solid #F0DCC8', borderRadius: '5px',
                      color: '#1a0e00', fontSize: '18px', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>−</button>
                    <span style={{ fontWeight: 700, minWidth: '18px', textAlign: 'center', color: '#1a0e00' }}>{item.qty}</span>
                    <button onClick={() => changeQty(idx, 1)} style={{
                      width: '28px', height: '28px', background: '#FDF6EE',
                      border: '1px solid #F0DCC8', borderRadius: '5px',
                      color: '#1a0e00', fontSize: '18px', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>+</button>
                  </div>
                )}
                <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '20px', color: 'var(--orange)', minWidth: '50px', textAlign: 'right' }}>
                  ${item.price % 1 === 0 ? item.price : item.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sides */}
      <div>
        <label style={{ ...labelStyle, marginBottom: '10px' }}>Accompagnements</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {SIDES_DATA.map(side => (
            <button key={side.name} onClick={() => toggleSide(side.name)} style={{
              background: sides.includes(side.name) ? '#FFF3E8' : '#fff',
              border: `1px solid ${sides.includes(side.name) ? 'var(--orange)' : '#F0DCC8'}`,
              borderRadius: '20px', padding: '7px 16px',
              fontSize: '13px', fontFamily: 'inherit',
              color: sides.includes(side.name) ? 'var(--orange)' : '#5a3a1a',
              fontWeight: sides.includes(side.name) ? 700 : 400,
              cursor: 'pointer', transition: 'all 0.15s',
            }}>
              {/* Modification 3 : Affichage visuel du supplément */}
              {side.name} {side.price > 0 ? `(+$${side.price})` : ''}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
          <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#8a6a50' }}>Total estimé</span>
          <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '32px', color: 'var(--orange)', letterSpacing: '2px' }}>
            ${total % 1 === 0 ? total : total.toFixed(2)}
          </span>
        </div>
      </div>

      <div>
        <label style={labelStyle}>Demande spéciale</label>
        <textarea style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
          placeholder="Allergies, préférences..."
          value={form.special}
          onChange={e => setForm({ ...form, special: e.target.value })}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={status === 'loading'}
        style={{
          width: '100%',
          background: status === 'loading' ? '#ccc' : 'var(--orange)',
          color: status === 'loading' ? '#888' : '#fff',
          border: 'none', borderRadius: '8px',
          fontFamily: 'var(--font-bebas)', fontSize: '24px', letterSpacing: '3px',
          padding: '16px', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          transition: 'background 0.2s',
        }}
      >
        {status === 'loading' ? 'Envoi en cours...' : 'CONFIRMER MA RÉSERVATION'}
      </button>

      {status === 'error' && (
        <p style={{ color: '#cc0000', textAlign: 'center', fontSize: '14px' }}>
          Une erreur est survenue. Contactez-nous au 343-987-5088.
        </p>
      )}
    </div>
  );
}