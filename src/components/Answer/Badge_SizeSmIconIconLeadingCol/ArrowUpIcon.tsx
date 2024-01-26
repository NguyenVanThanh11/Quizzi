import { memo, SVGProps } from 'react';

const ArrowUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4 7.5V0.5M4 0.5L0.5 4M4 0.5L7.5 4'
      stroke='#12B76A'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ArrowUpIcon);
export { Memo as ArrowUpIcon };
