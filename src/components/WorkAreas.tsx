'use client';

import { motion } from 'framer-motion';

export default function WorkAreas() {
  return (
    <section id="workareas" className="relative my-4 scroll-mt-24">
      <div 
        className="
          relative
          overflow-hidden
          rounded-3xl
          mx-4
          md:mx-8
          lg:mx-16
          xl:mx-24
          bg-gradient-to-br from-[#2c3e2c] to-[#3e5140]
          shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)]
        "
      >
        {/* Световые акценты */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-tertiary/10 to-transparent rounded-full blur-3xl"></div>

        {/* Декоративная сетка */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.1) 100%), 
                             linear-gradient(0deg, transparent 95%, rgba(255,255,255,0.1) 100%)`,
            backgroundSize: '40px 40px',
          }}></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
          {/* Заголовок с декоративным элементом */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 relative"
          >
            {/* Декоративные элементы вокруг заголовка */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              С чем я <span className="text-secondary relative">
                работаю
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></span>
              </span>
            </h2>
            
            <div className="flex justify-center items-center gap-4 mt-6">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
              <div className="text-white/60 text-sm font-medium">Психоаналитическая практика</div>
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
            </div>
          </motion.div>

          {/* Основной текстовый блок с эффектом "бумаги" */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="
              relative
              bg-gradient-to-br from-[#3a4a3b] to-[#4c5d4e]
              rounded-2xl
              p-8
              md:p-10
              lg:p-12
              shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.3)]
              border border-white/10
              space-y-8
              before:absolute
              before:inset-0
              before:rounded-2xl
              before:bg-gradient-to-r
              before:from-transparent
              before:via-white/5
              before:to-transparent
              before:opacity-0
              hover:before:opacity-100
              before:transition-opacity
              before:duration-500
              overflow-hidden
            "
          >
            {/* Декоративные уголки */}
            <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-secondary/40 rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-secondary/40 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-secondary/40 rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-secondary/40 rounded-br-lg"></div>

            {/* Линия слева */}
            <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-secondary/20 via-secondary/40 to-secondary/20 rounded-r-full"></div>

            {/* Первый блок - индивидуальная работа */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 pl-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-secondary/60"></div>
                </div>
                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                    Экзистенциальные кризисы, повторяющиеся жизненные сценарии, родовые программы.
                  </p>
                  
                  <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                    Тревожные и аффективные состояния, панические атаки, телесная симптоматика.
                  </p>
                  
                  <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                    Внутренние конфликты, утрата ощущения опоры, потеря смыслов.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Разделитель с иконкой */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="
                relative
                flex
                justify-center
                my-8
              "
            >
              <div className="
                absolute
                inset-x-0
                top-1/2
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/15
                to-transparent
              "></div>
              <div className="
                relative
                px-6
                py-2
                bg-gradient-to-r
                from-[#3a4a3b]
                to-[#4c5d4e]
                rounded-full
                border
                border-white/10
                shadow-lg
              ">
                <span className="text-sm text-secondary font-medium">
                  КОРПОРАТИВНОЕ НАПРАВЛЕНИЕ
                </span>
              </div>
            </motion.div>

            {/* Второй блок - работа с компаниями */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6 pl-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-tertiary/60"></div>
                </div>
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-white font-medium">
                    Отдельное направление — психоаналитическая работа с сетевыми компаниями и корпоративными структурами.
                  </p>
                  
                  <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                    Запросы, связанные с напряжением внутри групп, отсутствием мотивации к развитию, 
                    повторяющимися конфликтами, нарушением границ, трудностями взаимодействия, 
                    распределения ролей и ответственности.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Заключительный блок */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="
                mt-10
                pt-8
                border-t
                border-white/10
                relative
                before:absolute
                before:top-0
                before:left-1/2
                before:-translate-x-1/2
                before:w-24
                before:h-px
                before:bg-gradient-to-r
                before:from-transparent
                before:via-secondary/50
                before:to-transparent
              "
            >
              <div className="flex items-center gap-4 pl-6">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-secondary to-tertiary"></div>
                </div>
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  Работа направлена на исследование бессознательных динамик, 
                  влияющих на функционирование команды и отдельных участников.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Декоративный элемент внизу */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col md:flex-row items-center gap-4 px-8 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-150"></div>
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-300"></div>
              </div>
              <span className="text-sm text-white/80 font-medium">
                Интеграция аналитического, символического и проективного подходов
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}