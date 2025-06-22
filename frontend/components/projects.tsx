'use client'

import { FC } from "react"
import AnimatedText from "./animated-text"
import AnimatedProjectCard from "./animated-project-card"
import { Proyecto } from "../types/proyecto"
import { Tecnologia } from "../types/tecnologia"

interface ProjectsProps {
  projects: Proyecto[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="proyectos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedText text="Proyectos" className="text-3xl md:text-4xl font-bold text-center mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedProjectCard
              key={project.id}
              id={project.id}
              title={project.name}
              technologies={project.tecnologias.map((t: Tecnologia) => t.name).join(', ')}
              description={project.descripcion}
              image={project.tecnologias.length > 0 ? project.tecnologias[0].imagen : '/images/placeholder.png'}
              index={index}
              githubUrl={project.url_repositorio}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
