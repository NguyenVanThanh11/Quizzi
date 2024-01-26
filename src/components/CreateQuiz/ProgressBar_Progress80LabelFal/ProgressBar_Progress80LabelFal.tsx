import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ProgressBar_Progress80LabelFal.module.css';

interface Props {
  className?: string;
  classes?: {
    background?: string;
    progress?: string;
  };
}
/* @figmaId 1086:130 */
export const ProgressBar_Progress80LabelFal: FC<Props> = memo(function ProgressBar_Progress80LabelFal(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.progressBar}>
        <div className={`${props.classes?.background || ''} ${classes.background}`}></div>
        <div className={`${props.classes?.progress || ''} ${classes.progress}`}></div>
      </div>
    </div>
  );
});
