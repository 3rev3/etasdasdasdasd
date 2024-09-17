import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TopDrains',
  description: 'Discover the top-rated crypto drainers for Ethereum and other cryptocurrencies. Compare features, ratings, and user reviews for the best crypto draining tools in 2024.',
  keywords: 'crypto drainers, Ethereum drainers, cryptocurrency draining, best crypto tools, crypto draining review',
  openGraph: {
    title: 'TopDrains',
    description: 'Discover the top-rated crypto drainers for Ethereum and other cryptocurrencies. Compare features, ratings, and user reviews for the best crypto draining tools in 2024.',
    url: 'https://topdrains.com',
    siteName: 'CryptoDrainer Reviewer',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TopDrains',
    description: 'Discover the top-rated crypto drainers for Ethereum and other cryptocurrencies. Compare features, ratings, and user reviews for the best crypto draining tools in 2024.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://i.ibb.co/kmBmHFh/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
