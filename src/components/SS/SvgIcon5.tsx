import { memo, SVGProps } from 'react';

const SvgIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.99101 11.6739L9.53001 4.45493C9.65301 3.85993 9.77601 3.74493 10.877 3.64793L10.987 3.12793H7.21101L7.10101 3.64793C8.16101 3.74393 8.22901 3.85993 8.10601 4.45493L6.57001 11.6739C6.44701 12.2689 6.32401 12.3839 5.22401 12.4799L5.11401 12.9999H8.88801L8.99801 12.4799C7.93801 12.3849 7.86801 12.2689 7.99101 11.6739Z'
      fill='#6A6A6A'
    />
  </svg>
);

const Memo = memo(SvgIcon5);
export { Memo as SvgIcon5 };
