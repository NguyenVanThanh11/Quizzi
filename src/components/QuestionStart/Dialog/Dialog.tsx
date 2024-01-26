import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button_PrimaryFalse } from '../Button_PrimaryFalse/Button_PrimaryFalse.js';
import { Button_PrimaryTrue } from '../Button_PrimaryTrue/Button_PrimaryTrue.js';
import classes from './Dialog.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    text?: boolean;
    buttons?: boolean;
  };
}
/* @figmaId 5573:7431 */
export const Dialog: FC<Props> = memo(function Dialog(props = {}) {
  return (
    <div style={{left: "254px"}} className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.text && (
        <div className={classes.text}>
          <div className={classes.title}>Are you sure?</div>
          <div className={classes.description}>
            <div className={classes.textBlock}>Using glassmorphism can lead</div>
            <div className={classes.textBlock2}>to misunderstanding with professional ux-designers</div>
          </div>
        </div>
      )}
      {!props.hide?.buttons && (
        <div className={classes.buttons}>
          <Button_PrimaryFalse />
          <Button_PrimaryTrue />
        </div>
      )}
    </div>
  );
});
