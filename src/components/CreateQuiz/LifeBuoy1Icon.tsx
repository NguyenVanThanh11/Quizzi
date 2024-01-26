import { memo, SVGProps } from 'react';

const LifeBuoy1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.13626 7.13628L2.92893 2.92896M2.92893 17.0711L7.16797 12.8321M12.8611 12.8638L17.0684 17.0711M17.0684 2.92896L12.8287 7.16862M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z'
      stroke='#667085'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.13626 7.13628L2.92893 2.92896M2.92893 17.0711L7.16797 12.8321M12.8611 12.8638L17.0684 17.0711M17.0684 2.92896L12.8287 7.16862M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z'
      stroke='black'
      strokeOpacity={0.2}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(LifeBuoy1Icon);
export { Memo as LifeBuoy1Icon };
