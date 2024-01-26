import { memo, SVGProps } from 'react';

const Ellipse7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 151 151' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={75.5} cy={75.5} r={75.5} fill='url(#paint0_linear_5638_675858)' fillOpacity={0.96} />
    <defs>
      <linearGradient
        id='paint0_linear_5638_675858'
        x1={11.3617}
        y1={132.308}
        x2={167.493}
        y2={9.89563}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#007772' />
        <stop offset={1} stopColor='#FDF0FF' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse7Icon);
export { Memo as Ellipse7Icon };
