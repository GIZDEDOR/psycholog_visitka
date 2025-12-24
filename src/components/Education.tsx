"use client";

import { motion } from "framer-motion";

const education = [
  {
    title: "Институт NLP",
    subtitle: "Санкт-Петербург",
    description:
      "Профессиональная подготовка в области психологии и консультирования.",
  },
  {
    title: "Институт «Новый век»",
    subtitle: "Аналитическая психология",
    description:
      "Обучение юнгианскому подходу и аналитической психотерапии.",
  },
  {
    title: "Юнгианская школа Ольги Гуляевой",
    subtitle: "Глубинная аналитическая практика",
    description:
      "Работа с символами, архетипами и бессознательными процессами.",
  },
  {
    title: "Институт трансориентированной психологии им. Ф. Гудман",
    subtitle: "Трансгенерационные подходы",
    description:
      "Исследование родовых сценариев и коллективной травмы.",
  },
  {
    title: "Санкт-Петербургская Организация Транзактного Анализа",
    subtitle: "Трансгенерационный анализ",
    description:
      "Работа с родовыми сценариями, травмой и идентичностью.",
  },
  {
    title: "Летняя школа МААП",
    subtitle: "Междисциплинарные конференции",
    description:
      "Ежегодное участие в аналитических и профессиональных конференциях.",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* Заголовок */}
        <h2 className="font-heading text-4xl lg:text-5xl text-gray-light text-center">
          Образование и профессиональный путь
        </h2>

        <div className="mx-auto mt-6 h-px w-24 bg-secondary/50" />

        {/* Таймлайн */}
        <div className="relative mt-28">
          {/* Центральная линия */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gray-medium/30 -translate-x-1/2" />

          <div className="space-y-28">
            {education.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type TimelineItemProps = {
  item: {
    title: string;
    subtitle: string;
    description: string;
  };
  index: number;
};

function TimelineItem({ item, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-[1fr_auto_1fr] items-start">
      {/* Левая колонка */}
      <div className={`pr-12 ${isLeft ? "block" : "hidden lg:block"}`}>
        {isLeft && (
          <TimelineCard item={item} direction="left" />
        )}
      </div>

      {/* Центр */}
      <div className="relative flex justify-center">
        <span
          className="
            z-10
            mt-6
            h-4
            w-4
            rounded-full
            bg-secondary
            shadow-[0_0_0_6px_rgba(255,255,255,0.03)]
          "
        />
      </div>

      {/* Правая колонка */}
      <div className={`pl-12 ${!isLeft ? "block" : "hidden lg:block"}`}>
        {!isLeft && (
          <TimelineCard item={item} direction="right" />
        )}
      </div>
    </div>
  );
}

function TimelineCard({
  item,
  direction,
}: {
  item: {
    title: string;
    subtitle: string;
    description: string;
  };
  direction: "left" | "right";
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -120 : 120,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      {/* Стрелка */}
      <span
        className={`
          absolute
          top-6
          h-0
          w-0
          border-y-8
          border-y-transparent
          ${
            direction === "left"
              ? "right-[-8px] border-l-8 border-l-gray-900/80"
              : "left-[-8px] border-r-8 border-r-gray-900/80"
          }
        `}
      />

      <div
        className="
          bg-gray-900/80
          backdrop-blur
          p-8
          rounded-3xl
          border
          border-gray-medium/20
          shadow-[0_20px_40px_rgba(0,0,0,0.45)]
        "
      >
        <h3 className="text-xl lg:text-2xl font-heading text-gray-light">
          {item.title}
        </h3>

        <p className="mt-2 text-secondary font-medium">
          {item.subtitle}
        </p>

        <p className="mt-4 text-gray-warm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
