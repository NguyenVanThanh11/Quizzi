import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_PrimaryFalse.module.css';

interface Props {
  className?: string;
}
/* @figmaId 5573:7441 */
export const Button_PrimaryFalse: FC<Props> = memo(function Button_PrimaryFalse(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.cancel}>Cancel</div>
    </button>
  );
});
