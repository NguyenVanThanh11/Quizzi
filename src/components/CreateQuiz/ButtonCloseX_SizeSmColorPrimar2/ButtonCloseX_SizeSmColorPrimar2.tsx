import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { XClose } from '../XClose/XClose.js';
import classes from './ButtonCloseX_SizeSmColorPrimar2.module.css';
import { XCloseIcon } from './XCloseIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 2763:420452 */
export const ButtonCloseX_SizeSmColorPrimar2: FC<Props> = memo(function ButtonCloseX_SizeSmColorPrimar2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <XClose
        className={classes.xClose}
        swap={{
          icon: props.swap?.icon || <XCloseIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
