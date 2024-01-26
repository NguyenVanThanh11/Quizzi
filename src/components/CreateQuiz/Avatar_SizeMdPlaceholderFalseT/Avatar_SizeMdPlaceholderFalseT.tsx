import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Avatar_SizeMdPlaceholderFalseT.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 19:1016 */
export const Avatar_SizeMdPlaceholderFalseT: FC<Props> = memo(function Avatar_SizeMdPlaceholderFalseT(props = {}) {
  return (
    <div
      className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    ></div>
  );
});
