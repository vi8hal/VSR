import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import MatrixCanvas from '@/components/matrix-canvas';
import AsciiDeco from '@/components/ascii-deco';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: '11xC0DE_V // PORTFOLIO',
  description: 'Vishal Singh - Consultant & Backend Developer Portfolio',
};

function HexNodes() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(0,255,65,0.15) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'font-body antialiased bg-background text-primary min-h-screen overflow-x-hidden text-[13px]',
          'selection:bg-primary selection:text-background'
        )}
      >
        <MatrixCanvas />
        <HexNodes />
        <AsciiDeco />
        <div className="relative z-10 flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
