'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  description: string;
  price: string;
};

export function ServiceCard({
  index,
  title,
  description,
  price,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.35, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full"
    >
      <div className="
        bg-gray-900/80
        backdrop-blur
        p-6
        rounded-3xl
        border
        border-gray-medium/20
        shadow-[0_20px_40px_rgba(0,0,0,0.45)]
        h-full
        flex
        flex-col
      ">
        <div className="space-y-5 flex-1">
          {/* Заголовок такой же как в WorkAreaCard */}
          <h3 className="text-gray-light text-[22px] font-heading">
            {title}
          </h3>

          {/* Описание такой же размер как в WorkAreaCard */}
          <p className="text-gray-warm text-[15px] leading-[26px] flex-1">
            {description}
          </p>
        </div>

        {/* Цена - отдельный блок с границей */}
        <div className="pt-5 mt-5 border-t border-gray-medium/30">
          <p className="text-secondary font-medium whitespace-pre-line text-[15px] leading-[26px]">
            {price}
          </p>
        </div>
      </div>
    </motion.div>
  );
}