import { memo, SVGProps } from 'react';

const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L6 6L12 0' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(ChevronDownIcon);
export { Memo as ChevronDownIcon };
