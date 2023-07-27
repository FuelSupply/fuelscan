import Header from '@/components/header/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: "/logo.png",
  },
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
        <div className='max-w-full'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
