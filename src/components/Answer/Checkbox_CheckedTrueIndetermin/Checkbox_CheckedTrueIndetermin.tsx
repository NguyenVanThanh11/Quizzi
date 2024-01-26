import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _CheckboxBase_CheckedTrueIndet } from '../_CheckboxBase_CheckedTrueIndet/_CheckboxBase_CheckedTrueIndet.js';
import classes from './Checkbox_CheckedTrueIndetermin.module.css';

interface Props {
  className?: string;
  classes?: {
    _CheckboxBase?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1224:6857 */
export const Checkbox_CheckedTrueIndetermin: FC<Props> = memo(function Checkbox_CheckedTrueIndetermin(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <_CheckboxBase_CheckedTrueIndet
        className={props.classes?._CheckboxBase || ''}
        swap={{
          icon: props.swap?.icon,
        }}
      />
    </div>
  );
});
