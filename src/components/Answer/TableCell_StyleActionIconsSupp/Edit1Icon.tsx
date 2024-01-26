import { memo, SVGProps } from 'react';

const Edit1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.396677 14.0964C0.434964 13.7518 0.454107 13.5795 0.506238 13.4185C0.552489 13.2756 0.617837 13.1396 0.700508 13.0143C0.79369 12.873 0.916266 12.7504 1.16142 12.5052L12.1667 1.5C13.0871 0.579524 14.5795 0.579525 15.5 1.5C16.4205 2.42047 16.4205 3.91286 15.5 4.83333L4.49475 15.8386C4.2496 16.0837 4.12702 16.2063 3.98572 16.2995C3.86035 16.3821 3.72439 16.4475 3.58152 16.4937C3.42048 16.5459 3.24819 16.565 2.90362 16.6033L0.0833104 16.9167L0.396677 14.0964Z'
      stroke='#475467'
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Edit1Icon);
export { Memo as Edit1Icon };
