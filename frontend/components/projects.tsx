import AnimatedText from "./animated-text"
import AnimatedProjectCard from "./animated-project-card"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Juego de Damas con IA",
      technologies: "Python, Pygame, Q-learning, Minimax",
      description:
        "Implementación de un juego de damas 4x4 con dos agentes de IA: uno basado en Q-learning y otro en Minimax con poda alfa-beta.",
      image: "/images/juego_damas.jpg?height=200&width=200",
      githubUrl: "https://github.com/Santacruzluis/Juego_de_damas.git"
    },
    {
      id: 2,
      title: "Mini Proyecto IA",
      technologies: "Python, IA",
      description:
        "Proyecto de inteligencia artificial que demuestra diferentes técnicas y algoritmos de IA.",
      image: "/images/ia.jpg?height=200&width=200",
      githubUrl: "https://github.com/Santacruzluis/MiniProyecto3_IA.git"
    },
    {
      id: 3,
      title: "Aplicación Flutter",
      technologies: "Flutter, Dart",
      description:
        "Aplicación móvil desarrollada con Flutter que implementa diversas funcionalidades y características modernas.",
      image: "/images/Flutter.png?height=200&width=200",
      githubUrl: "https://github.com/Acosta-Saul/flutter-app.git"
    },
    {
      id: 4,
      title: "Proyecto Neo4j",
      technologies: "Neo4j, Graph Database",
      description:
        "Proyecto que implementa una base de datos de grafos utilizando Neo4j para el manejo eficiente de relaciones complejas.",
      image: "/images/neo4j.jpg?height=200&width=150",
      githubUrl: "https://github.com/Acosta-Saul/neo4j-project.git"
    },
  ]

  return (
    <section id="proyectos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedText text="Proyectos" className="text-3xl md:text-4xl font-bold text-center mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              image={project.image}
              index={index}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
