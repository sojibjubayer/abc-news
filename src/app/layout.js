import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import Container from '@mui/material/Container'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ABC NEWS',
  description: 'Latest News BD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Container sx={{minHeight:'100vh'}}>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  )
}
