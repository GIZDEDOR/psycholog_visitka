'use client';

import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="relative my-4 scroll-mt-24">
      <div 
        className="
          relative
          overflow-hidden
          rounded-3xl
          mx-4
          md:mx-8
          lg:mx-16
          xl:mx-24
          bg-[#284033]
        "
      >
        <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-gray-light mb-6">
              Образование и профессиональный опыт
            </h2>
            
            <div className="h-px w-24 bg-secondary/50 mx-auto"></div>
          </motion.div>

          {/* Вступительный текст */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 text-center"
          >
            <p className="text-lg md:text-xl text-gray-medium leading-relaxed">
              Моё профессиональное становление основано на аналитической психологии, 
              глубинной личной терапии и практической работе.
            </p>
          </motion.div>

          {/* Список образования */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h3 className="text-xl md:text-2xl font-medium text-gray-light mb-10">
              Профессиональное образование:
            </h3>

            <ul className="space-y-6">
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="flex items-start"
              >
                <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                <span className="text-lg text-gray-light">
                  <span className="font-medium">Институт НЛП «In NLP» (Санкт-Петербург)</span>
                  <span className="text-gray-medium ml-2">— НЛП - практик, коуч.</span>
                </span>
              </motion.li>

              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start"
              >
                <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                <span className="text-lg text-gray-light">
                  <span className="font-medium">Институт «Новый век»</span>
                  <span className="text-gray-medium ml-2">— аналитическая психология</span>
                </span>
              </motion.li>

              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex items-start"
              >
                <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                <span className="text-lg text-gray-light">
                  <span className="font-medium">Юнгианская школа Ольги Гуляевой</span>
                  <span className="text-gray-medium ml-2">— юнгианский психоанализ</span>
                </span>
              </motion.li>

              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start"
              >
                <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                <span className="text-lg text-gray-light">
                  <span className="font-medium">Институт трансориентированной психологии им. Ф. Гудман (ИТОП)</span>
                  <span className="text-gray-medium ml-2">— психология через трансориентированный подход</span>
                </span>
              </motion.li>

              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex items-start"
              >
                <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                <span className="text-lg text-gray-light">
                  <span className="font-medium">Санкт-Петербургская Организация Транзактного Анализа</span>
                  <span className="text-gray-medium ml-2">— трансгенерационный аспект, работа с родовыми сценариями и травмой</span>
                </span>
              </motion.li>

              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start"
              >
                <span className="text-secondary mr-3 mt-1 text-xl">•</span>
                <span className="text-lg text-gray-light">
                  <span className="font-medium">Летняя школа МААП</span>
                  <span className="text-gray-medium ml-2">— ежегодные междисциплинарные аналитические конференции</span>
                </span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Заключительный текст */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-gray-medium leading-relaxed">
              Многолетняя личная терапия, регулярная супервизия и участие в интервизионной группе.
            </p>
            
            <p className="text-lg md:text-xl text-gray-medium leading-relaxed">
              Непрерывная психоаналитическая практика — индивидуальная и групповая.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}