import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../../_resets.module.css';
import { Button_SizeLgHierarchyPrimaryI } from '../Button_SizeLgHierarchyPrimaryI/Button_SizeLgHierarchyPrimaryI.js';
import { Button_SizeLgHierarchySecondar } from '../Button_SizeLgHierarchySecondar/Button_SizeLgHierarchySecondar.js';
import classes from './_ModalActions_TypeHorizontalFi.module.css';

interface Props {
  className?: string;
  classes?: {
    button2?: string;
  };
  hide?: {
    placeholder?: boolean;
    placeholder2?: boolean;
    placeholder3?: boolean;
    placeholder4?: boolean;
    button?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1104:365 */
export const _ModalActions_TypeHorizontalFi: FC<Props> = memo(function _ModalActions_TypeHorizontalFi(props = {}) {
  const navigate = useNavigate();
  return (
    <div onClick={() => {navigate('/builder');}} className={`${resets.clapyResets} ${classes.root}`}>
      {!props.hide?.button && (
        <Button_SizeLgHierarchySecondar
          className={classes.button}
          hide={{
            placeholder: true,
            placeholder2: true,
          }}
          text={{
            text: <div className={classes.text}>Cancel</div>,
          }}
        />
      )}
      <Button_SizeLgHierarchyPrimaryI
        className={`${props.classes?.button2 || ''} ${classes.button2}`}
        hide={{
          placeholder: true,
          placeholder2: true,
        }}
        text={{
          text: props.text?.text || <div className={classes.text2}>Confirm</div>,
        }}
      />
    </div>
  );
});
