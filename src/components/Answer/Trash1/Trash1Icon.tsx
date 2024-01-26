import { memo, SVGProps } from 'react';

const Trash1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13 4V3.2C13 2.0799 13 1.51984 12.782 1.09202C12.5903 0.715695 12.2843 0.409734 11.908 0.217987C11.4802 0 10.9201 0 9.8 0H8.2C7.07989 0 6.51984 0 6.09202 0.217987C5.71569 0.409734 5.40973 0.715695 5.21799 1.09202C5 1.51984 5 2.0799 5 3.2V4M7 9.5V14.5M11 9.5V14.5M0 4H18M16 4V15.2C16 16.8802 16 17.7202 15.673 18.362C15.3854 18.9265 14.9265 19.3854 14.362 19.673C13.7202 20 12.8802 20 11.2 20H6.8C5.11984 20 4.27976 20 3.63803 19.673C3.07354 19.3854 2.6146 18.9265 2.32698 18.362C2 17.7202 2 16.8802 2 15.2V4'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Trash1Icon);
export { Memo as Trash1Icon };
