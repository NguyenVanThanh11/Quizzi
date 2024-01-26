import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './AlertCircle.module.css';
import { AlertCircleIcon } from './AlertCircleIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:405479 */
export const AlertCircle: FC<Props> = memo(function AlertCircle(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <AlertCircleIcon className={classes.icon2} />}</div>
    </div>
  );
});
