import { NextResponse } from 'next/server';
import transporter from '@/lib/mailer';

export async function POST(request) {
  const body = await request.json();
  const { prenom, nom, tel, email, heure, commande, accompagnements, total, special } = body;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'daphenefaubert@gmail.com',
      subject: `Nouvelle réservation – ${prenom} ${nom}`,
      html: `
        <h2>Nouvelle réservation Soirée Fritay 🍗</h2>
        <p><strong>Nom :</strong> ${prenom} ${nom}</p>
        <p><strong>Téléphone :</strong> ${tel}</p>
        <p><strong>Email :</strong> ${email || 'Non fourni'}</p>
        <p><strong>Heure pick-up :</strong> ${heure}</p>
        <hr/>
        <p><strong>Commande :</strong> ${commande}</p>
        <p><strong>Accompagnements :</strong> ${accompagnements}</p>
        <p><strong>Total estimé :</strong> ${total}</p>
        <hr/>
        <p><strong>Demande spéciale :</strong> ${special || 'Aucune'}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}