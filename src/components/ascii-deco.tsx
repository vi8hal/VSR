const AsciiDeco = () => {
  const art = `
██████╗ ███████╗██╗   ██╗
██╔══██╗██╔════╝██║   ██║
██║  ██║█████╗  ██║   ██║
██║  ██║██╔══╝  ╚██╗ ██╔╝
██████╔╝███████╗ ╚████╔╝ 
╚═════╝ ╚══════╝  ╚═══╝  
  `;

  return (
    <pre
      aria-hidden="true"
      className="hidden md:block fixed right-[10px] top-1/2 -translate-y-1/2 text-primary/5 font-mono text-[0.4rem] leading-tight pointer-events-none z-0 whitespace-pre animate-asciifade"
    >
      {art}
    </pre>
  );
};

export default AsciiDeco;
