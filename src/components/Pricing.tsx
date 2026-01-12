'use client';

import { motion } from 'framer-motion';

export default function Pricing() {
  const services = [
    {
      title: "Психоаналитическая работа",
      description: "Регулярная работа в аналитической рамке. Формат — индивидуальные встречи 1 раз в неделю, длительность аналитического часа — 50 минут.",
      price: [
        "первичная сессия — 10 000 ₽",
        "Дальнейшая системная психоаналитическая работа — 8 000 ₽"
      ]
    },
    {
      title: "Индивидуальные консультации",
      description: "Разовые встречи вне формата регулярной психоаналитической работы",
      price: ["индивидуальная консультация — 10 000 ₽"]
    },
    {
      title: "Терапевтические игры",
      description: "Групповые занятия с проективными и терапевтическими методиками",
      price: ["групповая работа — 6 000 ₽"]
    }
  ];

  return (
    <section id="pricing" className="relative my-4 scroll-mt-24">
      <div 
        className="
          relative
          overflow-hidden
          rounded-3xl
          mx-4
          md:mx-8
          lg:mx-16
          xl:mx-24
          bg-gradient-to-b from-[#515e55] to-[#7c877f]
          shadow-[0_20px_40px_rgba(0,0,0,0.2)]
        "
      >
        {/* Декоративная текстура */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Формат и стоимость работы
            </h2>
            
            <div className="h-px w-24 bg-white/30 mx-auto"></div>
          </motion.div>

          {/* Карточки с услугами */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8 lg:space-y-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="
                  relative
                  rounded-3xl
                  p-8
                  md:p-10
                  bg-gradient-to-br from-[#616e65] to-[#727c74]
                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  border border-white/10
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                  transition-all duration-300
                "
              >
                {/* Декоративный уголок */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 transform rotate-45 translate-x-8 -translate-y-8 bg-white/5"></div>
                </div>

                {/* Содержимое карточки */}
                <div className="space-y-6 relative z-10">
                  <h3 className="
                    text-2xl
                    md:text-3xl
                    font-heading
                    text-white
                    mb-2
                  ">
                    {service.title}
                  </h3>
                  
                  <p className="
                    text-lg
                    text-white/90
                    leading-relaxed
                    max-w-3xl
                  ">
                    {service.description}
                  </p>
                  
                  {/* Разделительная линия */}
                  <div className="flex justify-center my-6">
                    <div className="
                      h-px
                      w-24
                      bg-gradient-to-r
                      from-transparent
                      via-white/30
                      to-transparent
                    "></div>
                  </div>
                  
                  {/* Цены */}
                  <div className="space-y-3">
                    {service.price.map((priceItem, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 + idx * 0.05 }}
                        className="
                          text-xl
                          md:text-2xl
                          text-white
                          text-center
                          font-medium
                          tracking-wide
                        "
                      >
                        {priceItem}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Дополнительный декоративный элемент */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="
              mt-16
              pt-8
              border-t
              border-white/10
              text-center
            "
          >
            <p className="
              text-white/80
              text-sm
              md:text-base
              max-w-2xl
              mx-auto
            ">
              Все услуги предоставляются в соответствии с профессиональными стандартами и этикой
            </p>
            
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="
                mt-4
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                max-w-md
                mx-auto
              "
            ></motion.div>
            
            <p className="
              mt-4
              text-white/60
              text-xs
              md:text-sm
            ">
              Стоимость указана за одну сессию/встречу
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}