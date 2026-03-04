import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Products = () => {
    const productCategories = [
        {
            id: "upright",
            title: "Спринклеры розеткой вверх",
            desc: "Разработаны для установки розеткой вверх. Применяются там, где элементы конструкции потолка или инженерные коммуникации могут препятствовать орошению.",
            spec: "К-фактор: 5.6 (80 metric)",
            bgPlaceholder: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
        },
        {
            id: "pendent",
            title: "Спринклеры розеткой вниз",
            desc: "Монтируются розеткой вниз от трубопровода. Идеально подходят для подвесных потолков в коммерческих и \"чистых\" промышленных помещениях.",
            spec: "К-фактор: 5.6 – 14.0",
            bgPlaceholder: "linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)"
        },
        {
            id: "sidewall",
            title: "Настенные спринклеры",
            desc: "Устанавливаются вдоль стен или балок, распределяя воду в заданном направлении. Оптимальны для узких коридоров и гостиничных номеров.",
            spec: "Горизонтальные и Вертикальные",
            bgPlaceholder: "linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)"
        },
        {
            id: "accessories",
            title: "Узлы и комплектующие",
            desc: "Полный спектр сертифицированных декоративных розеток, защитных решеток, ключей и узлов управления для надежной интеграции всей системы.",
            spec: "Одобрено UL / FM",
            bgPlaceholder: "linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%)"
        }
    ];

    return (
        <section id="products" className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
            <div className="container">

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{ height: '3px', width: '40px', backgroundColor: 'var(--accent-red)', borderRadius: '2px' }}></div>
                            <span style={{ color: 'var(--accent-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.9rem' }}>Каталог продукции</span>
                        </div>
                        <h2 className="section-title" style={{ marginBottom: 0 }}>Инженерные системы</h2>
                    </motion.div>

                    <motion.a
                        href="#documentation"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="btn btn-outline"
                        style={{ padding: '0.8rem 1.75rem', borderRadius: '6px' }}
                    >
                        Скачать полный каталог <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                    </motion.a>
                </div>

                <div className="grid grid-cols-2" style={{ gap: '2.5rem' }}>
                    {productCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 15px -3px rgba(0, 0, 0, 0.05)"
                            }}
                            style={{
                                backgroundColor: 'var(--bg-card)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '16px', // softer corners
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'border-color 0.3s ease',
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(211, 47, 47, 0.3)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor = 'var(--border-color)';
                            }}
                        >
                            {/* Image Area */}
                            <div style={{
                                height: '260px',
                                background: '#fff',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottom: '1px solid var(--border-color)',
                                overflow: 'hidden',
                                padding: '2rem'
                            }}>
                                <img
                                    src="/product.png"
                                    alt={cat.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.5s ease' }}
                                    className="product-img"
                                />
                            </div>

                            <style>{`
                div:hover > .product-img { transform: scale(1.05); }
              `}</style>

                            {/* Content Area */}
                            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <div style={{
                                    color: 'var(--accent-red)',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.85rem',
                                    marginBottom: '1rem',
                                    fontWeight: 600,
                                    backgroundColor: 'var(--accent-red-light)',
                                    display: 'inline-block',
                                    alignSelf: 'flex-start',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '4px'
                                }}>
                                    {cat.spec}
                                </div>
                                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{cat.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', flexGrow: 1, lineHeight: 1.6, fontSize: '1.05rem' }}>
                                    {cat.desc}
                                </p>
                                <div style={{ marginTop: 'auto' }}>
                                    <a href={`/catalog/${cat.id}`} className="btn" style={{
                                        padding: '0',
                                        color: 'var(--text-primary)',
                                        fontWeight: 600,
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        background: 'transparent',
                                        boxShadow: 'none',
                                        borderBottom: '2px solid transparent',
                                        borderRadius: 0,
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
                                        Перейти к характеристикам <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Products;
