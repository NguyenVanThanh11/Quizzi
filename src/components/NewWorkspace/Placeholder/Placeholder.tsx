import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Placeholder.module.css';
import { PlaceholderIcon } from './PlaceholderIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3465:410042 */
export const Placeholder: FC<Props> = memo(function Placeholder(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <PlaceholderIcon className={classes.icon2} />}</div>
    </div>
  );
});
