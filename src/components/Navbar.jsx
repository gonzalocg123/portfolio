import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Navbar con barra de progreso de lectura. 
 * He ajustado la opacidad para que no distraiga pero sea funcional.
 */
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Sobre mí", href: "#about" },
        { name: "Proyectos", href: "#projects" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? "py-3 md:py-4 bg-bg-dark/80 backdrop-blur-md border-b border-white/5" : "py-6 md:py-10 bg-transparent"}`}>
            <motion.div
                className="absolute top-0 left-0 right-0 h-[1.5px] md:h-[2px] bg-white origin-left z-[51]"
                style={{ scaleX }}
            />
            <div className="max-w-5xl mx-auto flex justify-between items-center px-4 sm:px-6">
                <a href="#home" className="text-lg md:text-xl font-bold tracking-tighter uppercase group">
                    <span className="group-hover:opacity-50 transition-opacity">GC</span>
                </a>

                <div className="flex gap-4 sm:gap-6 md:gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] hover:text-white text-text-muted transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
