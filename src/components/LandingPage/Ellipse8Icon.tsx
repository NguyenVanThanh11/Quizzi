import { memo, SVGProps } from 'react';

const Ellipse8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={50} cy={50} r={50} fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Ellipse8Icon);
export { Memo as Ellipse8Icon };
