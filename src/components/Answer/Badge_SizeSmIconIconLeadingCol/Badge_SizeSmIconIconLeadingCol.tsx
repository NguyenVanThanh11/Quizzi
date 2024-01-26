import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ArrowUp } from '../ArrowUp/ArrowUp.js';
import { ArrowUpIcon } from './ArrowUpIcon.js';
import classes from './Badge_SizeSmIconIconLeadingCol.module.css';

interface Props {
  className?: string;
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1224:703 */
export const Badge_SizeSmIconIconLeadingCol: FC<Props> = memo(function Badge_SizeSmIconIconLeadingCol(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <ArrowUp
        className={classes.arrowUp}
        swap={{
          icon: <ArrowUpIcon className={classes.icon} />,
        }}
      />
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Label</div>}
    </div>
  );
});
