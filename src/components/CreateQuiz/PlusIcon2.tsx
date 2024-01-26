import { memo, SVGProps } from 'react';

const PlusIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M26 0.333334V51.6667M0.916666 26H51.0833'
      stroke='#01060F'
      strokeOpacity={0.6}
      strokeWidth={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(PlusIcon2);
export { Memo as PlusIcon2 };
