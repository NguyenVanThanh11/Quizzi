import { memo, SVGProps } from 'react';

const SearchLgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.5 15.5L12.5834 12.5833M14.6667 7.58333C14.6667 11.4954 11.4954 14.6667 7.58333 14.6667C3.67132 14.6667 0.5 11.4954 0.5 7.58333C0.5 3.67132 3.67132 0.5 7.58333 0.5C11.4954 0.5 14.6667 3.67132 14.6667 7.58333Z'
      stroke='#667085'
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.5 15.5L12.5834 12.5833M14.6667 7.58333C14.6667 11.4954 11.4954 14.6667 7.58333 14.6667C3.67132 14.6667 0.5 11.4954 0.5 7.58333C0.5 3.67132 3.67132 0.5 7.58333 0.5C11.4954 0.5 14.6667 3.67132 14.6667 7.58333Z'
      stroke='black'
      strokeOpacity={0.2}
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(SearchLgIcon);
export { Memo as SearchLgIcon };
