import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ProgressBar_Progress60LabelRig } from '../ProgressBar_Progress60LabelRig/ProgressBar_Progress60LabelRig.js';
import classes from './TableCell_StyleProgressBarSupp.module.css';

interface Props {
  className?: string;
  classes?: {
    progress?: string;
    root?: string;
  };
  swap?: {
    progressBar?: ReactNode;
  };
  text?: {
    percentage?: ReactNode;
  };
}
/* @figmaId 1224:1209 */
export const TableCell_StyleProgressBarSupp: FC<Props> = memo(function TableCell_StyleProgressBarSupp(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.progressBar || (
        <ProgressBar_Progress60LabelRig
          className={classes.progressBar}
          classes={{ progress: props.classes?.progress || '' }}
          text={{
            percentage: props.text?.percentage,
          }}
        />
      )}
    </div>
  );
});
