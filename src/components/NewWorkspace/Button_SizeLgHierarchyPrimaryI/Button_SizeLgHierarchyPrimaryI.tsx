import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Placeholder } from '../Placeholder/Placeholder.js';
import classes from './Button_SizeLgHierarchyPrimaryI.module.css';
import { PlaceholderIcon2 } from './PlaceholderIcon2.js';
import { PlaceholderIcon } from './PlaceholderIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    placeholder?: boolean;
    placeholder2?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 3287:427827 */
export const Button_SizeLgHierarchyPrimaryI: FC<Props> = memo(function Button_SizeLgHierarchyPrimaryI(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.placeholder && (
        <Placeholder
          className={classes.placeholder}
          swap={{
            icon: <PlaceholderIcon className={classes.icon} />,
          }}
        />
      )}
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Button CTA</div>}
      {!props.hide?.placeholder2 && (
        <Placeholder
          className={classes.placeholder2}
          swap={{
            icon: <PlaceholderIcon2 className={classes.icon2} />,
          }}
        />
      )}
    </button>
  );
});
