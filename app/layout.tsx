import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Pronier Julien',
  description: 'Voici mon Portfolio ',
  openGraph: {
    title:'test (icule)',
    images:'public/moi.png'
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
