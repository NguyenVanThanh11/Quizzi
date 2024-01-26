import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 445 445' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={222.5} cy={222.5} r={222.5} fill='#CEF7F3' />
  </svg>
);

const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
