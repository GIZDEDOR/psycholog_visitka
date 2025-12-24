'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  Phone,
  Instagram,
  Users,
  Calendar,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  BookOpen
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* DATA */
/* ------------------------------------------------------------------ */

const contacts = [
  {
    id: 1,
    title: "Запись на консультацию",
    subtitle: "Телефон для связи",
    description:
      "Предварительная запись обязательна. Если я не отвечаю сразу — пожалуйста, напишите сообщение.",
    value: "8 921 657 17 35",
    href: "tel:89216571735",
    qrValue: "tel:89216571735",
    icon: Phone,
    highlight: true
  },
  {
    id: 2,
    title: "Телеграм-канал",
    subtitle: "Алхимия Жизни",
    description:
      "Основной канал о психологии, анонсах и профессиональных размышлениях.",
    value: "@KuznetsovaA_psy",
    href: "https://t.me/KuznetsovaA_psy",
    qrValue: "https://t.me/KuznetsovaA_psy",
    icon: MessageSquare,
    highlight: true
  },
  {
    id: 3,
    title: "Соавторский проект",
    subtitle: "Spiritual Sisters",
    description:
      "Сообщество для женщин о духовном развитии и поддержке.",
    value: "@spiritualsisters3",
    href: "https://t.me/spiritualsisters3",
    qrValue: "https://t.me/spiritualsisters3",
    icon: Users,
    highlight: false
  },
  {
    id: 4,
    title: "Instagram",
    subtitle: "Личный профиль",
    description:
      "Страница ведётся неактивно, но вы можете подписаться.",
    value: "@sash_kuznetsova_",
    href: "https://www.instagram.com/sash_kuznetsova_",
    qrValue: "https://www.instagram.com/sash_kuznetsova_",
    icon: Instagram,
    highlight: false
  }
];

const bookingLink =
  "https://t.me/KuznetsovaA_psy?text=Здравствуйте!%20Хочу%20записаться%20на%20консультацию";

/* ------------------------------------------------------------------ */
/* COMPONENT */
/* ------------------------------------------------------------------ */

export default function Contacts() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 420);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="contacts" className="relative py-32 scroll-mt-24">
      {/* background blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl lg:text-5xl text-gray-light">
            Контакты
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-secondary/50" />
        </motion.div>

        {/* main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-24"
        >
          <motion.a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="
              flex items-center gap-4 px-8 py-5 rounded-2xl
              bg-gradient-to-r from-primary to-secondary
              text-gray-light text-lg font-medium
              shadow-[0_20px_60px_rgba(0,0,0,0.4)]
            "
          >
            <Calendar className="w-6 h-6" />
            Записаться на консультацию
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                relative bg-gray-900/60 backdrop-blur
                rounded-2xl p-6 border border-gray-800/40
                shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              "
            >
              {item.highlight && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary rounded-l-2xl" />
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-black/30">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading text-gray-light">
                    {item.title}
                  </h3>
                  <p className="text-sm text-secondary/80">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-warm text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/40">
                {/* QR hover */}
                <div className="relative group">
                  <QRCodeSVG
                    value={item.qrValue}
                    size={42}
                    bgColor="transparent"
                    fgColor="#9CA3AF"
                  />

                  <div className="
                    pointer-events-none absolute bottom-full left-1/2
                    -translate-x-1/2 mb-4 opacity-0 scale-95
                    group-hover:opacity-100 group-hover:scale-100
                    transition-all duration-300
                    bg-white p-4 rounded-xl shadow-2xl
                  ">
                    <QRCodeSVG value={item.qrValue} size={160} />
                    
                  </div>
                </div>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 px-4 py-2 rounded-lg
                    bg-black/40 border border-gray-700/50
                    hover:border-secondary/60 hover:text-secondary
                    transition-colors text-sm text-gray-light
                  "
                >
                  Перейти
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* info panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="max-w-2xl mx-auto bg-primary/20 backdrop-blur p-8 rounded-2xl border border-gray-800/40">
            <div className="flex gap-4">
              <BookOpen className="w-6 h-6 text-secondary mt-1" />
              <div>
                <h4 className="text-lg text-gray-light font-medium mb-3">
                  Форматы работы
                </h4>
                <ul className="space-y-2 text-sm text-gray-warm">
                  <li>• Очно в Санкт-Петербурге</li>
                  <li>• Онлайн (Zoom / Telegram)</li>
                  <li>• Индивидуальная и групповая терапия</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
