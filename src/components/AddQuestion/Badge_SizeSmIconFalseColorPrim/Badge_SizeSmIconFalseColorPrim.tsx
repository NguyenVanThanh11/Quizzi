import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Badge_SizeSmIconFalseColorPrim.module.css';

interface Props {
  className?: string;
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1046:3818 */
export const Badge_SizeSmIconFalseColorPrim: FC<Props> = memo(function Badge_SizeSmIconFalseColorPrim(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Label</div>}
    </div>
  );
});
