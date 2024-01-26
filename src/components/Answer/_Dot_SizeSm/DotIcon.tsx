import { memo, SVGProps } from 'react';

const DotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={3.00001} cy={3} r={3} fill='#12B76A' />
  </svg>
);

const Memo = memo(DotIcon);
export { Memo as DotIcon };
