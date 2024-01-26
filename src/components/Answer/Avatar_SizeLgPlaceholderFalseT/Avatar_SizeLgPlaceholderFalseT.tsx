import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Avatar_SizeLgPlaceholderFalseT.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1198:100667 */
export const Avatar_SizeLgPlaceholderFalseT: FC<Props> = memo(function Avatar_SizeLgPlaceholderFalseT(props = {}) {
  return (
    <div
      className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    ></div>
  );
});
