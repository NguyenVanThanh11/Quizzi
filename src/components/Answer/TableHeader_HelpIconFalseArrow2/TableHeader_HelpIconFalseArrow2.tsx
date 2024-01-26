import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TableHeader_HelpIconFalseArrow2.module.css';

interface Props {
  className?: string;
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1221:106787 */
export const TableHeader_HelpIconFalseArrow2: FC<Props> = memo(function TableHeader_HelpIconFalseArrow2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Company</div>}
    </div>
  );
});
