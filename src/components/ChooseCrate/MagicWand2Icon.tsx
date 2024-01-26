import { memo, SVGProps } from 'react';

const MagicWand2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 53 50' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M33.25 5.33333V0.166667M33.25 36.3333V31.1667M14 18.25H19.5M47 18.25H52.5M40.95 25.4833L44.25 28.5833M40.95 11.0167L44.25 7.91667M0.25 49.25L25 26M25.55 11.0167L22.25 7.91667'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(MagicWand2Icon);
export { Memo as MagicWand2Icon };
