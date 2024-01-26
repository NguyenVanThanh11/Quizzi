import { memo, SVGProps } from 'react';

const SvgIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.47106 3.42211H4.31341V9.44941C4.31341 11.4306 5.69694 12.8593 8 12.8593C10.3031 12.8593 11.6866 11.4306 11.6866 9.44941V3.42211H10.5289V9.37317C10.5289 10.7755 9.60847 11.792 8 11.792C6.39153 11.792 5.47106 10.7755 5.47106 9.37317V3.42211ZM12.2353 14.5882H3.76471V13.6471H12.2353V14.5882Z'
      fill='#6A6A6A'
    />
  </svg>
);

const Memo = memo(SvgIcon6);
export { Memo as SvgIcon6 };
