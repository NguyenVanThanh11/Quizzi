import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Bell1 } from '../Bell1/Bell1.js';
import classes from './_NavItemButton_CurrentFalseSiz.module.css';
import { Bell1Icon } from './Bell1Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    bell1?: ReactNode;
    icon?: ReactNode;
  };
}
/* @figmaId 5424:41 */
export const _NavItemButton_CurrentFalseSiz: FC<Props> = memo(function _NavItemButton_CurrentFalseSiz(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.bell1 || (
        <Bell1
          className={classes.bell1}
          swap={{
            icon: props.swap?.icon || <Bell1Icon className={classes.icon} />,
          }}
        />
      )}
    </button>
  );
});
