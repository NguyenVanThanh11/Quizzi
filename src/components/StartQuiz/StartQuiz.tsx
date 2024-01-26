import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { Button_SizeLgHierarchyPrimaryI } from './Button_SizeLgHierarchyPrimaryI/Button_SizeLgHierarchyPrimaryI.js';
import classes from './StartQuiz.module.css';
import { XClose } from './XClose/XClose.js';
import { XCloseIcon } from './XCloseIcon.js';

interface Props {
  className?: string;
  hide?: {
    placeholder?: boolean;
    placeholder2?: boolean;
  };
}
/* @figmaId 5575:9032 */
export const StartQuiz: FC<Props> = memo(function StartQuiz(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`} style={{width: "100%", height: "900px"}}>
      <div className={classes.frame3}>
        <div onClick={() => {navigate('/dashboard');}} className={classes.buttonCloseX}>
          <XClose
            className={classes.xClose}
            swap={{
              icon: <XCloseIcon className={classes.icon} />,
            }}
          />
        </div>
        <div className={classes.rectangle5}></div>
        <div className={classes.discoverYourInternets}>Discover your Internets!</div>
        <Button_SizeLgHierarchyPrimaryI
          className={classes.button}
          hide={{
            placeholder: true,
            placeholder2: true,
          }}
          text={{
            text: <div className={classes.text}>Start</div>,
          }}
        />
      </div>
    </div>
  );
});
