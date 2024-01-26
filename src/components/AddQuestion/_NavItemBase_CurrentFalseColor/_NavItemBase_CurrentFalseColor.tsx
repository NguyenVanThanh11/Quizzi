import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _Dot_SizeMd } from '../_Dot_SizeMd/_Dot_SizeMd.js';
import { Badge_SizeSmIconFalseColorPrim } from '../Badge_SizeSmIconFalseColorPrim/Badge_SizeSmIconFalseColorPrim.js';
import { BarChart1 } from '../BarChart1/BarChart1.js';
import { ChevronDown } from '../ChevronDown/ChevronDown.js';
import classes from './_NavItemBase_CurrentFalseColor.module.css';
import { BarChart1Icon } from './BarChart1Icon.js';
import { ChevronDownIcon } from './ChevronDownIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    content?: string;
  };
  swap?: {
    barChart1?: ReactNode;
  };
  hide?: {
    _Dot?: boolean;
    badge?: boolean;
    chevronDown?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1152:89219 */
export const _NavItemBase_CurrentFalseColor: FC<Props> = memo(function _NavItemBase_CurrentFalseColor(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.content || ''} ${classes.content}`}>
        {!props.hide?._Dot && <_Dot_SizeMd />}
        {props.swap?.barChart1 || (
          <BarChart1
            swap={{
              icon: <BarChart1Icon className={classes.icon} />,
            }}
          />
        )}
        {props.text?.text != null ? props.text?.text : <div className={classes.text2}>Dashboard</div>}
      </div>
      {!props.hide?.badge && (
        <Badge_SizeSmIconFalseColorPrim
          text={{
            text: <div className={classes.text}>10</div>,
          }}
        />
      )}
      {!props.hide?.chevronDown && (
        <ChevronDown
          className={classes.chevronDown}
          swap={{
            icon: <ChevronDownIcon className={classes.icon2} />,
          }}
        />
      )}
    </div>
  );
});
