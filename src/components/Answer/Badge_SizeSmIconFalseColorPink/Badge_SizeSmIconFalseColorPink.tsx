import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Badge_SizeSmIconFalseColorPink.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1046:5999 */
export const Badge_SizeSmIconFalseColorPink: FC<Props> = memo(function Badge_SizeSmIconFalseColorPink(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.text}>Label</div>
    </div>
  );
});
