import { memo, SVGProps } from 'react';

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M7 0V14M7 14L14 7M7 14L0 7' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(ArrowDownIcon);
export { Memo as ArrowDownIcon };
