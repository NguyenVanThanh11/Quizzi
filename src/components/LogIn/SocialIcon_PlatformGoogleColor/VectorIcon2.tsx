import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.24 10.0008C14.4764 10.0008 17.2058 8.93818 19.1944 7.10389L15.3274 4.10555C14.2516 4.8375 12.8626 5.25197 11.2444 5.25197C8.11376 5.25197 5.45934 3.1399 4.50693 0.300293H0.516479V3.39124C2.55359 7.44341 6.70278 10.0008 11.24 10.0008V10.0008Z'
      fill='#34A853'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
