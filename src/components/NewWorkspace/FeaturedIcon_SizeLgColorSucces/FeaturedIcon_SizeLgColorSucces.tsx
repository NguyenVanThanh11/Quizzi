import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { AlertCircle } from '../AlertCircle/AlertCircle.js';
import { AlertCircleIcon } from './AlertCircleIcon.js';
import classes from './FeaturedIcon_SizeLgColorSucces.module.css';

interface Props {
  className?: string;
  swap?: {
    alertCircle?: ReactNode;
  };
}
/* @figmaId 1102:5690 */
export const FeaturedIcon_SizeLgColorSucces: FC<Props> = memo(function FeaturedIcon_SizeLgColorSucces(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.swap?.alertCircle || (
        <AlertCircle
          className={classes.alertCircle}
          swap={{
            icon: <AlertCircleIcon className={classes.icon} />,
          }}
        />
      )}
    </div>
  );
});
