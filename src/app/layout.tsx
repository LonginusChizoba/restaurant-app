import type { Metadata } from 'next'
import './globals.css'
import { Josefin_Sans } from 'next/font/google'

const josefin_sans = Josefin_Sans({ subsets: ['latin'] })

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
      <head>
      <link rel="stylesheet"href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"></link>
      </head>
      <body className={josefin_sans.className}>{children}</body>
    </html>
  )
}