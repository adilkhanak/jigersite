import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

interface CTAProps {
    onOpenModal: () => void;
}

const CTA = ({ onOpenModal }: CTAProps) => {
    return (
        <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{
                        backgroundColor: 'var(--accent-red)',
                        borderRadius: '24px',
                        padding: '6rem 2rem',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px -12px rgba(211, 47, 47, 0.25)'
                    }}
                >
                    {/* Background Pattern */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 60%)',
                        pointerEvents: 'none',
                        zIndex: 0
                    }} />

                    <div style={{ position: 'relative', zIndex: 1, maxWidth: '650px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.5px' }}>
                            Ищете надежного партнера<br />в сфере пожарной безопасности?
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.15rem', marginBottom: '3.5rem', lineHeight: 1.6 }}>
                            Наша инжиниринговая команда готова помочь с проектированием систем, подбором оборудования и обеспечением потребностей вашего объекта.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                            <button onClick={onOpenModal} className="btn" style={{
                                padding: '1.2rem 3rem',
                                fontSize: '1.1rem',
                                gap: '0.75rem',
                                backgroundColor: '#fff',
                                color: 'var(--accent-red)',
                                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)'
                            }}>
                                <Mail size={20} />
                                Связаться с инженерами
                            </button>

                            <a href="tel:88005550198" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: '#fff',
                                fontSize: '1.05rem',
                                fontWeight: 600,
                                opacity: 0.9,
                                transition: 'opacity 0.2s ease'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}
                            >
                                <Phone size={18} />
                                Горячая линия B2B: 8 (800) 555-01-98
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
