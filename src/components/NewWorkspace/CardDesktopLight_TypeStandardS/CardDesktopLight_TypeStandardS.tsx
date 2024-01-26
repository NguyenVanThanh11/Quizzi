import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _CardTextContentDesktopLight_C } from '../_CardTextContentDesktopLight_C/_CardTextContentDesktopLight_C.js';
import classes from './CardDesktopLight_TypeStandardS.module.css';

interface Props {
  className?: string;
  classes?: {
    image?: string;
    root?: string;
  };
  hide?: {
    more?: boolean;
  };
  text?: {
    title?: ReactNode;
    metadata?: ReactNode;
  };
}
/* @figmaId 5460:21541 */
export const CardDesktopLight_TypeStandardS: FC<Props> = memo(function CardDesktopLight_TypeStandardS(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.image || ''} ${classes.image}`}></div>
      <_CardTextContentDesktopLight_C
        className={classes.textContent}
        hide={{
          more: props.hide?.more,
        }}
        text={{
          title: props.text?.title,
          metadata: props.text?.metadata,
        }}
      />
    </div>
  );
});
