import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-custom-border py-3.5 bg-black/60 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-custom-green-dim to-transparent shadow-green-sm" />
      <div className="container">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <div className="text-custom-text-dim text-[0.62rem] tracking-[1px]">
            <span className="text-primary">11xC0DE_V</span> // BUILT WITH ❤️ AND TOO MUCH ☕
          </div>
          <div className="text-custom-text-dim text-[0.62rem] tracking-[1px]">
            &copy; {new Date().getFullYear()} // ALL RIGHTS RESERVED // <span className="text-primary">MIT LICENSE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
