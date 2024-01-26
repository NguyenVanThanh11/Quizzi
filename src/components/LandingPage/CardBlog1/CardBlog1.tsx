import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CardBlog1.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle?: string;
    root?: string;
  };
  hide?: {
    rectangle3?: boolean;
  };
  text?: {
    specialFeature?: ReactNode;
    seeMore?: ReactNode;
  };
}
/* @figmaId 5521:931 */
export const CardBlog1: FC<Props> = memo(function CardBlog1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.background}></div>
      {props.text?.specialFeature != null ? (
        props.text?.specialFeature
      ) : (
        <div className={classes.specialFeature}>Special Feature </div>
      )}
      {props.text?.seeMore != null ? props.text?.seeMore : <div className={classes.seeMore}>See More ›</div>}
      <div className={`${props.classes?.rectangle || ''} ${classes.rectangle}`}></div>
      {!props.hide?.rectangle3 && <div className={classes.rectangle3}></div>}
    </div>
  );
});
