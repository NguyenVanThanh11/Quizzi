import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { Button_PrimaryTrue } from './Button_PrimaryTrue/Button_PrimaryTrue.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { Ellipse7Icon } from './Ellipse7Icon.js';
import { Polygon1Icon } from './Polygon1Icon.js';
import { Polygon2Icon } from './Polygon2Icon.js';
import classes from './QuestionResult.module.css';

interface Props {
  className?: string;
}
/* @figmaId 5574:9010 */
export const QuestionResult: FC<Props> = memo(function QuestionResult(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`} style={{height: "1200px"}}>
      <div className={classes.rectangle40}></div>
      <div className={classes.polygon2}>
        <Polygon2Icon className={classes.icon} />
      </div>
      <div className={classes.polygon1}>
        <Polygon1Icon className={classes.icon2} />
      </div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon3} />
      </div>
      <div className={classes.ellipse7}>
        <Ellipse7Icon className={classes.icon4} />
      </div>
      <div className={classes.responsly}>Responsly</div>
      <div className={classes.group6}></div>
      <div onClick={() => {navigate('/answer');}} className={classes.dialog}>
        <Button_PrimaryTrue
          className={classes.primary}
          text={{
            confirm: <div className={classes.confirm}>Next</div>,
          }}
        />
        <Button_PrimaryTrue
          className={classes.primary2}
          text={{
            confirm: <div className={classes.confirm2}>5 OUT OF 5 - (100%)</div>,
          }}
        />
        <div className={classes.emoji}></div>
        <div className={classes.rESULT}>RESULT</div>
      </div>
    </div>
  );
});
