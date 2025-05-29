import Header from './components/Header'
import Hero from './components/Hero'
import BrandLogos from './components/BrandLogos'
import Features from './components/Features'
import AppsIntegration from './components/AppsIntegration'
import UserProfiles from './components/UserProfiles'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="">
        <Hero />
      <BrandLogos />
      <Features />
      <AppsIntegration />
      <UserProfiles />
      <CTASection />
      <Footer />
      </div>
    </main>
  )
}
