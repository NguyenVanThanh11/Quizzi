import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_PlayButton_SizeXsStyleGlassmo.module.css';
import { ButtonIcon } from './ButtonIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    button?: ReactNode;
  };
}
/* @figmaId 1377:13016 */
export const _PlayButton_SizeXsStyleGlassmo: FC<Props> = memo(function _PlayButton_SizeXsStyleGlassmo(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.button}>{props.swap?.button || <ButtonIcon className={classes.icon} />}</div>
    </button>
  );
});
