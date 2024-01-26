import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Badge_SizeSmIconFalseColorBlue.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1046:5807 */
export const Badge_SizeSmIconFalseColorBlue: FC<Props> = memo(function Badge_SizeSmIconFalseColorBlue(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.text}>Label</div>
    </div>
  );
});
