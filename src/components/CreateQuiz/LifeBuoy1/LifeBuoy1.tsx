import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './LifeBuoy1.module.css';
import { LifeBuoy1Icon } from './LifeBuoy1Icon.js';

interface Props {
  className?: string;
  classes?: {
    icon?: string;
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:405456 */
export const LifeBuoy1: FC<Props> = memo(function LifeBuoy1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.icon || ''} ${classes.icon}`}>
        {props.swap?.icon || <LifeBuoy1Icon className={classes.icon2} />}
      </div>
    </div>
  );
});
