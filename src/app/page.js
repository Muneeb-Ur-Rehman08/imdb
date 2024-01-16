import Image from 'next/image'
import { Header } from './components/header'
import { Providers } from './providers'
export default function Home() {
  return (
    <Providers>

      <Header />
    </Providers>
  )
}
