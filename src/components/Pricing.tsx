'use client';

import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";

export default function Pricing() {
  const services = [
    {
      title: "Психоаналитическая работа",
      description:
        "Регулярная работа в аналитической рамке. Формат — индивидуальные встречи 1 раз в неделю, длительность аналитического часа — 50 минут.",
      price:
        "первичная сессия — 10 000 ₽\nдальнейшая системная психоаналитическая работа — 8 000 ₽",
    },
    {
      title: "Индивидуальные консультации",
      description:
        "Разовые встречи вне формата регулярной терапии. Могут включать проективные методики (МАК, Таро) и символический анализ запроса. Длительность — 60 минут.",
      price: "Стоимость обсуждается индивидуально",
    },
    {
      title: "Групповая психоаналитическая работа",
      description:
        "Проводится периодически, в формате терапевтических и аналитических групп.",
      price: "Условия и стоимость обсуждаются отдельно",
    },
    {
      title: "Терапевтические игры",
      description:
        "Индивидуальный или групповой формат.",
      price:
        "от 12 000 ₽, в зависимости от количества участников",
    },
    {
      title: "Психоаналитическая работа с сетевыми компаниями",
      description:
        "Индивидуальная и групповая работа в формате аналитических групп, лекций и исследовательских форматов, направленных на понимание внутренних и системных процессов.",
      price:
        "Стоимость и формат обсуждаются индивидуально, по запросу",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative py-20 md:py-32 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Заголовок - выравниваем с WorkAreas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mt-2 font-heading text-4xl lg:text-5xl text-gray-light text-center">
            Формат и стоимость работы
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-secondary/50" />
        </motion.div>

        {/* Карточки в пирамиде 3+2 с такой же сеткой как в WorkAreas */}
        <div className="mt-20 flex flex-col items-center">
          {/* Верхний ряд - 3 карточки */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-10 mb-8 md:mb-12">
            {services.slice(0, 3).map((service, index) => (
              <div 
                key={index} 
                className="w-full sm:w-[360px]"
              >
                <ServiceCard
                  index={index}
                  {...service}
                />
              </div>
            ))}
          </div>
          
          {/* Нижний ряд - 2 карточки со смещением */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {services.slice(3).map((service, index) => (
              <div 
                key={index + 3} 
                className="w-full sm:w-[360px] relative"
                style={{
                  // Сдвигаем карточки для пирамидального эффекта
                  marginLeft: index === 0 ? '-80px' : '0',
                  marginRight: index === 1 ? '-80px' : '0'
                }}
              >
                <ServiceCard
                  index={index + 3}
                  {...service}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}