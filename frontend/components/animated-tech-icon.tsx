"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AnimatedTechIconProps {
  name: string
  image: string
  index: number
}

export default function AnimatedTechIcon({ name, image, index }: AnimatedTechIconProps) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
    >
      <motion.div
        className="bg-gray-800 p-4 rounded-full shadow-md mb-4 tech-icon-container"
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, -5, 0],
          transition: { duration: 0.5 },
        }}
      >
        <Image src={image || "/placeholder.svg"} alt={name} width={80} height={80} className="tech-icon rounded-full" />
      </motion.div>
      <motion.span
        className="text-lg font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
      >
        {name}
      </motion.span>
    </motion.div>
  )
}
