import { memo, SVGProps } from 'react';

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5 0.333333V9.66667M5 9.66667L9.66667 5M5 9.66667L0.333333 5'
      stroke='#475467'
      strokeWidth={1.33333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ArrowDownIcon);
export { Memo as ArrowDownIcon };
