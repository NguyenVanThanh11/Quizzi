import { memo, SVGProps } from 'react';

const DotsVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1 9C1.55228 9 2 8.55228 2 8C2 7.44772 1.55228 7 1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M1 16C1.55228 16 2 15.5523 2 15C2 14.4477 1.55228 14 1 14C0.447715 14 0 14.4477 0 15C0 15.5523 0.447715 16 1 16Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(DotsVerticalIcon);
export { Memo as DotsVerticalIcon };
