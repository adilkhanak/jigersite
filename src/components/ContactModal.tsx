import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            backgroundColor: 'rgba(15, 23, 42, 0.4)',
                            backdropFilter: 'blur(4px)',
                            zIndex: 999,
                        }}
                    />
                    <div style={{
                        position: 'fixed',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        pointerEvents: 'none',
                        padding: '1rem'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                            style={{
                                width: '100%',
                                maxWidth: '450px',
                                backgroundColor: 'var(--bg-card)',
                                borderRadius: '20px',
                                padding: '2.5rem',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                border: '1px solid var(--border-color)',
                                position: 'relative',
                                pointerEvents: 'auto'
                            }}
                        >
                            <button
                                onClick={onClose}
                                style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'var(--text-secondary)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '0.25rem',
                                    borderRadius: '50%',
                                    transition: 'background-color 0.2s',
                                }}
                                className="modal-close-btn"
                            >
                                <X size={20} />
                            </button>

                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Оставить заявку</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                    Оставьте свои контактные данные, и наш инженер свяжется с вами в течение 15 минут.
                                </p>
                            </div>

                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={(e) => { e.preventDefault(); onClose(); alert('Заявка успешно отправлена!'); }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Ваше имя</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Иван Иванов"
                                        style={{
                                            padding: '0.85rem 1rem',
                                            borderRadius: '8px',
                                            border: '1px solid var(--border-color)',
                                            backgroundColor: 'var(--bg-light)',
                                            color: 'var(--text-primary)',
                                            fontFamily: 'var(--font-main)',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            transition: 'border-color 0.2s'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-red)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Номер телефона</label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="+7 (999) 000-00-00"
                                        style={{
                                            padding: '0.85rem 1rem',
                                            borderRadius: '8px',
                                            border: '1px solid var(--border-color)',
                                            backgroundColor: 'var(--bg-light)',
                                            color: 'var(--text-primary)',
                                            fontFamily: 'var(--font-main)',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            transition: 'border-color 0.2s'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-red)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', padding: '1rem' }}>
                                    Отправить заявку
                                </button>
                            </form>

                            <style>{`
              .modal-close-btn:hover { background-color: var(--bg-darker); color: var(--text-primary) !important; }
            `}</style>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
