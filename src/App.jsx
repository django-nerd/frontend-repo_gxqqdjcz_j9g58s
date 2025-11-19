import Hero from './components/Hero'
import ServicesOverview from './components/ServicesOverview'
import ServiceCategories from './components/ServiceCategories'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-white">
          <a href="#" className="font-semibold tracking-tight">Violet Cube Studio</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#services" className="text-white/80 hover:text-white">Services</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <ServicesOverview />
        <ServiceCategories />
        <Contact />
      </main>

      <footer className="border-t border-white/10 text-white/60">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Violet Cube Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-white">Get a quote</a>
            <a href="#services" className="hover:text-white">Our work</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
