import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './_CheckboxBase_CheckedFalseInde.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1097:63887 */
export const _CheckboxBase_CheckedFalseInde: FC<Props> = memo(function _CheckboxBase_CheckedFalseInde(props = {}) {
  return <input className={`${resets.clapyResets} ${classes.root}`} type='checkbox'></input>;
});
