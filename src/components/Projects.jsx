import { motion } from "framer-motion";

/**
 * He limpiado el código para que sea más legible y he añadido efectos hover elegantes.
 */
const Projects = ({ data }) => {
    return (
        <section id="projects" className="section-padding bg-bg-dark">
            <div className="max-w-5xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.4em] text-text-muted mb-4 opacity-50">Selección de Proyectos</h2>
                </div>

                <div className="border-t border-white/5">
                    {data.projects.map((project, index) => (
                        <motion.a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group block py-10 md:py-14 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 transition-all hover:bg-white/[0.01]"
                        >
                            <div className="space-y-2 md:space-y-3">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extralight tracking-tight group-hover:pl-0 md:group-hover:pl-4 transition-all duration-500">
                                    {project.title}
                                </h3>
                                <p className="text-sm sm:text-base text-text-muted font-light max-w-lg leading-relaxed group-hover:pl-0 md:group-hover:pl-4 transition-all duration-500">
                                    {project.problem}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-[9px] md:text-[10px] uppercase tracking-widest text-text-muted border border-white/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full group-hover:border-white/30 transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
