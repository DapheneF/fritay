import { NextResponse } from 'next/server';
import transporter from '@/lib/mailer';

export async function POST(request) {
  const body = await request.json();
  const { prenom, nom, tel, email, heure, commande, accompagnements, total, special } = body;

  try {
    // Email à toi (propriétaire)
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'daphenefaubert@gmail.com',
      subject: `🍗 Nouvelle réservation – ${prenom} ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #FF8C00; padding: 20px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 28px;">SOIRÉE FRITAY</h1>
            <p style="color: #fff; margin: 5px 0 0;">Nouvelle réservation reçue 🎉</p>
          </div>
          <div style="padding: 24px; background: #fff;">
            <h2 style="color: #1a0e00;">Informations client</h2>
            <p><strong>Nom :</strong> ${prenom} ${nom}</p>
            <p><strong>Téléphone :</strong> ${tel}</p>
            <p><strong>Email :</strong> ${email || 'Non fourni'}</p>
            <p><strong>Heure pick-up :</strong> ${heure}</p>
            <hr style="border: 1px solid #F0DCC8;" />
            <h2 style="color: #1a0e00;">Commande</h2>
            <p><strong>Plats :</strong> ${commande}</p>
            <p><strong>Accompagnements :</strong> ${accompagnements}</p>
            <p><strong>Total estimé :</strong> <span style="color: #FF8C00; font-size: 20px;">${total}</span></p>
            <hr style="border: 1px solid #F0DCC8;" />
            <p><strong>Demande spéciale :</strong> ${special || 'Aucune'}</p>
          </div>
          <div style="background: #FFF3E8; padding: 16px; text-align: center;">
            <p style="margin: 0; color: #8a6a50; font-size: 13px;">Vendredi · Pick-up 18h–22h · 343-987-5088</p>
          </div>
        </div>
      `,
    });

    // Email automatique au client (seulement si il a fourni son email)
    if (email) {
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: `✅ Confirmation de réservation – Soirée Fritay`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #FF8C00; padding: 20px; text-align: center;">
              <h1 style="color: #fff; margin: 0; font-size: 28px;">SOIRÉE FRITAY</h1>
              <p style="color: #fff; margin: 5px 0 0;">Votre réservation est confirmée ! 🎉</p>
            </div>
            <div style="padding: 24px; background: #fff;">
              <p style="font-size: 16px; color: #1a0e00;">Bonjour <strong>${prenom}</strong>,</p>
              <p style="color: #5a3a1a;">Merci pour votre réservation ! Voici le récapitulatif :</p>
              
              <div style="background: #FFF3E8; border-left: 4px solid #FF8C00; padding: 16px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 4px 0;"><strong>📅 Date :</strong> Vendredi</p>
                <p style="margin: 4px 0;"><strong>🕐 Heure pick-up :</strong> ${heure}</p>
                <p style="margin: 4px 0;"><strong>🍗 Commande :</strong> ${commande}</p>
                <p style="margin: 4px 0;"><strong>🥗 Accompagnements :</strong> ${accompagnements}</p>
                <p style="margin: 4px 0;"><strong>💰 Total estimé :</strong> <span style="color: #FF8C00; font-weight: bold;">${total}</span></p>
              </div>

              <div style="background: #fff3e8; border-radius: 8px; padding: 16px; margin: 20px 0; text-align: center;">
                <p style="margin: 0; font-size: 15px; color: #1a0e00;">
                  💵 Paiement : <strong style={{ color: 'var(--orange)' }}>Cash ou Interac</strong> au pick-up.<br />
                      Pour Interac : envoyez à <strong>daphenefaubert@gmail.com</strong>
                </p>
              </div>

              <p style="color: #5a3a1a;">Nous vous contacterons au <strong>${tel}</strong> pour confirmer votre commande.</p>
              <p style="color: #5a3a1a;">À vendredi ! 🍗</p>
            </div>
            <div style="background: #FFF3E8; padding: 16px; text-align: center;">
              <p style="margin: 0; color: #8a6a50; font-size: 13px;">
                Questions ? Appelez-nous au <strong>343-987-5088</strong>
              </p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}