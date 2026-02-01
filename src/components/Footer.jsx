/**
 * Footer sencillo para cerrar la página.
 * He usado el objeto Date para que el año se actualice solo, una pequeña automatización útil.
 */
const Footer = ({ data }) => {
    return (
        <footer className="py-12 md:py-20 border-t border-white/5 bg-bg-dark">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.3em] md:tracking-[0.4em] text-text-muted opacity-50 text-center md:text-left">
                    © {new Date().getFullYear()} — {data.name}
                </p>

                <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.3em] md:tracking-[0.4em] text-text-muted opacity-50 text-center md:text-left">
                    Construido con React & Tailwind
                </p>
            </div>
        </footer>
    );
};

export default Footer;
