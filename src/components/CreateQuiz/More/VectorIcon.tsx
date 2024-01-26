import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.9 3.8C8.83888 3.8 9.6 3.03888 9.6 2.1C9.6 1.16112 8.83888 0.4 7.9 0.4C6.96112 0.4 6.2 1.16112 6.2 2.1C6.2 3.03888 6.96112 3.8 7.9 3.8Z'
      fill='black'
    />
    <path
      d='M13.75 3.8C14.6889 3.8 15.45 3.03888 15.45 2.1C15.45 1.16112 14.6889 0.4 13.75 0.4C12.8111 0.4 12.05 1.16112 12.05 2.1C12.05 3.03888 12.8111 3.8 13.75 3.8Z'
      fill='black'
    />
    <path
      d='M2.05 3.8C2.98888 3.8 3.75 3.03888 3.75 2.1C3.75 1.16112 2.98888 0.4 2.05 0.4C1.11112 0.4 0.35 1.16112 0.35 2.1C0.35 3.03888 1.11112 3.8 2.05 3.8Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
