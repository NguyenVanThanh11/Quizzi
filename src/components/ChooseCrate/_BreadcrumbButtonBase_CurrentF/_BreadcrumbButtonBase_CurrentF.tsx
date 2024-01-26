import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { HomeLine } from '../HomeLine/HomeLine.js';
import classes from './_BreadcrumbButtonBase_CurrentF.module.css';
import { HomeLineIcon } from './HomeLineIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 43:3220 */
export const _BreadcrumbButtonBase_CurrentF: FC<Props> = memo(function _BreadcrumbButtonBase_CurrentF(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <HomeLine
        className={classes.homeLine}
        classes={{ icon: classes.icon }}
        swap={{
          icon: (
            <div className={classes.icon}>
              <HomeLineIcon className={classes.icon2} />
            </div>
          ),
        }}
      />
    </div>
  );
});
