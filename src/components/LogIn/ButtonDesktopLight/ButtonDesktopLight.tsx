import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ButtonDesktopLight_ColorAccent } from '../ButtonDesktopLight_ColorAccent/ButtonDesktopLight_ColorAccent.js';
import classes from './ButtonDesktopLight.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 5425:4070 */
export const ButtonDesktopLight: FC<Props> = memo(function ButtonDesktopLight(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <ButtonDesktopLight_ColorAccent
        className={classes.buttonDesktopLight}
        text={{
          label: props.text?.label || <div className={classes.label}>Button</div>,
        }}
      />
    </button>
  );
});
