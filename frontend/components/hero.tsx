"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="inicio" className="hero-section min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl bg-background/80 backdrop-blur-md p-8 rounded-lg shadow-lg border border-border mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="flex flex-col items-center mb-8 w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/developer-desk.png"
              alt="Developer Desk Illustration"
              width={300}
              height={200}
              className="rounded-lg mb-6 w-full h-full object-cover object-center "
            />
            <h1 className="text-3xl md:text-4xl font-bold text-center">Hello i'm Luis Santacruz</h1>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg">
                <Link href="#proyectos">Ver Proyectos</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg">
                <Link href="#contacto">Contactar</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
