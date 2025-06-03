import Header from './components/Header'
import Hero from './components/Hero'
import BrandLogos from './components/BrandLogos'
import Features from './components/Features'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="">
        <Hero />
        <BrandLogos />
        <Features />
        <Footer />
      </div>
    </main>
  )
}
