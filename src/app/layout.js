import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/header'
import { Providers } from './providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>

        <Providers>

          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
