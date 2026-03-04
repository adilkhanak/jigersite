import { motion } from 'framer-motion';
import { MapPin, Globe, Factory, Building2 } from 'lucide-react';

const Geography = () => {
    return (
        <section id="global" className="section-padding" style={{ backgroundColor: 'var(--bg-darker)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ height: '3px', width: '40px', backgroundColor: 'var(--accent-red)', borderRadius: '2px' }}></div>
                            <span style={{ color: 'var(--accent-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.9rem' }}>Глобальное присутствие</span>
                        </div>
                        <h2 className="section-title" style={{ marginBottom: 0 }}>Мировая дистрибуция</h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: 0, fontSize: '1.1rem', lineHeight: 1.6 }}
                    >
                        Системы Jiger защищают одни из самых сложных и ответственных инфраструктурных объектов по всему миру. Наша логистическая сеть обеспечивает своевременные поставки.
                    </motion.p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            region: "Россия и СНГ",
                            desc: "Основной логистический хаб со складами в крупнейших городах для быстрой отгрузки.",
                            icon: <MapPin size={24} color="var(--accent-red)" />
                        },
                        {
                            region: "Европа",
                            desc: "Сертифицированные поставки оборудования, соответствующего строгим международным стандартам.",
                            icon: <Globe size={24} color="var(--accent-red)" />
                        },
                        {
                            region: "Ближний Восток",
                            desc: "Специализированные решения для надежной защиты нефтегазовых и инфраструктурных объектов.",
                            icon: <Factory size={24} color="var(--accent-red)" />
                        },
                        {
                            region: "Азия и Океания",
                            desc: "Активно растущая дилерская сеть и масштабные решения для многоуровневых региональных проектов.",
                            icon: <Building2 size={24} color="var(--accent-red)" />
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            style={{
                                backgroundColor: 'var(--bg-card)',
                                padding: '2.5rem',
                                borderRadius: '16px',
                                border: '1px solid var(--border-color)',
                                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.25rem',
                                transition: 'transform 0.3s ease, border-color 0.3s ease'
                            }}
                            className="geography-card"
                            whileHover={{ y: -5, borderColor: 'var(--accent-red)' }}
                        >
                            <div style={{
                                width: '56px', height: '56px',
                                borderRadius: '14px',
                                backgroundColor: 'rgba(211, 47, 47, 0.08)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                                {item.region}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Geography;
