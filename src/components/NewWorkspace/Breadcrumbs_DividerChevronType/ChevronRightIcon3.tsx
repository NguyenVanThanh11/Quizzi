import { memo, SVGProps } from 'react';

const ChevronRightIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-4.76837e-07 8L4 4L-4.76837e-07 -2.38419e-07'
      stroke='#D0D5DD'
      strokeWidth={1.33333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ChevronRightIcon3);
export { Memo as ChevronRightIcon3 };
