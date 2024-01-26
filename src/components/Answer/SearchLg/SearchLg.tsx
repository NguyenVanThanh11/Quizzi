import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './SearchLg.module.css';
import { SearchLgIcon } from './SearchLgIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:405300 */
export const SearchLg: FC<Props> = memo(function SearchLg(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <SearchLgIcon className={classes.icon2} />}</div>
    </div>
  );
});
