import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BarChart1.module.css';
import { BarChart1Icon } from './BarChart1Icon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:403851 */
export const BarChart1: FC<Props> = memo(function BarChart1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <BarChart1Icon className={classes.icon2} />}</div>
    </div>
  );
});
