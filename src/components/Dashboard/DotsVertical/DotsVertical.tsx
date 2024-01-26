import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './DotsVertical.module.css';
import { DotsVerticalIcon } from './DotsVerticalIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:405039 */
export const DotsVertical: FC<Props> = memo(function DotsVertical(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <DotsVerticalIcon className={classes.icon2} />}</div>
    </div>
  );
});
