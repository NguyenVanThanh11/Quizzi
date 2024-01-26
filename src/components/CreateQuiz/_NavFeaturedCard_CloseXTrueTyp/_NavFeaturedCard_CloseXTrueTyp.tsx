import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _NavFeaturedCardButton_Hierarc2 } from '../_NavFeaturedCardButton_Hierarc2/_NavFeaturedCardButton_Hierarc2.js';
import { _NavFeaturedCardButton_Hierarc } from '../_NavFeaturedCardButton_Hierarc/_NavFeaturedCardButton_Hierarc.js';
import { _PlayButton_SizeXsStyleGlassmo } from '../_PlayButton_SizeXsStyleGlassmo/_PlayButton_SizeXsStyleGlassmo.js';
import { ButtonCloseX_SizeSmColorPrimar } from '../ButtonCloseX_SizeSmColorPrimar/ButtonCloseX_SizeSmColorPrimar.js';
import classes from './_NavFeaturedCard_CloseXTrueTyp.module.css';

interface Props {
  className?: string;
  classes?: {
    image?: string;
    imageWrap?: string;
    root?: string;
  };
  swap?: {
    button?: ReactNode;
  };
  text?: {
    supportingText?: ReactNode;
    text?: ReactNode;
  };
}
/* @figmaId 1158:94987 */
export const _NavFeaturedCard_CloseXTrueTyp: FC<Props> = memo(function _NavFeaturedCard_CloseXTrueTyp(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.textAndSupportingText}>
        <div className={classes.textWrap}>
          <div className={classes.text3}>New features available!</div>
          <ButtonCloseX_SizeSmColorPrimar className={classes.buttonCloseX} />
        </div>
        {props.text?.supportingText != null ? (
          props.text?.supportingText
        ) : (
          <div className={classes.supportingText}>Check out the new dashboard view. Pages now load faster. </div>
        )}
      </div>
      <div className={`${props.classes?.imageWrap || ''} ${classes.imageWrap}`}>
        <div className={`${props.classes?.image || ''} ${classes.image}`}></div>
        <_PlayButton_SizeXsStyleGlassmo
          className={classes._PlayButton}
          swap={{
            button: props.swap?.button,
          }}
        />
      </div>
      <div className={classes.actions}>
        <_NavFeaturedCardButton_Hierarc
          text={{
            text: props.text?.text || <div className={classes.text}>Dismiss</div>,
          }}
        />
        <_NavFeaturedCardButton_Hierarc2
          text={{
            text: <div className={classes.text2}>What’s new?</div>,
          }}
        />
      </div>
    </div>
  );
});
