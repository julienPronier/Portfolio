import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Julien Pronier',
  description: 'Voici mon Portfolio réalisé en NextJS',
  openGraph: {
    title:'Portfolio de Pronier Julien',
    images:'./public/moi.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body >{children}</body>
    </html>
  )
}
