import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ChevronRight.module.css';
import { ChevronRightIcon } from './ChevronRightIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
  hide?: {
    icon?: boolean;
  };
}
/* @figmaId 3463:404545 */
export const ChevronRight: FC<Props> = memo(function ChevronRight(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.icon && (
        <div className={classes.icon}>{props.swap?.icon || <ChevronRightIcon className={classes.icon2} />}</div>
      )}
    </div>
  );
});
