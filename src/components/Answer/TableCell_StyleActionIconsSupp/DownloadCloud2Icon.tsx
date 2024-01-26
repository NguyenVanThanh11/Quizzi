import { memo, SVGProps } from 'react';

const DownloadCloud2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.66667 12.1667L9 15.5M9 15.5L12.3333 12.1667M9 15.5V8M15.6667 11.9524C16.6846 11.1117 17.3333 9.83995 17.3333 8.41667C17.3333 5.88536 15.2813 3.83333 12.75 3.83333C12.5679 3.83333 12.3975 3.73833 12.3051 3.58145C11.2184 1.73736 9.21203 0.5 6.91667 0.5C3.46489 0.5 0.666667 3.29822 0.666667 6.75C0.666667 8.47175 1.36287 10.0309 2.48912 11.1613'
      stroke='#475467'
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(DownloadCloud2Icon);
export { Memo as DownloadCloud2Icon };
