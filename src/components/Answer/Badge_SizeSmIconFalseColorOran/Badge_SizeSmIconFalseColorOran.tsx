import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Badge_SizeSmIconFalseColorOran.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1046:6383 */
export const Badge_SizeSmIconFalseColorOran: FC<Props> = memo(function Badge_SizeSmIconFalseColorOran(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.text}>Label</div>
    </div>
  );
});
