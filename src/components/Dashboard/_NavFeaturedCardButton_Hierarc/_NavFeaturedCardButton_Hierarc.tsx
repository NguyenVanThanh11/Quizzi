import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_NavFeaturedCardButton_Hierarc.module.css';

interface Props {
  className?: string;
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 2763:418580 */
export const _NavFeaturedCardButton_Hierarc: FC<Props> = memo(function _NavFeaturedCardButton_Hierarc(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Button CTA</div>}
    </div>
  );
});
