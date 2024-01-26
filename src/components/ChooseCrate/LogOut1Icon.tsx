import { memo, SVGProps } from 'react';

const LogOut1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.3333 12.1667L15.5 8M15.5 8L11.3333 3.83333M15.5 8H5.5M5.5 0.5H4.5C3.09987 0.5 2.3998 0.5 1.86502 0.772484C1.39462 1.01217 1.01217 1.39462 0.772484 1.86502C0.499999 2.3998 0.499999 3.09987 0.499999 4.5V11.5C0.499999 12.9001 0.499999 13.6002 0.772483 14.135C1.01217 14.6054 1.39462 14.9878 1.86502 15.2275C2.3998 15.5 3.09987 15.5 4.5 15.5H5.5'
      stroke='#667085'
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11.3333 12.1667L15.5 8M15.5 8L11.3333 3.83333M15.5 8H5.5M5.5 0.5H4.5C3.09987 0.5 2.3998 0.5 1.86502 0.772484C1.39462 1.01217 1.01217 1.39462 0.772484 1.86502C0.499999 2.3998 0.499999 3.09987 0.499999 4.5V11.5C0.499999 12.9001 0.499999 13.6002 0.772483 14.135C1.01217 14.6054 1.39462 14.9878 1.86502 15.2275C2.3998 15.5 3.09987 15.5 4.5 15.5H5.5'
      stroke='black'
      strokeOpacity={0.2}
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(LogOut1Icon);
export { Memo as LogOut1Icon };
