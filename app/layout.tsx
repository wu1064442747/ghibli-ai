import React from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ghibli AI - 吉卜力风格 AI 创作平台',
  description: '使用 AI 技术创造属于你的吉卜力魔法世界',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={`${inter.className} min-h-screen bg-[#f0f7ff]`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}