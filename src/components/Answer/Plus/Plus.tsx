import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Plus.module.css';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from './PlusIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:405282 */
export const Plus: FC<Props> = memo(function Plus(props = {}) {
  const navigate = useNavigate();
  return (
    <div onClick={() => {navigate('/create-workspace');}} className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <PlusIcon className={classes.icon2} />}</div>
    </div>
  );
});
