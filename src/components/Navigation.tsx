'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, User, Brain, Wallet, Phone, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'Образование', href: '#education', icon: GraduationCap },
    { name: 'С чем работаю', href: '#workareas', icon: Brain },
    { name: 'Стоимость', href: '#pricing', icon: Wallet },
    { name: 'Контакты', href: '#contacts', icon: Phone },
  ];

  // Отслеживание скролла для изменения фона навигации
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Определяем активную секцию при скролле
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(`#${currentSection}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Инициализация при загрузке

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(href);
    
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Основная навигация */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900/90 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-gray-800/30 py-3' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Логотип / Имя */}
            <motion.a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('');
              }}
              className="group flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/10 rounded-full blur group-hover:blur-md transition-all duration-300"></div>
                <div className="relative p-2 rounded-full bg-gradient-to-br from-secondary/20 to-tertiary/20 border border-secondary/30">
                  <User className="w-5 h-5 text-secondary" />
                </div>
              </div>
              <span className="text-lg font-heading text-gray-light hidden md:block">
                Александра
              </span>
            </motion.a>

            {/* Десктопное меню */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href;
                
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`
                      relative group flex items-center gap-2 px-4 py-2 rounded-xl
                      transition-all duration-300
                      ${isActive 
                        ? 'bg-secondary/10 text-secondary border border-secondary/20' 
                        : 'text-gray-warm hover:text-gray-light hover:bg-gray-800/50'
                      }
                    `}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-secondary' : 'text-gray-medium'}`} />
                    <span className="font-medium">{item.name}</span>
                    
                    {/* Акцентный индикатор */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-secondary rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Эффект наведения */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/5 to-secondary/0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                    )}
                  </motion.a>
                );
              })}

              {/* Кнопка записи */}
              <motion.a
                href="#contacts"
                onClick={(e) => handleClick(e, '#contacts')}
                className="
                  ml-4 group flex items-center gap-2 px-4 py-2
                  bg-gradient-to-r from-secondary/20 to-tertiary/20
                  border border-secondary/30
                  rounded-xl
                  text-gray-light
                  hover:text-secondary
                  hover:border-secondary/50
                  hover:shadow-[0_0_20px_rgba(138,155,140,0.2)]
                  transition-all duration-300
                "
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">Записаться</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            {/* Мобильное меню - кнопка */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                md:hidden p-2 rounded-lg
                bg-gray-900/50 backdrop-blur-sm
                border border-gray-800/50
                text-gray-warm hover:text-gray-light
                transition-colors duration-200
              "
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Мобильное меню (выпадающее) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="
              fixed top-16 left-4 right-4 z-40
              bg-gray-900/95 backdrop-blur-xl
              rounded-2xl border border-gray-800/50
              shadow-2xl shadow-black/30
              overflow-hidden md:hidden
            "
          >
            <div className="p-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href;
                
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`
                      flex items-center justify-between p-4 rounded-xl
                      transition-all duration-200
                      ${isActive 
                        ? 'bg-secondary/10 text-secondary' 
                        : 'text-gray-warm hover:text-gray-light hover:bg-gray-800/50'
                      }
                    `}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${isActive ? 'text-secondary' : 'text-gray-medium'}`} />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'rotate-90 text-secondary' : 'text-gray-medium'}`} />
                  </motion.a>
                );
              })}

              {/* Мобильная кнопка записи */}
              <motion.a
                href="#contacts"
                onClick={(e) => handleClick(e, '#contacts')}
                className="
                  flex items-center justify-center gap-2 p-4 mt-4
                  bg-gradient-to-r from-secondary/20 to-tertiary/20
                  border border-secondary/30
                  rounded-xl
                  text-gray-light
                  hover:text-secondary
                  transition-colors duration-200
                "
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium">Записаться на консультацию</span>
                <ChevronRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Футер мобильного меню */}
            <div className="p-4 border-t border-gray-800/50">
              <div className="text-center">
                <p className="text-sm text-gray-warm">
                  Психологическая помощь взрослым
                </p>
                <p className="text-xs text-gray-medium mt-1">
                  Юнгианский психоаналитик
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay для мобильного меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}