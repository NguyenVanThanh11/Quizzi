import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { HelpIcon_OpenFalseSupportingTe } from '../HelpIcon_OpenFalseSupportingTe/HelpIcon_OpenFalseSupportingTe.js';
import classes from './InputField_SizeMdTypeDefaultDe.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    helpIcon?: boolean;
    hintText?: boolean;
  };
  text?: {
    text?: ReactNode;
    label?: ReactNode;
  };
}
/* @figmaId 5425:1058 */
export const InputField_SizeMdTypeDefaultDe: FC<Props> = memo(function InputField_SizeMdTypeDefaultDe(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.inputWithLabel}>
        {props.text?.label != null ? props.text?.label : <div className={classes.label}>Email</div>}
        <div className={classes.input}>
          <div className={classes.content}>
            {props.text?.text != null ? props.text?.text : <div className={classes.text}>olivia@untitledui.com</div>}
          </div>
          {!props.hide?.helpIcon && <HelpIcon_OpenFalseSupportingTe />}
        </div>
      </div>
      {!props.hide?.hintText && <div className={classes.hintText}>This is a hint text to help user.</div>}
    </div>
  );
});
