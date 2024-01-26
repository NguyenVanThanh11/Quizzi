import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { More } from '../More/More.js';
import classes from './_CardTextContentDesktopLight_C.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
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
/* @figmaId 5460:21451 */
export const _CardTextContentDesktopLight_C: FC<Props> = memo(function _CardTextContentDesktopLight_C(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.header}>
        {props.text?.title != null ? props.text?.title : <div className={classes.title}>Card title</div>}
        {!props.hide?.more && (
          <More
            swap={{
              vector: <VectorIcon className={classes.icon} />,
            }}
          />
        )}
      </div>
      {props.text?.metadata != null ? (
        props.text?.metadata
      ) : (
        <div className={classes.metadata}>Optional metadata should be kept to two or three lines.</div>
      )}
    </div>
  );
});
