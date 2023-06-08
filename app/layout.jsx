import './globals.css'
import { Quicksand } from 'next/font/google'

const quick = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'Baba Mandef',
  description: 'Imagination, beyond comprehension',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quick.className}>{children}</body>
    </html>
  )
}
