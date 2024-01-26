import { memo, SVGProps } from 'react';

const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0.5L5 5.5L10 0.5' stroke='#667085' strokeWidth={1.66667} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M0 0.5L5 5.5L10 0.5'
      stroke='black'
      strokeOpacity={0.2}
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ChevronDownIcon);
export { Memo as ChevronDownIcon };
