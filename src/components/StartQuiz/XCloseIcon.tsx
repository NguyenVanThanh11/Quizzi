import { memo, SVGProps } from 'react';

const XCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18 0.75L0 22.25M0 0.75L18 22.25'
      stroke='#F9FAFB'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(XCloseIcon);
export { Memo as XCloseIcon };
