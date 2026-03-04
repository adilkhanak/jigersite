import { motion } from 'framer-motion';
import { Globe, Award, ShieldCheck, Cog } from 'lucide-react';

const About = () => {
    const stats = [
        { value: '25+', label: 'Лет опыта в отрасли', icon: <Award size={28} color="var(--accent-red)" /> },
        { value: '40+', label: 'Стран присутствия', icon: <Globe size={28} color="var(--accent-red)" /> },
        { value: '150+', label: 'Моделей продукции', icon: <Cog size={28} color="var(--accent-red)" /> },
        { value: '100%', label: 'Строгий контроль качества', icon: <ShieldCheck size={28} color="var(--accent-red)" /> },
    ];

    const features = [
        "Международные сертификаты (UL / FM / CE)",
        "Глобальная дистрибьюторская сеть",
        "Собственное инжиниринговое производство",
        "Техническая поддержка на всех этапах"
    ];

    return (
        <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-darker)' }}>
            <div className="container">
                <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '5rem' }}>

                    {/* Left Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ height: '3px', width: '40px', backgroundColor: 'var(--accent-red)', borderRadius: '2px' }}></div>
                            <span style={{ color: 'var(--accent-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.9rem' }}>Надежность и доверие</span>
                        </div>
                        <h2 className="section-title">Спроектировано для защиты.<br />Создано на века.</h2>
                        <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
                            Компания работает в сегменте инженерных систем безопасности, ориентирована на надежность, внедрение международных стандартов и долгосрочные контракты. Мы поставляем решения для подрядчиков, девелоперов и инженерных компаний, где нет права на ошибку.
                        </p>

                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            {features.map((feature, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                                    style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}
                                >
                                    <div style={{ marginTop: '3px', color: 'var(--accent-red)', backgroundColor: 'var(--accent-red-light)', padding: '6px', borderRadius: '50%' }}>
                                        <ShieldCheck size={18} strokeWidth={2.5} />
                                    </div>
                                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Stats Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="grid grid-cols-2"
                        style={{ gap: '1.5rem' }}
                    >
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                style={{
                                    backgroundColor: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '16px',
                                    padding: '2.5rem 1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                    cursor: 'default'
                                }}
                            >
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    backgroundColor: 'var(--accent-red-light)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {stat.icon}
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1 }}>{stat.value}</div>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.4 }}>{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
