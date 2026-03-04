import { NAV_LINKS, TICKER_TEXT } from '@/lib/data';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Ticker = () => (
  <div className="bg-primary text-background font-bold text-[0.65rem] tracking-[2px] py-1 overflow-hidden">
    <span className="whitespace-nowrap animate-ticker inline-block">
      {TICKER_TEXT}
    </span>
  </div>
);

const Nav = () => (
  <nav className="border-b border-custom-border sticky top-0 bg-background/95 backdrop-blur-md z-[1000] shadow-[0_1px_0_var(--border-color),_0_2px_20px_rgba(0,255,65,0.05)]">
    <div className="container">
      <div className="flex justify-between items-center gap-3 py-2">
        <Link
          href="/"
          className="font-headline text-base font-black text-primary text-shadow-green tracking-[3px] whitespace-nowrap animate-flicker"
        >
          11x<span className="text-custom-red text-shadow-red">C0DE</span>_V
        </Link>
        <ul className="hidden md:flex gap-0.5 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-custom-text-dim decoration-none text-[0.7rem] tracking-[2px] transition-all duration-150 py-[5px] px-3 border border-transparent block hover:text-primary hover:border-custom-border hover:text-shadow-green-sm hover:bg-primary/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-[0.65rem] text-custom-text-dim flex items-center gap-1.5 whitespace-nowrap">
          <span className="w-[7px] h-[7px] rounded-full bg-primary shadow-[0_0_6px_var(--green),_0_0_12px_var(--green)] animate-pulse"></span>
          AVAILABLE_FOR_HIRE
        </div>
      </div>
    </div>
  </nav>
);

const Header = () => (
  <header>
    <Ticker />
    <Nav />
  </header>
);

export default Header;
