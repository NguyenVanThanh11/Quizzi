import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ContentDivider_TypeTextStyleSi.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 5425:4085 */
export const ContentDivider_TypeTextStyleSi: FC<Props> = memo(function ContentDivider_TypeTextStyleSi(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.divider}></div>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Today</div>}
      <div className={classes.divider2}></div>
    </div>
  );
});
