import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
    onOpenModal: () => void;
}

const Header = ({ onOpenModal }: HeaderProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Updated array of navigation links serving as actual page routes (or anchor jumps for the landing)
    const navLinks = [
        { name: 'Каталог', href: '#products' },
        { name: 'О компании', href: '#about' },
        { name: 'Преимущества', href: '#advantages' },
        { name: 'Документация', href: '#documentation' },
        { name: 'Проекты', href: '#global' }, // Global reach repurposed as projects/geography
    ];

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
                padding: isScrolled ? '1rem 0' : '1.5rem 0',
                boxShadow: isScrolled ? '0 4px 20px -10px rgba(0,0,0,0.05)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo block */}
                <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: 'var(--accent-red)',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        color: '#fff',
                        fontSize: '1.2rem',
                        boxShadow: '0 4px 10px rgba(211, 47, 47, 0.3)'
                    }}>
                        V
                    </div>
                    <span style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '0.5px', color: 'var(--text-primary)' }}>
                        JIGER<span style={{ color: 'var(--accent-red)' }}>.</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav style={{ display: 'none' }} className="nav-desktop">
                    <ul style={{ display: 'flex', listStyle: 'none', gap: '2.5rem', margin: 0, padding: 0 }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    style={{
                                        fontSize: '0.95rem',
                                        fontWeight: 600,
                                        color: 'var(--text-secondary)',
                                        position: 'relative',
                                        transition: 'color 0.2s ease',
                                        padding: '0.5rem 0'
                                    }}
                                    className="nav-link"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                    {/* Subtle underline hover effect */}
                                    <span className="nav-link-underline" style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '0%',
                                        height: '2px',
                                        backgroundColor: 'var(--accent-red)',
                                        transition: 'width 0.3s ease'
                                    }}></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop CTA */}
                <div style={{ display: 'none' }} className="nav-desktop">
                    <button onClick={onOpenModal} className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.95rem', boxShadow: '0 4px 10px rgba(211,47,47,0.2)' }}>
                        Связаться с нами
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle"
                    style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex' }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: 'var(--bg-card)',
                            borderBottom: '1px solid var(--border-color)',
                            overflow: 'hidden',
                            boxShadow: '0 10px 20px -10px rgba(0,0,0,0.1)'
                        }}
                    >
                        <div className="container" style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                    href={link.href}
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        color: 'var(--text-primary)',
                                        padding: '0.75rem 0',
                                        borderBottom: '1px solid var(--border-color)'
                                    }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="btn btn-primary"
                                style={{ marginTop: '1rem', width: '100%', padding: '1rem' }}
                                onClick={() => { setIsMobileMenuOpen(false); onOpenModal(); }}
                            >
                                Связаться с нами
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (min-width: 1024px) {
          .nav-desktop { display: flex !important; align-items: center; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link:hover { color: var(--accent-red) !important; }
        .nav-link:hover .nav-link-underline { width: 100% !important; }
      `}</style>
        </header>
    );
};

export default Header;
