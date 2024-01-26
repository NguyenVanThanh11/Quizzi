import { memo, SVGProps } from 'react';

const MagicWand2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12 2V0M12 14V12M5 7H7M17 7H19M14.8 9.8L16 11M14.8 4.2L16 3M0 19L9 10M9.2 4.2L8 3'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(MagicWand2Icon);
export { Memo as MagicWand2Icon };
