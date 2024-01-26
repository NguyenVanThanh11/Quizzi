import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_PrimaryTrue.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    confirm?: ReactNode;
  };
}
/* @figmaId 5573:7439 */
export const Button_PrimaryTrue: FC<Props> = memo(function Button_PrimaryTrue(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.confirm != null ? props.text?.confirm : <div className={classes.confirm}>Confirm</div>}
    </button>
  );
});
