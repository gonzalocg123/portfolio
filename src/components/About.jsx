import { motion } from "framer-motion";

/**
 * La sección sobre mí. 
 * He optimizado la cuadrícula para que sea más responsiva.
 * También he mejorado la legibilidad del texto con mejores tamaños y espaciados.
 */
const About = ({ data }) => {
  const { intro, principles, closing } = data.about.content;

  return (
    <section id="about" className="section-padding bg-bg-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="space-y-12 md:space-y-20"
        >
          {/* Heading */}
          <h2 className="text-xs font-semibold uppercase tracking-[0.4em] text-text-muted opacity-50">
            Trayectoria
          </h2>

          {/* Intro */}
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-text-main font-light leading-[1.15] md:leading-[1.1] tracking-tight max-w-4xl">
            {intro}
          </p>

          {/* Principles */}
          <ul className="max-w-3xl space-y-4 md:space-y-6">
            {principles.map((item, index) => (
              <li
                key={index}
                className="flex gap-3 text-base font-light leading-relaxed sm:text-lg md:text-xl lg:text-2xl text-text-main md:gap-4"
              >
                <span className="flex-shrink-0 opacity-30">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Closing */}
          <p className="max-w-3xl text-lg font-light leading-relaxed sm:text-xl md:text-2xl lg:text-3xl text-text-main">
            {closing}
          </p>

          {/* Info grid */}
          <div className="grid gap-8 pt-12 border-t md:grid-cols-2 md:gap-12 md:pt-20 border-white/5">
            <div className="space-y-3 group md:space-y-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-text-muted opacity-50 group-hover:opacity-100 transition-opacity">
                Residencia
              </span>
              <p className="text-xl font-light md:text-2xl">Jaén, España</p>
            </div>

            <div className="space-y-3 group md:space-y-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-text-muted opacity-50 group-hover:opacity-100 transition-opacity">
                Especialización
              </span>
              <p className="text-xl font-light md:text-2xl">
                Back-end · Sistemas · Arquitecturas orientadas a servidor
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
