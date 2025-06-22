'use client'

import { FC } from "react"
import AnimatedSection from "./animated-section"
import AnimatedTechIcon from "./animated-tech-icon"
import { Tecnologia } from "../types/tecnologia"
import AnimatedText from "./animated-text"

interface TechnologiesProps {
  technologies: Tecnologia[]
}

const Technologies: FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedText text="Tecnologías" className="text-3xl md:text-4xl font-bold text-center mb-16" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <AnimatedTechIcon key={tech.name} name={tech.name} image={tech.imagen} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
