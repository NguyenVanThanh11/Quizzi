import { memo, SVGProps } from 'react';

const PlaceholderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9 17.3333C13.6024 17.3333 17.3333 13.6024 17.3333 9C17.3333 4.39763 13.6024 0.666667 9 0.666667C4.39763 0.666667 0.666667 4.39763 0.666667 9C0.666667 13.6024 4.39763 17.3333 9 17.3333Z'
      stroke='#475467'
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(PlaceholderIcon);
export { Memo as PlaceholderIcon };
