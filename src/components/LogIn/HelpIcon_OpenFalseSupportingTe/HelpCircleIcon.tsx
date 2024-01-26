import { memo, SVGProps } from 'react';

const HelpCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.06 5C5.21674 4.55445 5.5261 4.17874 5.9333 3.93942C6.34051 3.70011 6.81926 3.61263 7.28478 3.69247C7.75031 3.77232 8.17254 4.01435 8.47672 4.37569C8.78089 4.73702 8.94737 5.19435 8.94667 5.66667C8.94667 7 6.94667 7.66667 6.94667 7.66667M7 10.3333H7.00667M13.6667 7C13.6667 10.6819 10.6819 13.6667 7 13.6667C3.3181 13.6667 0.333333 10.6819 0.333333 7C0.333333 3.3181 3.3181 0.333333 7 0.333333C10.6819 0.333333 13.6667 3.3181 13.6667 7Z'
      stroke='#98A2B3'
      strokeWidth={1.33333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(HelpCircleIcon);
export { Memo as HelpCircleIcon };
