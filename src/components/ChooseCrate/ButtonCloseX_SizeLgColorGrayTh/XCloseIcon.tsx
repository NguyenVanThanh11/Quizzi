import { memo, SVGProps } from 'react';

const XCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M12 0L0 12M0 0L12 12' stroke='#667085' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12 0L0 12M0 0L12 12'
      stroke='black'
      strokeOpacity={0.2}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(XCloseIcon);
export { Memo as XCloseIcon };
