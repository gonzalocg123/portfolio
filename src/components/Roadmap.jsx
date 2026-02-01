import { motion } from "framer-motion";

/**
 * Mi roadmap personal y profesional. 
 * He ajustado los márgenes para que la lectura sea más fluida.
 */
const Roadmap = ({ data }) => {
    return (
        <section id="roadmap" className="section-padding bg-bg-dark border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.4em] text-text-muted opacity-50">Línea de Tiempo</h2>
                </div>

                <div className="space-y-0">
                    {data.roadmap.map((item, index) => (
                        <motion.div
                            key={item.year}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group py-10 md:py-16 border-b border-white/5 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-8 hover:bg-white/[0.01] transition-colors"
                        >
                            <span className="text-lg sm:text-xl md:text-2xl font-extralight tracking-tighter text-text-muted group-hover:text-text-main transition-colors">{item.year}</span>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-text-muted leading-relaxed group-hover:text-text-main transition-colors">
                                {item.goal}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
