import { Inter } from 'next/font/google'

import SecondaryHeader from '../components/SecondaryHeader'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "LendLogic",
  description: "Created with passion for our customers",
};

export default function QuizLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SecondaryHeader />
        {children}
        <Footer />
        </body>
    </html>
  )
}