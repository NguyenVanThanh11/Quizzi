import { memo, SVGProps } from 'react';

const SocialIconIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_5629_7641)'>
      <g clipPath='url(#clip1_5629_7641)'>
        <path d='M-0.5 24H10.996V12.504H-0.5V24Z' fill='#219ADA' />
        <path d='M10.996 0H-0.5V11.496H10.996V0Z' fill='#F32601' />
        <path d='M5.248 12.504H-0.5V24H5.248V12.504Z' fill='#1D86BE' />
        <path d='M5.248 0H-0.5V11.496H5.248V0Z' fill='#D42101' />
        <path d='M12.004 24H23.5V12.504H12.004V24Z' fill='#F5B200' />
        <path d='M23.5 0H12.004V11.496H23.5V0Z' fill='#62BC2B' />
        <path d='M17.5 12.504H12.004V24H17.5V12.504Z' fill='#D59B00' />
        <path d='M17.5 0H12.004V11.496H17.5V0Z' fill='#55A425' />
      </g>
    </g>
    <defs>
      <clipPath id='clip0_5629_7641'>
        <rect width={24} height={24} fill='white' transform='translate(0.5)' />
      </clipPath>
      <clipPath id='clip1_5629_7641'>
        <rect width={24} height={24} fill='white' transform='translate(-0.5)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(SocialIconIcon);
export { Memo as SocialIconIcon };
