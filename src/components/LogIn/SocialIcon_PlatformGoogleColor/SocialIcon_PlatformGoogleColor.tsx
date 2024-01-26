import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SocialIcon_PlatformGoogleColor.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 5425:4524 */
export const SocialIcon_PlatformGoogleColor: FC<Props> = memo(function SocialIcon_PlatformGoogleColor(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon2} />
      </div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon3} />
      </div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon4} />
      </div>
    </div>
  );
});
