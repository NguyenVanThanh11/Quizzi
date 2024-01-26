import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _CheckboxBase_CheckedTrueIndet2 } from '../_CheckboxBase_CheckedTrueIndet2/_CheckboxBase_CheckedTrueIndet2.js';
import classes from './Checkbox_CheckedTrueIndetermin2.module.css';

interface Props {
  className?: string;
  classes?: {
    _CheckboxBase?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1100:334 */
export const Checkbox_CheckedTrueIndetermin2: FC<Props> = memo(function Checkbox_CheckedTrueIndetermin2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <_CheckboxBase_CheckedTrueIndet2
        className={props.classes?._CheckboxBase || ''}
        swap={{
          icon: props.swap?.icon,
        }}
      />
    </div>
  );
});
