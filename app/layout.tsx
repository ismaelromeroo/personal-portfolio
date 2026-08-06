import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Ismael Romero | Portfolio',
  description: 'Ismael Romero — software engineer, CS & Statistics at UNF. Portfolio and selected work.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icons/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icons/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icons/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icons/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${poppins.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
