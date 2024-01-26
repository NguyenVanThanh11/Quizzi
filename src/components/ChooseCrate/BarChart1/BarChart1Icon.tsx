import { memo, SVGProps } from 'react';

const BarChart1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M12 16V6M6 16V0M0 16V10' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(BarChart1Icon);
export { Memo as BarChart1Icon };
