import { memo, SVGProps } from 'react';

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7 0.583333V13.4167M0.583333 7H13.4167'
      stroke='#344054'
      strokeOpacity={0.6}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(PlusIcon);
export { Memo as PlusIcon };
