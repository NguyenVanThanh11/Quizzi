import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { ButtonDesktopLight } from './ButtonDesktopLight/ButtonDesktopLight.js';
import { ContentDivider_TypeTextStyleSi } from './ContentDivider_TypeTextStyleSi/ContentDivider_TypeTextStyleSi.js';
import { InputField_SizeMdTypeDefaultDe } from './InputField_SizeMdTypeDefaultDe/InputField_SizeMdTypeDefaultDe.js';
import classes from './LogIn.module.css';
import { SocialButton_SocialGoogleSuppo } from './SocialButton_SocialGoogleSuppo/SocialButton_SocialGoogleSuppo.js';
import { SocialIconIcon } from './SocialIconIcon.js';

interface Props {
  className?: string;
  hide?: {
    helpIcon?: boolean;
    hintText?: boolean;
    helpIcon2?: boolean;
    hintText2?: boolean;
  };
}
/* @figmaId 5627:1483 */
export const LogIn: FC<Props> = memo(function LogIn(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`} style={{height: "1024px"}}>
      <div className={classes.frame17}>
        <div className={classes.welcomeBack}>Welcome back !</div>
        <div className={classes.form}>
          <InputField_SizeMdTypeDefaultDe
            className={classes.inputField}
            hide={{
              helpIcon: true,
              hintText: true,
            }}
            text={{
              text: <input className={classes.text} placeholder="Enter your email"/>
            }}
          />
          <InputField_SizeMdTypeDefaultDe
            className={classes.inputField2}
            hide={{
              helpIcon: true,
              hintText: true,
            }}
            text={{
              label: <div className={classes.label}>Password</div>,
              text: <input className={classes.text2} placeholder="••••••••"/>
            }}
          />
          <ButtonDesktopLight
            className={classes.buttonDesktopLight}
            text={{
              label: <div className={classes.label2}>Forgot your password?</div>,
            }}
          />
        </div>
        <button onClick={() => {navigate('/dashboard');}} className={classes.buttonDesktopLight2}>
          <div className={classes.buttonDesktopLight3}>
            <div  className={classes.label3}>Sign in</div>
          </div>
        </button>
        <ContentDivider_TypeTextStyleSi
          className={classes.contentDivider}
          text={{
            text: <div className={classes.text3}>OR</div>,
          }}
        />
        <SocialButton_SocialGoogleSuppo
          className={classes.socialButton}
          text={{
            text: <div onClick={() => {navigate('/dashboard');}} className={classes.text4}>Continue with Google</div>,
          }}
        />
        <button onClick={() => {navigate('/dashboard');}} className={classes.socialButton2}>
          <div className={classes.socialIcon}>
            <SocialIconIcon className={classes.icon} />
          </div>
          <div className={classes.text5}>Continue with Micosoft</div>
        </button>
      </div>
      <div className={classes.responsly}>Responsly</div>
    </div>
  );
});
