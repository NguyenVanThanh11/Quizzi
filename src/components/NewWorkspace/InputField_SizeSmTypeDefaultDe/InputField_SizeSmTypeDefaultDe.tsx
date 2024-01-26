import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { HelpIcon_OpenFalseSupportingTe } from '../HelpIcon_OpenFalseSupportingTe/HelpIcon_OpenFalseSupportingTe.js';
import classes from './InputField_SizeSmTypeDefaultDe.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    helpCircle?: boolean;
    hintText?: boolean;
  };
  text?: {
    label?: ReactNode;
    text?: ReactNode;
  };
}
/* @figmaId 3531:403088 */
export const InputField_SizeSmTypeDefaultDe: FC<Props> = memo(function InputField_SizeSmTypeDefaultDe(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.inputWithLabel}>
        {props.text?.label != null ? props.text?.label : <div className={classes.label}>Email</div>}
        <div className={classes.input}>
          <div className={classes.content}>
            {props.text?.text != null ? props.text?.text : <div className={classes.text}>olivia@untitledui.com</div>}
          </div>
          <HelpIcon_OpenFalseSupportingTe
            hide={{
              helpCircle: props.hide?.helpCircle,
            }}
          />
        </div>
      </div>
      {!props.hide?.hintText && <div className={classes.hintText}>This is a hint text to help user.</div>}
    </div>
  );
});
