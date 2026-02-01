import { motion } from "framer-motion";

/**
 * El stack tecnológico. 
 * He agrupado las herramientas por categorías.
 */
const Skills = ({ data }) => {
    return (
        <section id="skills" className="section-padding bg-bg-dark">
            <div className="max-w-5xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.4em] text-text-muted opacity-50">Stack Tecnológico</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
                    {data.skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group space-y-6 md:space-y-8"
                        >
                            <h3 className="text-[10px] font-bold uppercase tracking-widest text-text-muted border-b border-white/5 pb-3 md:pb-4 group-hover:text-text-main transition-colors group-hover:border-white/20">
                                {skillGroup.category}
                            </h3>

                            <div className="flex flex-col gap-2.5 md:gap-3">
                                {skillGroup.items.map((skill) => (
                                    <span key={skill} className="text-lg sm:text-xl md:text-2xl font-extralight text-text-muted hover:text-white transition-all hover:pl-2">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
