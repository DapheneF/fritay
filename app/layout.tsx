import { Bebas_Neue, Nunito } from 'next/font/google';
import './globals.css';
import React from 'react';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

export const metadata = {
  title: 'Soirée Fritay',
  description: 'Cuisine haïtienne authentique – Réservez votre plat',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${bebas.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}