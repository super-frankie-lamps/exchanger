import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
