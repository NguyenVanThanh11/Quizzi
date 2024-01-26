import { memo, SVGProps } from 'react';

const ArrowUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M7 14V0M7 0L0 7M7 0L14 7' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(ArrowUpIcon);
export { Memo as ArrowUpIcon };
