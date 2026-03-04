import { motion } from 'framer-motion';
import { Award, TrendingUp, CheckCircle, FileText } from 'lucide-react';

const Advantages = () => {
    const advantages = [
        {
            title: "Сертифицированное качество",
            desc: "Наша продукция имеет строгие сертификаты UL, FM и CE, что гарантирует соблюдение мировых норм пожарной безопасности.",
            icon: <Award size={32} color="var(--accent-red)" />
        },
        {
            title: "Высокая производительность",
            desc: "Системы спроектированы для обеспечения оптимального времени отклика и площади орошения в экстремальных промышленных условиях.",
            icon: <TrendingUp size={32} color="var(--accent-red)" />
        },
        {
            title: "Строгий производственный контроль",
            desc: "Каждый ороситель и клапан проходит 100% гидравлическое испытание перед отгрузкой для гарантии отсутствия брака.",
            icon: <CheckCircle size={32} color="var(--accent-red)" />
        },
        {
            title: "Техническая поддержка и документация",
            desc: "Мы предоставляем полные технические паспорта, BIM-модели и инженерную поддержку 24/7 для сложных объектов.",
            icon: <FileText size={32} color="var(--accent-red)" />
        }
    ];

    return (
        <section id="advantages" className="section-padding" style={{ backgroundColor: 'var(--bg-darker)' }}>
            <div className="container">

                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ height: '3px', width: '30px', backgroundColor: 'var(--accent-red)', borderRadius: '2px' }}></div>
                            <span style={{ color: 'var(--accent-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.9rem' }}>Почему выбирают Jiger</span>
                            <div style={{ height: '3px', width: '30px', backgroundColor: 'var(--accent-red)', borderRadius: '2px' }}></div>
                        </div>
                        <h2 className="section-title">Стандарт безотказности</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto', fontSize: '1.15rem' }}>
                            Мы не идем на компромиссы в вопросах безопасности жизней. Вся наша операционная модель выстроена для поддержки критически важной инфраструктуры.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-4" style={{ gap: '2rem' }}>
                    {advantages.map((adv, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)"
                            }}
                            style={{
                                backgroundColor: 'var(--bg-card)',
                                padding: '3rem 2rem',
                                borderRadius: '16px',
                                border: '1px solid var(--border-color)',
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '4px',
                                backgroundColor: 'var(--accent-red)',
                                opacity: 0,
                                transition: 'opacity 0.3s ease'
                            }} className="adv-hover-bar" />

                            <div style={{
                                width: '70px',
                                height: '70px',
                                backgroundColor: 'var(--accent-red-light)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '16px',
                                flexShrink: 0,
                                transition: 'transform 0.3s ease'
                            }} className="adv-icon-wrap">
                                {adv.icon}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 700 }}>{adv.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                                    {adv.desc}
                                </p>
                            </div>

                            <style>{`
                div:hover > .adv-hover-bar { opacity: 1 !important; }
                div:hover > .adv-icon-wrap { transform: scale(1.1); }
              `}</style>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Advantages;
