import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ChevronDown.module.css';
import { ChevronDownIcon } from './ChevronDownIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:404533 */
export const ChevronDown: FC<Props> = memo(function ChevronDown(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <ChevronDownIcon className={classes.icon2} />}</div>
    </div>
  );
});
