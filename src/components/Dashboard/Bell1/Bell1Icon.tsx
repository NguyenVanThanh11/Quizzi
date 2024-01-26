import { memo, SVGProps } from 'react';

const Bell1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.35418 19C7.05931 19.6224 7.98555 20 9 20C10.0144 20 10.9407 19.6224 11.6458 19M15 6C15 4.4087 14.3679 2.88258 13.2426 1.75736C12.1174 0.632141 10.5913 0 9 0C7.4087 0 5.88258 0.632141 4.75736 1.75736C3.63214 2.88258 3 4.4087 3 6C3 9.09018 2.22047 11.206 1.34966 12.6054C0.615127 13.7859 0.247858 14.3761 0.261325 14.5408C0.276236 14.7231 0.31486 14.7926 0.461776 14.9016C0.594459 15 1.19259 15 2.38885 15H15.6111C16.8074 15 17.4055 15 17.5382 14.9016C17.6851 14.7926 17.7238 14.7231 17.7387 14.5408C17.7521 14.3761 17.3849 13.7859 16.6503 12.6054C15.7795 11.206 15 9.09019 15 6Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Bell1Icon);
export { Memo as Bell1Icon };
