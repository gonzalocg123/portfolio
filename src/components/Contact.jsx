import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Sección de contacto. 
 * He añadido una función para copiar el email al portapapeles.
 */
const Contact = ({ data }) => {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(data.contact.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="section-padding bg-bg-dark border-t border-white/5">
            <div className="max-w-5xl mx-auto py-12 md:py-20">
                <div className="mb-8 md:mb-12">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-text-muted mb-4 block opacity-50">Contacto</span>
                </div>

                <div className="space-y-5">
                    <div className="relative group inline-block">
                        <button
                            onClick={copyEmail}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light hover:opacity-70 transition-all text-left break-all tracking-tighter leading-none"
                        >
                            {data.contact.email}
                        </button>
                        {copied && (
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute -top-6 md:-top-8 left-0 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-text-main"
                            >
                                ¡Email copiado!
                            </motion.span>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-8 md:gap-12 pt-8 md:pt-10 border-t border-white/5">
                        <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-opacity flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span> GitHub
                        </a>
                        <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-opacity flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
