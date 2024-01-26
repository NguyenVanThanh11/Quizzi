import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './HelpCircle.module.css';
import { HelpCircleIcon } from './HelpCircleIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:405411 */
export const HelpCircle: FC<Props> = memo(function HelpCircle(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <HelpCircleIcon className={classes.icon2} />}</div>
    </div>
  );
});
