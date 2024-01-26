import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Badge_SizeSmIconFalseColorIndi.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1046:5423 */
export const Badge_SizeSmIconFalseColorIndi: FC<Props> = memo(function Badge_SizeSmIconFalseColorIndi(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.text}>Label</div>
    </div>
  );
});
