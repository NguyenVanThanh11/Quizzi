import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../../_resets.module.css';
import { _ModalActions_TypeHorizontalFi } from '../_ModalActions_TypeHorizontalFi/_ModalActions_TypeHorizontalFi.js';
import { ButtonCloseX_SizeLgColorGrayTh } from '../ButtonCloseX_SizeLgColorGrayTh/ButtonCloseX_SizeLgColorGrayTh.js';
import { CheckCircle } from '../CheckCircle/CheckCircle.js';
import { FeaturedIcon_SizeLgColorSucces } from '../FeaturedIcon_SizeLgColorSucces/FeaturedIcon_SizeLgColorSucces.js';
import { CheckCircleIcon } from './CheckCircleIcon.js';
import classes from './Modal_TypeStackedLeftAlignedBr.module.css';

interface Props {
  className?: string;
  classes?: {
    button?: string;
    root?: string;
  };
  hide?: {
    placeholder?: boolean;
    placeholder2?: boolean;
    placeholder3?: boolean;
    placeholder4?: boolean;
  };
  text?: {
    text?: ReactNode;
    supportingText?: ReactNode;
    text2?: ReactNode;
  };
}
/* @figmaId 1105:65365 */
export const Modal_TypeStackedLeftAlignedBr: FC<Props> = memo(function Modal_TypeStackedLeftAlignedBr(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`} style={{width: "100%", height: "800px"}}>
      <div className={classes.modal}>
        <div className={classes.content}>
          <FeaturedIcon_SizeLgColorSucces
            swap={{
              alertCircle: (
                <CheckCircle
                  className={classes.checkCircle}
                  swap={{
                    icon: <CheckCircleIcon className={classes.icon} />,
                  }}
                />
              ),
            }}
          />
          <div className={classes.textAndSupportingText}>
            {props.text?.text != null ? props.text?.text : <div className={classes.text}>Blog post published</div>}
            {props.text?.supportingText != null ? (
              props.text?.supportingText
            ) : (
              <div className={classes.supportingText}>
                This blog post has been published. Team members will be able to edit this post and republish changes.
              </div>
            )}
          </div>
        </div>
        <_ModalActions_TypeHorizontalFi
          classes={{ button2: props.classes?.button || '' }}
          text={{
            text: props.text?.text2,
          }}
        />
        <ButtonCloseX_SizeLgColorGrayTh className={classes.buttonCloseX} />
      </div>
    </div>
  );
});
