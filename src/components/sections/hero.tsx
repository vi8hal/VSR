import { HERO_DATA } from '@/lib/data';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const TerminalHeader = () => (
  <div className="bg-[#0a0a0a] py-2 px-3.5 flex items-center gap-2 border-b border-custom-border">
    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] shadow-[0_0_4px_#ff5f57]"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] shadow-[0_0_4px_#febc2e]"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] shadow-[0_0_4px_#28c840]"></div>
    <span className="ml-2 text-custom-text-dim text-[0.68rem] tracking-[2px]">
      bash — ~/portfolio — 160x40
    </span>
    <span className="ml-auto text-xs text-custom-text-dim">CPU:12% MEM:48% ▲</span>
  </div>
);

const PromptLine = ({
  user = 'root@0xdev',
  path = '~',
  command,
  showCursor = false,
}: {
  user?: string;
  path?: string;
  command: React.ReactNode;
  showCursor?: boolean;
}) => (
  <div className="flex items-start gap-2">
    <span className="text-custom-green-dim text-shadow-green-glow text-[0.78rem] whitespace-nowrap">
      {user}:<span className="text-custom-text-dim">{path}</span>$
    </span>
    <span className="text-custom-text text-[0.78rem]">
      {command}
      {showCursor && (
        <span className="inline-block w-2 h-3.5 bg-primary shadow-green-glow animate-blink align-text-bottom ml-0.5" />
      )}
    </span>
  </div>
);

const Hero = () => {
  return (
    <section className="py-6">
      <div className="container">
        <div className="bg-black/80 border border-custom-border-bright overflow-hidden relative shadow-[0_0_0_1px_rgba(0,255,65,0.05),_0_0_30px_rgba(0,255,65,0.12),_0_0_80px_rgba(0,255,65,0.04),_inset_0_0_60px_rgba(0,0,0,0.6)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:pointer-events-none">
          <TerminalHeader />
          <div className="p-5 sm:p-7">
            <PromptLine command="./identify_engineer.sh" />
            <h1 className="font-headline text-clamp-hero font-black text-primary tracking-[5px] my-3.5 animate-glitch leading-none">
              {HERO_DATA.name}
            </h1>
            <div className="text-[0.72rem] text-custom-cyan tracking-[4px] text-shadow-cyan mb-3.5 border-l-2 border-custom-cyan pl-2.5">
              {HERO_DATA.title}
            </div>
            <div className="mt-4">
              <PromptLine command="cat ./about.md" />
            </div>
            <div className="text-custom-text-dim text-[0.76rem] leading-loose max-w-2xl mt-3 mb-4 space-y-1">
              {HERO_DATA.about.map((line, index) => (
                <p key={index}>
                  &gt; <span dangerouslySetInnerHTML={{ __html: line.replace(/(\b(scalable server-side applications|strategic planning|AWS, PostgreSQL, MongoDB|technology & real-world impact)\b)/g, '<span class="text-primary font-medium">$1</span>') }}></span>
                </p>
              ))}
            </div>
            <PromptLine command="sudo hire_me --immediately" showCursor />
            <div className="flex gap-2 flex-wrap mt-5">
              {HERO_DATA.buttons.map(({ href, label, primary }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={cn(
                    'btn py-2 px-5 border text-[0.72rem] font-body tracking-[2px] transition-all duration-150 no-underline inline-block',
                    primary
                      ? 'border-primary text-primary text-shadow-green-glow hover:text-black hover:text-shadow-none hover:shadow-green'
                      : 'btn-ghost border-custom-border-bright text-custom-text-dim hover:text-primary hover:text-shadow-green-glow'
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
