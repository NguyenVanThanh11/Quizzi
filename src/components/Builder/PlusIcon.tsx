import { memo, SVGProps } from 'react';

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M26 0.333334V51.6667M0.916666 26H51.0833'
      stroke='white'
      strokeWidth={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(PlusIcon);
export { Memo as PlusIcon };
