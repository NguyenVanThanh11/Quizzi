import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Placeholder } from '../Placeholder/Placeholder.js';
import classes from './Button_SizeSmHierarchyTertiary.module.css';
import { PlaceholderIcon } from './PlaceholderIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    placeholder?: ReactNode;
  };
}
/* @figmaId 3287:429559 */
export const Button_SizeSmHierarchyTertiary: FC<Props> = memo(function Button_SizeSmHierarchyTertiary(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.placeholder || (
        <Placeholder
          className={classes.placeholder}
          swap={{
            icon: <PlaceholderIcon className={classes.icon} />,
          }}
        />
      )}
    </div>
  );
});
