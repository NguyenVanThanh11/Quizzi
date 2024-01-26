import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Users1.module.css';
import { Users1Icon } from './Users1Icon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:405729 */
export const Users1: FC<Props> = memo(function Users1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Users1Icon className={classes.icon2} />}</div>
    </div>
  );
});
