import { memo, SVGProps } from 'react';

const XCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10 0L0 10M0 0L10 10'
      stroke='#00A19A'
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(XCloseIcon);
export { Memo as XCloseIcon };
