import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _Dot_SizeSm } from '../_Dot_SizeSm/_Dot_SizeSm.js';
import classes from './Badge_SizeSmIconDotColorSucces.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1046:4845 */
export const Badge_SizeSmIconDotColorSucces: FC<Props> = memo(function Badge_SizeSmIconDotColorSucces(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <_Dot_SizeSm />
      <div className={classes.text}>Label</div>
    </div>
  );
});
