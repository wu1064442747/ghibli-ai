import React from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ghibli AI - Create Ghibli-Style Art with AI',
  description: 'Create your own magical Ghibli world with AI technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q3LSNTRHP7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Q3LSNTRHP7');
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen bg-[#f0f7ff]`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}