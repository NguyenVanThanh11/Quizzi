import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Avatar_SizeMdPlaceholderFalseT } from '../Avatar_SizeMdPlaceholderFalseT/Avatar_SizeMdPlaceholderFalseT.js';
import classes from './AvatarLabelGroup_SizeMdStatusI.module.css';

interface Props {
  className?: string;
  classes?: {
    avatar?: string;
    root?: string;
  };
  text?: {
    supportingText?: ReactNode;
  };
}
/* @figmaId 1109:487 */
export const AvatarLabelGroup_SizeMdStatusI: FC<Props> = memo(function AvatarLabelGroup_SizeMdStatusI(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Avatar_SizeMdPlaceholderFalseT className={`${props.classes?.avatar || ''} ${classes.avatar}`} />
      <div className={classes.textAndSupportingText}>
        <div className={classes.text}>Olivia Rhye</div>
        {props.text?.supportingText != null ? (
          props.text?.supportingText
        ) : (
          <div className={classes.supportingText}>olivia@untitledui.com</div>
        )}
      </div>
    </div>
  );
});
