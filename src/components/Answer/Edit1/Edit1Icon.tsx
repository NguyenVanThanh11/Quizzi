import { memo, SVGProps } from 'react';

const Edit1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.876013 16.1156C0.921956 15.7021 0.944928 15.4954 1.00749 15.3022C1.06299 15.1307 1.1414 14.9676 1.24061 14.8171C1.35243 14.6475 1.49952 14.5005 1.7937 14.2063L15 0.999996C16.1046 -0.104572 17.8954 -0.10457 19 0.999998C20.1046 2.10457 20.1046 3.89543 19 5L5.7937 18.2063C5.49952 18.5005 5.35243 18.6475 5.18286 18.7594C5.03242 18.8586 4.86926 18.937 4.69782 18.9925C4.50458 19.055 4.29783 19.078 3.88434 19.124L0.499972 19.5L0.876013 16.1156Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Edit1Icon);
export { Memo as Edit1Icon };
