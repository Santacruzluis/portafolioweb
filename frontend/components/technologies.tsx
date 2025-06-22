import AnimatedText from "./animated-text"
import AnimatedTechIcon from "./animated-tech-icon"

export default function Technologies() {
  const technologies = [
    { name: "HTML", image: "/images/html-logo.png" },
    { name: "CSS", image: "/images/css-logo.png" },
    { name: "JavaScript", image: "/images/javascript-logo.png" },
    { name: "React", image: "/images/react-logo.png" },
    { name: "Python", image: "/images/python-logo.png" },
    { name: "Django", image: "/images/django-logo.png" },
    { name: "MongoDB", image: "/images/mongodb-logo.png" },
    { name: "PostgreSQL", image: "/images/postgresql-logo.png" },
    { name: "Tailwind CSS", image: "/images/tailwind-logo.png" },
    { name: "Next.js", image: "/images/nextjs-logo.png" },
    { name: "TypeScript", image: "/images/typescript-logo.png" },
    { name: "NestJS", image: "/images/nestjs-logo.png" },
    { name: "Git", image: "/images/git-logo.png" },
    { name: "GitHub", image: "/images/github-logo.png" },
    { name: "Flutter", image: "/images/flutter-logo.png" },
    { name: "Dart", image: "/images/dart-logo.png" },
    { name: "Neo4j", image: "/images/neo4j-logo.png" },
    { name: "Flask", image: "/images/flask-logo.png" },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedText text="Tecnologías" className="text-3xl md:text-4xl font-bold text-center mb-16" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <AnimatedTechIcon key={tech.name} name={tech.name} image={tech.image} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
