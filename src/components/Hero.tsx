import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="hero"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '100px', // Offset for fixed header
                paddingBottom: '60px',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-light)'
            }}
        >
            {/* Light Theme Background SVG Grid */}
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
                opacity: 0.6
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0) 0%, rgba(248,250,252,1) 100%)',
                    zIndex: 1
                }} />
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0 }}>
                    <defs>
                        <pattern id="lightGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(211, 47, 47, 0.08)" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#lightGrid)" />
                </svg>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>

                    {/* Left Column: Text Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
                                fontWeight: 800,
                                lineHeight: 1.15,
                                marginBottom: '1.5rem',
                                letterSpacing: '-1px'
                            }}>
                                Передовые системы<br />
                                <span className="text-gradient">пожаротушения</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                        >
                            <p style={{
                                fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
                                color: 'var(--text-secondary)',
                                maxWidth: '550px',
                                marginBottom: '2.5rem',
                                lineHeight: 1.6,
                                fontWeight: 400
                            }}>
                                Сертифицированное оборудование для промышленных, коммерческих и инфраструктурных объектов. Разработано по строжайшим международным стандартам.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <a href="#products" className="btn btn-primary" style={{ gap: '0.5rem', padding: '1rem 2rem', fontSize: '1rem' }}>
                                    Смотреть продукцию
                                    <ChevronRight size={18} />
                                </a>
                                <a href="#documentation" className="btn btn-outline" style={{ gap: '0.5rem', padding: '1rem 2rem', fontSize: '1rem', backgroundColor: 'transparent' }}>
                                    <Download size={18} />
                                    Скачать каталог
                                </a>
                            </div>
                        </motion.div>

                        {/* Stats quick row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            style={{
                                display: 'flex',
                                gap: '3rem',
                                marginTop: '4rem',
                                borderTop: '1px solid var(--border-color)',
                                paddingTop: '2rem'
                            }}
                        >
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>UL & FM</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Сертифицировано</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>20+</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Лет на рынке</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>100%</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Контроль давления</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Constrained Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: 'auto',
                            aspectRatio: '1 / 1', // Keeps it perfectly square or constrained
                            maxHeight: '600px',
                            borderRadius: '24px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                            overflow: 'hidden',
                            border: '8px solid white',
                            backgroundColor: '#fff'
                        }}
                    >
                        <img
                            src="/hero.png"
                            alt="Спринклерная система пожаротушения"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
