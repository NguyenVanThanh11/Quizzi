import { memo, SVGProps } from 'react';

const DownloadCloud2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6 14L10 18M10 18L14 14M10 18V9M18 13.7428C19.2215 12.734 20 11.2079 20 9.5C20 6.46243 17.5376 4 14.5 4C14.2815 4 14.0771 3.886 13.9661 3.69774C12.6621 1.48484 10.2544 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 9.5661 0.835447 11.4371 2.18695 12.7935'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(DownloadCloud2Icon);
export { Memo as DownloadCloud2Icon };
