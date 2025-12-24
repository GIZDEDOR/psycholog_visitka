"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

/* ------------------------------------------------------------------ */
/* TYPES */
/* ------------------------------------------------------------------ */

interface WorkArea {
  title: string;
  description: string;
  image: string;
}

interface WorkAreaCardProps extends WorkArea {
  index: number;
}


const areas: WorkArea[] = [
  {
    title: "Экзистенциальные кризисы",
    description:
      "Глубинные внутренние конфликты, повторяющиеся жизненные сценарии, ощущение утраты смысла и внутренней опоры.",
    image: "/area1.webp",
  },
  {
    title: "Индивидуальная и групповая работа",
    description:
      "Психоаналитическая терапия, терапевтические игры и проективные методики как путь к осознанию бессознательных процессов.",
    image: "/area2.webp",
  },
  {
    title: "Работа с компаниями",
    description:
      "Психоаналитическая работа с сетевыми компаниями и групповая работа в корпоративной среде.",
    image: "/area3.webp",
  },
];

/* ------------------------------------------------------------------ */
/* CARD */
/* ------------------------------------------------------------------ */

const WorkAreaCard = ({
  index,
  title,
  description,
  image,
}: WorkAreaCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.35, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full sm:w-[360px]"
    >
      <Tilt
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        scale={1}
        transitionSpeed={450}
        className="
          bg-gray-900/80
          backdrop-blur
          p-6
          rounded-3xl
          border
          border-gray-medium/20
          shadow-[0_20px_40px_rgba(0,0,0,0.45)]
        "
      >
        <div className="w-full h-[220px] overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className={`
              w-full h-full object-cover
              ${index === 2 ? 'object-top' : 'object-center'}
            `}
          />
        </div>

        <div className="mt-6">
          <h3 className="text-gray-light text-[22px] font-heading">
            {title}
          </h3>

          <p className="mt-3 text-gray-warm text-[15px] leading-[26px]">
            {description}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/* SECTION */
/* ------------------------------------------------------------------ */

const WorkAreas = () => {
  return (
    <section id="workareas" className="relative py-32 scroll-mt-24">
      {/* Заголовок */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        

        <h2 className="mt-2 font-heading text-4xl lg:text-5xl text-gray-light text-center">
          С чем я работаю
        </h2>

        <div className="mx-auto mt-6 h-px w-24 bg-secondary/50" />
      </motion.div>

      {/* Описание */}
      <motion.p
        variants={fadeIn("up", "tween", 0.15, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="
          mt-10
          max-w-3xl
          mx-auto
          text-center
          text-lg
          lg:text-xl
          text-gray-warm
          leading-relaxed
          
        "
      >
        В своей практике я работаю с глубинными психологическими
        процессами, помогая клиентам осознавать бессознательные
        конфликты, находить внутреннюю устойчивость и выстраивать
        более целостное отношение к себе и миру.
      </motion.p>

      {/* Карточки */}
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {areas.map((area, index) => (
          <WorkAreaCard
            key={area.title}
            index={index}
            {...area}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(WorkAreas, "work");