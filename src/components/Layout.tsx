import type { ReactNode } from 'react'
import { Toaster } from 'sonner'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#112240',
            border: '1px solid #D4AF37',
            color: '#F5F5F7',
          },
        }}
      />
    </div>
  )
}
