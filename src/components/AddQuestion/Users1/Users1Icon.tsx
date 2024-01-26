import { memo, SVGProps } from 'react';

const Users1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20 18V16C20 14.1362 18.7252 12.5701 17 12.126M13.5 0.290759C14.9659 0.884146 16 2.32131 16 4C16 5.67869 14.9659 7.11585 13.5 7.70924M15 18C15 16.1362 15 15.2044 14.6955 14.4693C14.2895 13.4892 13.5108 12.7105 12.5307 12.3045C11.7956 12 10.8638 12 9 12H6C4.13623 12 3.20435 12 2.46927 12.3045C1.48915 12.7105 0.710458 13.4892 0.304482 14.4693C0 15.2044 0 16.1362 0 18M11.5 4C11.5 6.20914 9.70914 8 7.5 8C5.29086 8 3.5 6.20914 3.5 4C3.5 1.79086 5.29086 0 7.5 0C9.70914 0 11.5 1.79086 11.5 4Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Users1Icon);
export { Memo as Users1Icon };
