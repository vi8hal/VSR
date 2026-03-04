import type { FC } from 'react';

type SectionHeaderProps = {
  num: string;
  tag: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({ num, tag }) => {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <span className="text-custom-text-dim text-[0.68rem]">{num}.</span>
      <h2 className="font-headline text-sm font-bold text-primary tracking-[3px] text-shadow-green-sm">
        {tag}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-custom-border-bright to-transparent"></div>
    </div>
  );
};

export default SectionHeader;
