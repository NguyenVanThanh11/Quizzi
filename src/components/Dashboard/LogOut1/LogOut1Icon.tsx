import { memo, SVGProps } from 'react';

const LogOut1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13 14L18 9M18 9L13 4M18 9H6M6 0H4.8C3.11984 0 2.27976 0 1.63803 0.32698C1.07354 0.614601 0.6146 1.07354 0.32698 1.63803C-9.53674e-07 2.27976 -9.53674e-07 3.11984 -9.53674e-07 4.8V13.2C-9.53674e-07 14.8802 -9.53674e-07 15.7202 0.32698 16.362C0.6146 16.9265 1.07354 17.3854 1.63803 17.673C2.27976 18 3.11984 18 4.8 18H6'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(LogOut1Icon);
export { Memo as LogOut1Icon };
