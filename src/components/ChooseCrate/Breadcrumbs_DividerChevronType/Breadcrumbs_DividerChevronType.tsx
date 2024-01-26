import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _BreadcrumbButtonBase_CurrentF2 } from '../_BreadcrumbButtonBase_CurrentF2/_BreadcrumbButtonBase_CurrentF2.js';
import { _BreadcrumbButtonBase_CurrentF } from '../_BreadcrumbButtonBase_CurrentF/_BreadcrumbButtonBase_CurrentF.js';
import { _BreadcrumbButtonBase_CurrentT } from '../_BreadcrumbButtonBase_CurrentT/_BreadcrumbButtonBase_CurrentT.js';
import { ChevronRight } from '../ChevronRight/ChevronRight.js';
import classes from './Breadcrumbs_DividerChevronType.module.css';
import { ChevronRightIcon2 } from './ChevronRightIcon2.js';
import { ChevronRightIcon3 } from './ChevronRightIcon3.js';
import { ChevronRightIcon } from './ChevronRightIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    chevronRight?: boolean;
    text?: boolean;
    icon?: boolean;
    _BreadcrumbButtonBase?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 53:1190 */
export const Breadcrumbs_DividerChevronType: FC<Props> = memo(function Breadcrumbs_DividerChevronType(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <_BreadcrumbButtonBase_CurrentF />
      <ChevronRight
        className={classes.chevronRight}
        swap={{
          icon: <ChevronRightIcon className={classes.icon} />,
        }}
      />
      <_BreadcrumbButtonBase_CurrentF2
        text={{
          text: props.text?.text || <div className={classes.text}>Settings</div>,
        }}
      />
      {!props.hide?.chevronRight && (
        <ChevronRight
          className={classes.chevronRight2}
          swap={{
            icon: <ChevronRightIcon2 className={classes.icon2} />,
          }}
        />
      )}
      <_BreadcrumbButtonBase_CurrentF2
        hide={{
          text: props.hide?.text,
        }}
        text={{
          text: <div className={classes.text2}>...</div>,
        }}
      />
      <ChevronRight
        className={classes.chevronRight3}
        swap={{
          icon: <ChevronRightIcon3 className={classes.icon3} />,
        }}
        hide={{
          icon: props.hide?.icon,
        }}
      />
      {!props.hide?._BreadcrumbButtonBase && (
        <_BreadcrumbButtonBase_CurrentT
          text={{
            text: <div className={classes.text3}>Team</div>,
          }}
        />
      )}
    </div>
  );
});
