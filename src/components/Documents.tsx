import { motion } from 'framer-motion';
import { Download, FileText, ArrowRight } from 'lucide-react';

const Documents = () => {
    const docs = [
        { name: "Полный каталог продукции Jiger 2026", type: "PDF", size: "14.2 MB" },
        { name: "Технический паспорт: Спринклеры розеткой вверх", type: "PDF", size: "2.1 MB" },
        { name: "Технический паспорт: Спринклеры розеткой вниз", type: "PDF", size: "2.4 MB" },
        { name: "Руководство по монтажу и эксплуатации", type: "PDF", size: "8.5 MB" },
        { name: "Сертификаты соответствия (UL/FM/ПБ)", type: "ZIP", size: "12.0 MB" },
        { name: "Библиотека BIM/Revit моделей", type: "RVT", size: "45.8 MB" }
    ];

    return (
        <section id="documentation" className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
            <div className="container" style={{ maxWidth: '950px' }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <span style={{ color: 'var(--accent-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.9rem' }}>Инженерные ресурсы</span>
                    </div>
                    <h2 className="section-title">Центр документации</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto', fontSize: '1.15rem' }}>
                        Получите доступ ко всем техническим спецификациям, CAD/BIM-моделям и сертификационной документации, необходимой для проектирования.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    style={{
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 15px 35px -15px rgba(0, 0, 0, 0.05)',
                    }}
                >
                    {docs.map((doc, idx) => (
                        <a
                            key={idx}
                            href="#"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '1.75rem 2.5rem',
                                borderBottom: idx !== docs.length - 1 ? '1px solid var(--border-color)' : 'none',
                                transition: 'all 0.3s ease',
                            }}
                            className="doc-row"
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    backgroundColor: 'var(--accent-red-light)',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-red)',
                                    transition: 'transform 0.3s ease'
                                }} className="doc-icon-wrap">
                                    <FileText size={24} strokeWidth={2} />
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', margin: 0, fontWeight: 600, transition: 'color 0.3s ease' }} className="doc-title">{doc.name}</h4>
                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.35rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{doc.type}</span>
                                        <span>{doc.size}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="doc-download-btn" style={{
                                color: 'var(--text-primary)',
                                backgroundColor: 'var(--bg-darker)',
                                padding: '0.6rem 1rem',
                                borderRadius: '8px',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                border: '1px solid var(--border-color)'
                            }}>
                                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Скачать</span>
                                <Download size={18} />
                            </div>

                            <style>{`
                .doc-row:hover { background-color: var(--accent-red-light); }
                .doc-row:hover .doc-title { color: var(--accent-red); }
                .doc-row:hover .doc-icon-wrap { transform: scale(1.1); background-color: var(--accent-red); color: white !important; }
                .doc-row:hover .doc-download-btn { background-color: var(--accent-red); color: white !important; border-color: var(--accent-red); }
              `}</style>
                        </a>
                    ))}
                </motion.div>

                <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                    <a href="#" style={{
                        color: 'var(--text-primary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        borderBottom: '2px solid transparent',
                        paddingBottom: '2px',
                        transition: 'border-color 0.2s ease, color 0.2s ease'
                    }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.color = 'var(--accent-red)';
                            e.currentTarget.style.borderColor = 'var(--accent-red)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.color = 'var(--text-primary)';
                            e.currentTarget.style.borderColor = 'transparent';
                        }}
                    >
                        Смотреть все документы <ArrowRight size={18} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Documents;
