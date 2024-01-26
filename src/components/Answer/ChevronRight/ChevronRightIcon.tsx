import { memo, SVGProps } from 'react';

const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 12L6 6L0 0' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(ChevronRightIcon);
export { Memo as ChevronRightIcon };
