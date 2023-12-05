import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { main, consulta, cargarImg, cargarPkm } from './script'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokemon Oracle',
  description: 'Search and create your own Pokemon!',
}

 
cargarPkm().catch(e=>{
  console.error(e.mesage)
})  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
