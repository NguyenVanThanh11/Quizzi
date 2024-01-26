import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ArrowUp } from '../ArrowUp/ArrowUp.js';
import { ArrowUpIcon } from './ArrowUpIcon.js';
import classes from './Badge_SizeSmIconIconLeadingCol2.module.css';

interface Props {
  className?: string;
  swap?: {
    arrowUp?: ReactNode;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1224:689 */
export const Badge_SizeSmIconIconLeadingCol2: FC<Props> = memo(function Badge_SizeSmIconIconLeadingCol2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.swap?.arrowUp || (
        <ArrowUp
          className={classes.arrowUp}
          swap={{
            icon: <ArrowUpIcon className={classes.icon} />,
          }}
        />
      )}
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Label</div>}
    </div>
  );
});
