import Image from "next/image"
import AnimatedSection from "./animated-section"
import AnimatedText from "./animated-text"

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedText text="Sobre mí" className="text-3xl md:text-4xl font-bold text-center mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={2}>
            <p className="text-lg text-gray-300 mb-6">
              Hola, soy Luis Santacruz, un desarrollador web con una trayectoria de más de 5 años, enfocado en el
              desarrollo front-end y back-end. Mi experiencia abarca desde la creación de sitios web responsivos hasta
              el desarrollo de aplicaciones web complejas.
            </p>
            <p className="text-lg text-gray-300">
              Me apasiona mantenerme al día con las últimas tecnologías y tendencias del sector para ofrecer soluciones
              innovadoras y de alta calidad.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={4}>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-primary/30 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                <div className="absolute inset-4 bg-gray-800 rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/perfil.png?height=300&width=300"
                    alt="Luis Santacruz"
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
