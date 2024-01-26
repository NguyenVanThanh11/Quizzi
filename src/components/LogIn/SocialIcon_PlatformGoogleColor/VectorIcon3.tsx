import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.50253 8.30027C4.99987 6.80992 4.99987 5.1961 5.50253 3.70575V0.614807H1.51649C-0.18551 4.00558 -0.18551 8.00044 1.51649 11.3912L5.50253 8.30027V8.30027Z'
      fill='#FBBC04'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
