import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Кузнецова Александра | Юнгианский психоаналитик',
  description: 'Индивидуальная и групповая психоаналитическая работа со взрослыми',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="min-h-screen">
        <Navigation />
        <div className="pt-16"> {/* Отступ для фиксированной навигации */}
          {children}
        </div>
      </body>
    </html>
  );
}