import { memo, SVGProps } from 'react';

const Polygon2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 226 225' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M96.4214 16.8439L187.568 50.2175L204.239 145.84L129.763 208.089L38.6166 174.715L21.9455 79.0926L96.4214 16.8439Z'
      stroke='#008C87'
      strokeWidth={4}
    />
  </svg>
);

const Memo = memo(Polygon2Icon);
export { Memo as Polygon2Icon };
