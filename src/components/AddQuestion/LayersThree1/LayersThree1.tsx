import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './LayersThree1.module.css';
import { LayersThree1Icon } from './LayersThree1Icon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:403768 */
export const LayersThree1: FC<Props> = memo(function LayersThree1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <LayersThree1Icon className={classes.icon2} />}</div>
    </div>
  );
});
