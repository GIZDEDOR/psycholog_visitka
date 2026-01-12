'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
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

    const tl = gsap.timeline({
      defaults: { 
        ease: 'power3.out',
        duration: 1 
      },
    });

    if (photoRef.current) {
      tl.fromTo(
        photoRef.current,
        { 
          opacity: 0,
          scale: 0.95,
        },
        { 
          opacity: 1,
          scale: 1,
          duration: 1.2
        }
      );
    }

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
      id="hero"
      className="relative overflow-hidden rounded-3xl mx-4 md:mx-8 lg:mx-16 xl:mx-24 my-4"
      style={{
        background: '#284033',
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

      {/* ФОТО - АДАПТИВНАЯ ВЕРСИЯ */}
      <div
        ref={photoRef}
        className="
          relative 
          z-[30] 
          w-full 
          h-[300px] 
          sm:h-[400px] 
          md:h-[500px] 
          lg:absolute 
          lg:w-[30%] 
          lg:h-[85vh] 
          lg:max-w-2xl 
          rounded-3xl 
          shadow-2xl 
          opacity-0
          lg:right-[5%]
          lg:top-[12%]
          mx-auto
          max-w-none
          mt-8
          lg:mt-0
        "
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 rounded-3xl"></div>
        <Image
          src="/photo.jpg"
          alt="Кузнецова Александра — юнгианский психоаналитик"
          fill
          priority
          className="object-cover object-[50%_30%] rounded-3xl"
          sizes="(max-width: 1024px) 90vw, 35vw"
        />
      </div>

      {/* ВЕРХНЯЯ ЧАСТЬ */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-2">
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
          </div>
          
          {/* Пустой блок для десктопной версии (чтобы сетка работала правильно) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* БЕЖЕВАЯ ПОЛОСКА */}
      <div className="relative z-10 bg-[#b2b4af] mt-8 lg:mt-16 rounded-b-3xl">
        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
            py-8
            lg:py-12
          "
        >
          {/* Контейнер для текста */}
          <div className="w-full lg:w-[55%]">
            <h2
              className="
                text-3xl
                lg:text-4xl
                font-light
                text-white
                mb-8
              "
            >
              О специалисте
            </h2>
            
            <div className="space-y-8">
              <p
                ref={paragraph1Ref}
                className="
                  text-gray-800
                  text-lg
                  lg:text-xl
                  leading-relaxed
                  opacity-0
                  mb-6
                "
              >
                Веду индивидуальную и групповую психоаналитическую работу со взрослыми людьми, исследуя бессознательные процессы, которые влияют на внутренние конфликты, отношения и жизненные сценарии.
              </p>

              <p
                ref={paragraph2Ref}
                className="
                  text-gray-800
                  text-lg
                  lg:text-xl
                  leading-relaxed
                  opacity-0
                  mb-6
                "
              >
                Отдельное направление моей практики - психоаналитическая работа в сетевых и организационных структурах: индивидуально и в группах.
              </p>

              <p
                ref={paragraph3Ref}
                className="
                  text-gray-800
                  text-lg
                  lg:text-xl
                  leading-relaxed
                  opacity-0
                "
              >
                В работе использую аналитический и символический подход, включая проективные методики (МАК, Таро) и терапевтические игры.
              </p>
            </div>
            
            <div className="pt-8">
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
                  px-6
                  sm:px-8
                  py-3
                  sm:py-4
                  bg-gradient-to-r from-[#284033] to-secondary
                  backdrop-blur-sm
                  border-2
                  border-[#284033]
                  rounded-xl
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:border-secondary
                  hover:shadow-[0_0_40px_rgba(40,64,51,0.5)]
                  opacity-0
                  overflow-hidden
                  w-full
                  sm:w-auto
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
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Содержимое кнопки */}
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
                <span className="text-base sm:text-xl font-medium text-white relative z-10 text-center sm:text-left">
                  Записаться на консультацию
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transform group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                
                {/* Анимация фона */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-tertiary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              
              <p className="mt-4 text-gray-700 text-sm sm:text-base max-w-md">
                Нажмите, чтобы перейти к контактам и выбрать удобный способ связи
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}