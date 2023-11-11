import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils';
import "slick-carousel/slick/slick.css";



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen font-sans antialiased bgDesign', inter.className)}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
