import Header from '@/components/header/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fuel Blockchain Explorer',
  description: 'Next Generation Blockchain Explorer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container max-w-screen-2xl'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
