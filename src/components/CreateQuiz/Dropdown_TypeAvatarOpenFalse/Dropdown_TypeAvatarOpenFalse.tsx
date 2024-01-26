import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Avatar_SizeMdPlaceholderFalseT } from '../Avatar_SizeMdPlaceholderFalseT/Avatar_SizeMdPlaceholderFalseT.js';
import classes from './Dropdown_TypeAvatarOpenFalse.module.css';

interface Props {
  className?: string;
  classes?: {
    avatar?: string;
  };
}
/* @figmaId 3281:383097 */
export const Dropdown_TypeAvatarOpenFalse: FC<Props> = memo(function Dropdown_TypeAvatarOpenFalse(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Avatar_SizeMdPlaceholderFalseT className={`${props.classes?.avatar || ''} ${classes.avatar}`} />
    </div>
  );
});
