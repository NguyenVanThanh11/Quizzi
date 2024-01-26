import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './_Dot_SizeMd.module.css';
import { DotIcon } from './DotIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1046:10693 */
export const _Dot_SizeMd: FC<Props> = memo(function _Dot_SizeMd(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.dot}>
        <DotIcon className={classes.icon} />
      </div>
    </div>
  );
});
