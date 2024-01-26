import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _NavFeaturedCardButton_Hierarc3 } from '../_NavFeaturedCardButton_Hierarc3/_NavFeaturedCardButton_Hierarc3.js';
import { _NavFeaturedCardButton_Hierarc4 } from '../_NavFeaturedCardButton_Hierarc4/_NavFeaturedCardButton_Hierarc4.js';
import { ButtonCloseX_SizeSmColorPrimar2 } from '../ButtonCloseX_SizeSmColorPrimar2/ButtonCloseX_SizeSmColorPrimar2.js';
import { ProgressBar_Progress80LabelFal } from '../ProgressBar_Progress80LabelFal/ProgressBar_Progress80LabelFal.js';
import classes from './_NavFeaturedCard_CloseXTrueTyp2.module.css';

interface Props {
  className?: string;
  classes?: {
    background?: string;
    progress?: string;
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
  text?: {
    text?: ReactNode;
    supportingText?: ReactNode;
    text2?: ReactNode;
    text3?: ReactNode;
  };
}
/* @figmaId 1158:93398 */
export const _NavFeaturedCard_CloseXTrueTyp2: FC<Props> = memo(function _NavFeaturedCard_CloseXTrueTyp2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.textAndSupportingText}>
        <div className={classes.textWrap}>
          {props.text?.text != null ? props.text?.text : <div className={classes.text3}>Used space</div>}
          <ButtonCloseX_SizeSmColorPrimar2
            className={classes.buttonCloseX}
            swap={{
              icon: props.swap?.icon,
            }}
          />
        </div>
        {props.text?.supportingText != null ? (
          props.text?.supportingText
        ) : (
          <div className={classes.supportingText}>Your team has used 80% of your available space. Need more?</div>
        )}
      </div>
      <ProgressBar_Progress80LabelFal
        classes={{
          background: `${props.classes?.background || ''} ${classes.background}`,
          progress: props.classes?.progress || '',
        }}
      />
      <div className={classes.actions}>
        <_NavFeaturedCardButton_Hierarc3
          text={{
            text: props.text?.text2 || <div className={classes.text}>Dismiss</div>,
          }}
        />
        <_NavFeaturedCardButton_Hierarc4
          text={{
            text: props.text?.text3 || <div className={classes.text2}>Upgrade plan</div>,
          }}
        />
      </div>
    </div>
  );
});
