import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { _CheckboxBase_CheckedFalseInde } from './_CheckboxBase_CheckedFalseInde/_CheckboxBase_CheckedFalseInde.js';
import { Button_PrimaryTrue } from './Button_PrimaryTrue/Button_PrimaryTrue.js';
import { Dialog } from './Dialog/Dialog.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { Ellipse7Icon } from './Ellipse7Icon.js';
import { Polygon1Icon } from './Polygon1Icon.js';
import { Polygon2Icon } from './Polygon2Icon.js';
import classes from './QuestionStart.module.css';

interface Props {
  className?: string;
  hide?: {
    text?: boolean;
    buttons?: boolean;
  };
}
/* @figmaId 5574:7582 */
export const QuestionStart: FC<Props> = memo(function QuestionStart(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`} style={{width: "100%", height: "1200px"}}>
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
      <Dialog
        className={classes.dialog}
        hide={{
          text: true,
          buttons: true,
        }}
      />
      <Button_PrimaryTrue
        className={classes.primary}
        text={{
          confirm: <div className={classes.confirm}>Next</div>,
        }}
      />
      <div className={classes.question} style={{width: "100%"}}>
        <div className={classes.input}>
          <div className={classes.content}>
            <div className={classes.text}>What is your favorite subject in school?</div>
          </div>
        </div>
        <div className={classes.answer}>
          <div className={classes.checkboxGroupItem}>
            <div className={classes.content2}>
              <div className={classes.input2}>
                <_CheckboxBase_CheckedFalseInde />
              </div>
              <div className={classes.textAndSupportingText}>
                <div className={classes.textAndSubtext}>
                  <div className={classes.text2}>Math</div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.checkboxGroupItem2}>
            <div className={classes.content3}>
              <div className={classes.input3}>
                <_CheckboxBase_CheckedFalseInde />
              </div>
              <div className={classes.textAndSupportingText2}>
                <div className={classes.textAndSubtext2}>
                  <div className={classes.text3}>English</div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.checkboxGroupItem3}>
            <div className={classes.content4}>
              <div className={classes.input4}>
                <_CheckboxBase_CheckedFalseInde />
              </div>
              <div className={classes.textAndSupportingText3}>
                <div className={classes.textAndSubtext3}>
                  <div className={classes.text4}>Science</div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.checkboxGroupItem4}>
            <div className={classes.content5}>
              <div className={classes.input5}>
                <_CheckboxBase_CheckedFalseInde />
              </div>
              <div className={classes.textAndSupportingText4}>
                <div className={classes.textAndSubtext4}>
                  <div className={classes.text5}>History</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
