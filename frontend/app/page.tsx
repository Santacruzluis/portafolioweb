import Header from "../components/header"
import Hero from "../components/hero"
import AboutMe from "../components/about-me"
import Technologies from "../components/technologies"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
