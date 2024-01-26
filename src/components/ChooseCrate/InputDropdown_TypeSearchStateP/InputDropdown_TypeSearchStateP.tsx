import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { SearchLg } from '../SearchLg/SearchLg.js';
import classes from './InputDropdown_TypeSearchStateP.module.css';
import { SearchLgIcon } from './SearchLgIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    label?: boolean;
    hintText?: boolean;
  };
}
/* @figmaId 3281:379959 */
export const InputDropdown_TypeSearchStateP: FC<Props> = memo(function InputDropdown_TypeSearchStateP(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.inputWithLabel}>
        {!props.hide?.label && <div className={classes.label}>Search</div>}
        <div className={classes.input}>
          <div className={classes.content}>
            <SearchLg
              className={classes.searchLg}
              swap={{
                icon: <SearchLgIcon className={classes.icon} />,
              }}
            />
            <div className={classes.text}>Search</div>
          </div>
        </div>
      </div>
      {!props.hide?.hintText && <div className={classes.hintText}>This is a hint text to help user.</div>}
    </div>
  );
});
