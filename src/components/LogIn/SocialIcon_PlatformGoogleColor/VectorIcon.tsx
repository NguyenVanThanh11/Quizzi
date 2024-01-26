import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.766 3.27643C11.766 2.46071 11.6999 1.64057 11.5588 0.838074H0.23999V5.45905H6.72172C6.45275 6.94941 5.58852 8.2678 4.32304 9.10557V12.1039H8.19003C10.4608 10.0139 11.766 6.92736 11.766 3.27643Z'
      fill='#4285F4'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
