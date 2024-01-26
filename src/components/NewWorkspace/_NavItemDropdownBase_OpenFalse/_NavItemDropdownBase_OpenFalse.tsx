import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _NavItemBase_CurrentFalseColor } from '../_NavItemBase_CurrentFalseColor/_NavItemBase_CurrentFalseColor.js';
import classes from './_NavItemDropdownBase_OpenFalse.module.css';

interface Props {
  className?: string;
  classes?: {
    _NavItemBase?: string;
    root?: string;
  };
  swap?: {
    barChart1?: ReactNode;
  };
  hide?: {
    _Dot?: boolean;
    badge?: boolean;
    chevronDown?: boolean;
    barChart1?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1152:90365 */
export const _NavItemDropdownBase_OpenFalse: FC<Props> = memo(function _NavItemDropdownBase_OpenFalse(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <_NavItemBase_CurrentFalseColor
        className={`${props.classes?._NavItemBase || ''} ${classes._NavItemBase}`}
        swap={{
          barChart1: props.swap?.barChart1,
        }}
        hide={{
          _Dot: true,
          badge: true,
          chevronDown: props.hide?.chevronDown,
          barChart1: props.hide?.barChart1,
        }}
        text={{
          text: props.text?.text,
        }}
      />
    </div>
  );
});
