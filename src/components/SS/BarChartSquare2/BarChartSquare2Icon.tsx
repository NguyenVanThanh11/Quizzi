import { memo, SVGProps } from 'react';

const BarChartSquare2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5 12V14M9 8V14M13 4V14M4.8 18H13.2C14.8802 18 15.7202 18 16.362 17.673C16.9265 17.3854 17.3854 16.9265 17.673 16.362C18 15.7202 18 14.8802 18 13.2V4.8C18 3.11984 18 2.27976 17.673 1.63803C17.3854 1.07354 16.9265 0.614601 16.362 0.32698C15.7202 0 14.8802 0 13.2 0H4.8C3.11984 0 2.27976 0 1.63803 0.32698C1.07354 0.614601 0.614601 1.07354 0.32698 1.63803C0 2.27976 0 3.11984 0 4.8V13.2C0 14.8802 0 15.7202 0.32698 16.362C0.614601 16.9265 1.07354 17.3854 1.63803 17.673C2.27976 18 3.11984 18 4.8 18Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(BarChartSquare2Icon);
export { Memo as BarChartSquare2Icon };
