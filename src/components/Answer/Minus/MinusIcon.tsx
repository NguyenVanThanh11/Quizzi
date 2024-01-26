import { memo, SVGProps } from 'react';

const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H14' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(MinusIcon);
export { Memo as MinusIcon };
