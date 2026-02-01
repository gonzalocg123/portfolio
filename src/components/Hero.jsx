import { motion } from "framer-motion";

/**
 * Sección Hero
 * He ajustado los tamaños de fuente para que se vea más moderno en pantallas grandes.
 * Optimizado para móviles con tamaños de texto más pequeños y mejor espaciado.
 */
const Hero = ({ data }) => {
    return (
        <section id="home" className="min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-24 md:pt-20 bg-bg-dark">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full max-w-5xl"
            >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-light tracking-tighter mb-6 md:mb-8 leading-[0.9]">
                    {data.name}
                </h1>

                <p className="max-w-2xl text-lg leading-snug sm:text-xl md:text-2xl lg:text-3xl text-text-muted md:leading-tight font-extralight">
                    {data.hero.description}
                </p>

                <div className="flex flex-col gap-6 mt-12 md:mt-16 sm:flex-row sm:gap-10">
                    <a href="#projects" className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase group sm:text-sm">
                        <span className="pb-1 transition-all border-b border-white/20 group-hover:border-white">Mis Proyectos</span>
                    </a>
                    <a href="#contact" className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase group sm:text-sm">
                        <span className="pb-1 transition-all border-b border-white/20 group-hover:border-white">Contacto</span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
