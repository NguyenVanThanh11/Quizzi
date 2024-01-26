import { memo, SVGProps } from 'react';

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.66666 0.5L3.25 6.91667L0.333328 4'
      stroke='#0E9384'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CheckIcon);
export { Memo as CheckIcon };
