import { memo, SVGProps } from 'react';

const DividerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1000 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1000' stroke='#134E48' />
  </svg>
);

const Memo = memo(DividerIcon);
export { Memo as DividerIcon };
