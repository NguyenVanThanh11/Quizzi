import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_BreadcrumbButtonBase_CurrentF2.module.css';

interface Props {
  className?: string;
  hide?: {
    text?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 43:3231 */
export const _BreadcrumbButtonBase_CurrentF2: FC<Props> = memo(function _BreadcrumbButtonBase_CurrentF2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {!props.hide?.text &&
        (props.text?.text != null ? props.text?.text : <div className={classes.text}>Projects</div>)}
    </div>
  );
});
