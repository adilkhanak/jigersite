const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--bg-darker)',
            borderTop: '1px solid var(--border-color)',
            padding: '5rem 0 2rem 0'
        }}>
            <div className="container">
                <div className="grid grid-cols-4" style={{ gap: '3rem', marginBottom: '4rem' }}>
                    {/* Brand Col */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                backgroundColor: 'var(--accent-red)',
                                borderRadius: '6px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                color: '#fff',
                                fontSize: '1.1rem'
                            }}>
                                J
                            </div>
                            <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.5px', color: 'var(--text-primary)' }}>
                                JIGER<span style={{ color: 'var(--accent-red)' }}>.</span>
                            </span>
                        </a>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '280px', lineHeight: 1.6 }}>
                            Надежные системы пожаротушения для современной инфраструктуры. Сертифицированное промышленное качество.
                        </p>
                    </div>

                    {/* Links Col 1 - Навигация */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 700 }}>Компания</h4>
                        <a href="#about" className="footer-link">О нас</a>
                        <a href="/certificates" className="footer-link">Сертификаты и лицензии</a>
                        <a href="#global" className="footer-link">Реализованные проекты</a>
                        <a href="/news" className="footer-link">Новости и статьи</a>
                        <a href="/career" className="footer-link">Карьера</a>
                    </div>

                    {/* Links Col 2 - Каталог */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 700 }}>Продукция</h4>
                        <a href="#products" className="footer-link">Спринклеры розеткой вверх</a>
                        <a href="#products" className="footer-link">Спринклеры розеткой вниз</a>
                        <a href="#products" className="footer-link">Настенные спринклеры</a>
                        <a href="/catalog/valves" className="footer-link">Узлы управления (КСК)</a>
                        <a href="/catalog/accessories" className="footer-link">Аксессуары и ЗИП</a>
                    </div>

                    {/* Contact Col */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 700 }}>Контакты</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                            Индустриальный парк "Авангард"<br />
                            ул. Машиностроителей, 12<br />
                            Москва, Россия
                        </p>
                        <a href="mailto:info@jiger-fire.ru" style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 600 }}>
                            info@jiger-fire.ru
                        </a>
                        <p style={{ color: 'var(--accent-red)', fontSize: '1.1rem', fontWeight: 700 }}>
                            8 (800) 555-01-98
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1.5rem'
                }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        &copy; {new Date().getFullYear()} Jiger Fire Systems. Все права защищены.
                    </p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="/privacy" className="footer-link" style={{ fontSize: '0.85rem' }}>Политика конфиденциальности</a>
                        <a href="/terms" className="footer-link" style={{ fontSize: '0.85rem' }}>Пользовательское соглашение</a>
                    </div>
                </div>
            </div>

            <style>{`
        .footer-link {
          color: var(--text-secondary) !important;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }
        .footer-link:hover {
          color: var(--accent-red) !important;
          transform: translateX(3px);
        }
      `}</style>
        </footer>
    );
};

export default Footer;
