import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './DownloadCloud2.module.css';
import { DownloadCloud2Icon } from './DownloadCloud2Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:405339 */
export const DownloadCloud2: FC<Props> = memo(function DownloadCloud2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <DownloadCloud2Icon className={classes.icon2} />}</div>
    </div>
  );
});
