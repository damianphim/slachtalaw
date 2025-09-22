import './global.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AOSWrapper from './components/AOSWrapper'
import { Inter, Libre_Baskerville } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
  display: 'swap'
})

export const metadata = {
  title: 'Slachta Law - Client-Centered Legal Services',
  description: 'Dedicated legal counsel with integrity, strategy, and results. We provide strategic legal guidance tailored to your needs with deep roots in the legal community.',
  keywords: 'law firm, legal services, attorney, Boston lawyer, fund formation, investment management',
  authors: [{ name: 'Slachta Law' }],
  openGraph: {
    title: 'Slachta Law - Client-Centered Legal Services',
    description: 'Dedicated legal counsel with integrity, strategy, and results.',
    url: 'https://slachtalaw.com',
    siteName: 'Slachta Law',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slachta Law - Client-Centered Legal Services',
    description: 'Dedicated legal counsel with integrity, strategy, and results.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${libre.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1a1a2e" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">
        <AOSWrapper>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AOSWrapper>
      </body>
    </html>
  )
}