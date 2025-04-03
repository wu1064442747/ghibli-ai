import React from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

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
      <body className={`${inter.className} min-h-screen bg-[#f0f7ff]`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}