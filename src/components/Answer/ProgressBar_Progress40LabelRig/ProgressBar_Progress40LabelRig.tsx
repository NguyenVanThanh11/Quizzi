import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ProgressBar_Progress40LabelRig.module.css';

interface Props {
  className?: string;
  classes?: {
    progress?: string;
    root?: string;
  };
  text?: {
    percentage?: ReactNode;
  };
}
/* @figmaId 1085:57403 */
export const ProgressBar_Progress40LabelRig: FC<Props> = memo(function ProgressBar_Progress40LabelRig(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.progressBar}>
        <div className={classes.background}></div>
        <div className={`${props.classes?.progress || ''} ${classes.progress}`}></div>
      </div>
      {props.text?.percentage != null ? props.text?.percentage : <div className={classes.percentage}>40%</div>}
    </div>
  );
});
