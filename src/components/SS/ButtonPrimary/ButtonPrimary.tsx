import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ButtonPrimary.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 5522:1302 */
export const ButtonPrimary: FC<Props> = memo(function ButtonPrimary(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.background}></div>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>See More</div>}
    </button>
  );
});
