"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface AnimatedProjectCardProps {
  id: number
  title: string
  technologies: string
  description: string
  image: string
  index: number
  githubUrl: string
}

export default function AnimatedProjectCard({
  id,
  title,
  technologies,
  description,
  image,
  index,
  githubUrl,
}: AnimatedProjectCardProps) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <div className="relative h-60 overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="h-full w-full"
        >
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </motion.div>
      </div>
      <div className="p-6">
        <motion.h3
          className="text-xl font-bold mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm text-gray-400 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.4 }}
        >
          <strong>Tecnologías:</strong> {technologies}
        </motion.p>
        <motion.p
          className="text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.5 }}
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <Button asChild variant="outline" size="sm">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Ver <ExternalLink size={16} />
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
