import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _CheckboxBase_CheckedFalseInde } from '../_CheckboxBase_CheckedFalseInde/_CheckboxBase_CheckedFalseInde.js';
import classes from './Checkbox_CheckedFalseIndetermi.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1100:295 */
export const Checkbox_CheckedFalseIndetermi: FC<Props> = memo(function Checkbox_CheckedFalseIndetermi(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <_CheckboxBase_CheckedFalseInde />
    </div>
  );
});
