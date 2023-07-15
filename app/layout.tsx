import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Urbanist } from 'next/font/google'

import Footer from '@/components/footer'
import NavBar from '@/components/navbar'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Bookista',
  description: 'Bookista - The place for all curiosity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>  
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}