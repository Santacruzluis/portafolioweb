import Header from "../components/header"
import Hero from "../components/hero"
import AboutMe from "../components/about-me"
import Technologies from "../components/technologies"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"
import { Proyecto } from "@/types/proyecto"
import { Tecnologia } from "@/types/tecnologia"

async function getProjects(): Promise<Proyecto[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/proyectos`, { cache: 'no-store' });
    if (!res.ok) {
      console.error('Failed to fetch projects:', res.statusText);
      return [];
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

async function getTechnologies(): Promise<Tecnologia[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tecnologias`, { cache: 'no-store' });
    if (!res.ok) {
      console.error('Failed to fetch technologies:', res.statusText);
      return [];
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching technologies:', error);
    return [];
  }
}

export default async function Home() {
  const projects = await getProjects();
  const technologies = await getTechnologies();

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <AboutMe />
      <Technologies technologies={technologies} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </main>
  )
}
