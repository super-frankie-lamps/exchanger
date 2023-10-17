import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { getColorClass } from "@/utils";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${getColorClass('text', 'primary', '950')}`}>
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
