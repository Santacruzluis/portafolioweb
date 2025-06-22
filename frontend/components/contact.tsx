"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedText from "./animated-text"
import AnimatedSection from "./animated-section"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("¡Gracias por tu mensaje! Te responderé pronto.")
    setFormData({ name: "", email: "", message: "" })
  }

  const contactItems = [
    {
      icon: <Mail className="text-primary" size={20} />,
      text: "luisantacruzkids@gmail.com",
      href: "mailto:luisantacruzkids@gmail.com",
    },
    {
      icon: <Linkedin className="text-primary" size={20} />,
      text: "Luis Santacruz | LinkedIn",
      href: "https://linkedin.com/in/luis-santacruz",
    },
    {
      icon: <Github className="text-primary" size={20} />,
      text: "Santacruzluis (Luis Santacruz)",
      href: "https://github.com/Santacruzluis",
    },
  ]

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedText text="Contacto" className="text-3xl md:text-4xl font-bold text-center mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection delay={2}>
            <h3 className="text-2xl font-semibold mb-6">¡Hablemos!</h3>
            <p className="text-gray-300 mb-8">
              Si estás interesado en trabajar juntos o tienes alguna pregunta, no dudes en contactarme. Estaré encantado
              de escucharte.
            </p>

            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  {item.icon}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {item.text}
                  </a>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={4}>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Input placeholder="Tu nombre" name="name" value={formData.name} onChange={handleChange} required />
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                <Textarea
                  placeholder="Mensaje"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button type="submit" className="w-full">
                  Enviar
                </Button>
              </motion.div>
            </motion.form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
