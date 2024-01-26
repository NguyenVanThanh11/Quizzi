import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Check } from '../Check/Check.js';
import classes from './_CheckboxBase_CheckedTrueIndet2.module.css';
import { CheckIcon } from './CheckIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1190:580 */
export const _CheckboxBase_CheckedTrueIndet2: FC<Props> = memo(function _CheckboxBase_CheckedTrueIndet2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Check
        className={classes.check}
        classes={{ icon: classes.icon }}
        swap={{
          icon: props.swap?.icon || (
            <div className={classes.icon}>
              <CheckIcon className={classes.icon2} />
            </div>
          ),
        }}
      />
    </div>
  );
});
