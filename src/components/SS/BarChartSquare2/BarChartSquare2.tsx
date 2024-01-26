import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BarChartSquare2.module.css';
import { BarChartSquare2Icon } from './BarChartSquare2Icon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:403899 */
export const BarChartSquare2: FC<Props> = memo(function BarChartSquare2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <BarChartSquare2Icon className={classes.icon2} />}</div>
    </div>
  );
});
