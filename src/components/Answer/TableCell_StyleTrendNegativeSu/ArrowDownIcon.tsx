import { memo, SVGProps } from 'react';

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4 0.5V7.5M4 7.5L7.5 4M4 7.5L0.5 4'
      stroke='#F04438'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ArrowDownIcon);
export { Memo as ArrowDownIcon };
