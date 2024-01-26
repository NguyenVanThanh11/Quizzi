import { memo, SVGProps } from 'react';

const HelpCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.09 7C7.3251 6.33167 7.78915 5.76811 8.39995 5.40913C9.01076 5.05016 9.7289 4.91894 10.4272 5.03871C11.1255 5.15849 11.7588 5.52152 12.2151 6.06353C12.6713 6.60553 12.9211 7.29152 12.92 8C12.92 10 9.92 11 9.92 11M10 15H10.01M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(HelpCircleIcon);
export { Memo as HelpCircleIcon };
