import { memo, SVGProps } from 'react';

const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H8.16667' stroke='#7F56D9' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(MinusIcon);
export { Memo as MinusIcon };
