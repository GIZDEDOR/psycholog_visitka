'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Calendar, ArrowRight, Sparkles, Target, Brain, Heart } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const paragraph3Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Анимации появления
    const tl = gsap.timeline({
      defaults: { 
        ease: 'power3.out',
        duration: 1 
      },
    });

    // Анимация фотографии с эффектом
    if (photoRef.current && frameRef.current) {
      tl.fromTo(
        frameRef.current,
        { 
          opacity: 0,
          scale: 0.9,
          rotation: -5,
          filter: "blur(10px) brightness(0.8)"
        },
        { 
          opacity: 1,
          scale: 1,
          rotation: 0,
          filter: "blur(0px) brightness(1)",
          duration: 1.4
        }
      );

      tl.fromTo(
        photoRef.current,
        { 
          opacity: 0,
          scale: 1.1,
        },
        { 
          opacity: 1,
          scale: 1,
          duration: 1.2
        },
        "-=1"
      );
    }

    // Анимация текста
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { 
          opacity: 0, 
          y: 40,
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 1.2
        },
        "-=0.8"
      );
    }

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { 
          opacity: 0, 
          y: 20,
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 1
        },
        "-=0.6"
      );
    }

    // Анимация параграфов
    const paragraphs = [
      paragraph1Ref.current,
      paragraph2Ref.current,
      paragraph3Ref.current
    ].filter(Boolean);

    if (paragraphs.length) {
      tl.fromTo(
        paragraphs,
        { 
          opacity: 0, 
          y: 15,
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.9,
          stagger: 0.2
        },
        "-=0.4"
      );
    }

    // Анимация кнопки
    if (buttonRef.current) {
      tl.fromTo(
        buttonRef.current,
        { 
          opacity: 0, 
          y: 20,
          scale: 0.95
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8
        },
        "-=0.2"
      );
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(42, 77, 58, 0.4) 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(27, 59, 44, 0.3) 0%, transparent 40%),
          linear-gradient(180deg, #1B3B2C 0%, #223F33 100%)
        `,
        backgroundSize: 'cover',
        backgroundPosition: '50% 0%'
      }}
    >
      {/* Световые пятна */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl"></div>
      </div>

      {/* След курсора */}
      <div 
        className="fixed w-[300px] h-[300px] rounded-full blur-3xl opacity-5 pointer-events-none z-0"
        style={{
          left: `${mousePosition.x - 150}px`,
          top: `${mousePosition.y - 150}px`,
          background: 'radial-gradient(circle, rgba(138, 155, 140, 0.2) 0%, transparent 70%)',
          transition: 'left 0.3s ease-out, top 0.3s ease-out'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 py-12 lg:py-0">
          
          {/* Левая колонка - Фотография */}
          <div className="relative flex items-center justify-center h-[60vh] lg:h-[80vh] max-h-[800px]">
            {/* Декоративная рамка - внешняя */}
            <div 
              ref={frameRef}
              className="absolute inset-0 rounded-3xl opacity-0"
              style={{
                background: 'linear-gradient(135deg, rgba(138, 155, 140, 0.1) 0%, rgba(42, 77, 58, 0.2) 100%)',
                border: '1px solid rgba(138, 155, 140, 0.1)',
                boxShadow: `
                  0 0 0 1px rgba(138, 155, 140, 0.05),
                  0 0 60px rgba(138, 155, 140, 0.1),
                  inset 0 0 40px rgba(138, 155, 140, 0.05)
                `
              }}
            >
              {/* Внутренняя градиентная рамка */}
              <div className="absolute inset-4 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-tertiary/10"></div>
                
                {/* Основное фото */}
                <div 
                  ref={photoRef}
                  className="relative w-full h-full opacity-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                  <Image
                    src="/photo.jpg"
                    alt="Кузнецова Александра — юнгианский психоаналитик"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Акцентные элементы */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-secondary/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-tertiary/15 rounded-full"></div>
            
            {/* Декоративные иконки */}
            <div className="absolute -top-8 left-8 p-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50">
              <Brain className="w-6 h-6 text-secondary" />
            </div>
            <div className="absolute bottom-12 -right-8 p-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50">
              <Heart className="w-6 h-6 text-tertiary" />
            </div>
          </div>

          {/* Правая колонка - Текст */}
          <div className="flex flex-col justify-center space-y-8 lg:space-y-10">
            {/* Заголовок с акцентом */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-2">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-secondary text-sm font-medium">Психоаналитик</span>
              </div>
              
              <h1
                ref={titleRef}
                className="
                  font-heading
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  xl:text-7xl
                  text-gray-light
                  leading-tight
                  opacity-0
                "
              >
                Кузнецова <span className="text-secondary font-light">Александра</span>
              </h1>

              <p
                ref={subtitleRef}
                className="
                  text-xl
                  lg:text-2xl
                  text-gray-medium
                  italic
                  font-light
                  tracking-wide
                  opacity-0
                "
              >
                Юнгианский психоаналитик
              </p>
            </div>

            {/* Содержание */}
            <div className="space-y-6 max-w-xl">
              <p
                ref={paragraph1Ref}
                className="
                  text-gray-warm
                  text-lg
                  lg:text-xl
                  leading-relaxed
                  opacity-0
                  bg-gradient-to-r from-gray-900/30 to-transparent
                  p-4
                  rounded-xl
                  border-l-2
                  border-secondary/30
                "
              >
                Веду индивидуальную и групповую психоаналитическую работу со взрослыми
                людьми, исследуя бессознательные процессы, влияющие на внутренние
                конфликты, отношения и жизненные сценарии.
              </p>

              <div
                ref={paragraph2Ref}
                className="
                  relative
                  bg-gradient-to-r from-secondary/5 to-tertiary/5
                  border border-secondary/20
                  p-6
                  rounded-xl
                  italic
                  text-gray-warm
                  text-lg
                  lg:text-xl
                  leading-relaxed
                  opacity-0
                  backdrop-blur-sm
                "
              >
                <Target className="absolute -top-3 -left-3 w-6 h-6 text-secondary/50" />
                <span className="absolute top-2 left-4 text-2xl text-secondary/30">"</span>
                <span className="absolute bottom-2 right-4 text-2xl text-secondary/30">"</span>
                <p className="relative z-10">
                  Отдельное направление моей практики — психоаналитическая работа в
                  сетевых и организационных структурах: индивидуально и в группах.
                </p>
              </div>

              <p
                ref={paragraph3Ref}
                className="
                  text-gray-warm
                  text-lg
                  lg:text-xl
                  leading-relaxed
                  opacity-0
                  bg-gradient-to-r from-gray-900/30 to-transparent
                  p-4
                  rounded-xl
                  border-l-2
                  border-tertiary/30
                "
              >
                В работе использую аналитический и символический подход, включая
                проективные методики (МАК, Таро) и терапевтические игры.
              </p>
            </div>

            {/* Улучшенная кнопка */}
            <div className="pt-6">
              <a
                ref={buttonRef}
                href="#contacts"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  justify-center
                  gap-4
                  px-8
                  py-4
                  bg-gradient-to-r from-primary/40 to-secondary/30
                  backdrop-blur-sm
                  border-2
                  border-secondary/30
                  rounded-xl
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:border-secondary/50
                  hover:shadow-[0_0_40px_rgba(138,155,140,0.3)]
                  opacity-0
                  overflow-hidden
                "
                onClick={(e) => {
                  e.preventDefault();
                  const contactsElement = document.querySelector('#contacts');
                  if (contactsElement) {
                    contactsElement.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                {/* Эффект свечения при наведении */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Содержимое кнопки */}
                <Calendar className="w-6 h-6 text-secondary relative z-10" />
                <span className="text-xl font-medium text-gray-light group-hover:text-secondary transition-colors duration-300 relative z-10">
                  Записаться на консультацию
                </span>
                <ArrowRight className="w-5 h-5 text-secondary transform group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                
                {/* Анимация фона */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              
              <p className="mt-4 text-gray-warm/70 text-sm max-w-md">
                Нажмите, чтобы перейти к контактам и выбрать удобный способ связи
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Индикатор скролла */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="relative">
          <div className="flex h-12 w-8 justify-center rounded-full border border-secondary/30">
            <div className="mt-2 h-4 w-1 animate-bounce rounded-full bg-secondary/80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}