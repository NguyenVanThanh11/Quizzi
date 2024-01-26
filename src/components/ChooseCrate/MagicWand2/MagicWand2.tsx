import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './MagicWand2.module.css';
import { MagicWand2Icon } from './MagicWand2Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:406520 */
export const MagicWand2: FC<Props> = memo(function MagicWand2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <MagicWand2Icon className={classes.icon2} />}</div>
    </div>
  );
});
