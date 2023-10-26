import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Main from "@/components/Main"
import { COLORS } from "@/constants"

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${COLORS.primary.text[950]}`}>
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
