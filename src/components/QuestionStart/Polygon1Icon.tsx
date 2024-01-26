import { memo, SVGProps } from 'react';

const Polygon1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 225 225' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M95.6223 16.671L186.769 50.0447L203.44 145.667L128.964 207.916L37.8175 174.542L21.1465 78.9197L95.6223 16.671Z'
      fill='#00A19A'
    />
  </svg>
);

const Memo = memo(Polygon1Icon);
export { Memo as Polygon1Icon };
