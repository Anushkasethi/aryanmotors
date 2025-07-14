import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Home from "./pages/Home"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
