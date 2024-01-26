import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { _CheckboxBase_CheckedFalseInde } from './_CheckboxBase_CheckedFalseInde/_CheckboxBase_CheckedFalseInde.js';
import { _NavItemDropdownBase_OpenFalse } from './_NavItemDropdownBase_OpenFalse/_NavItemDropdownBase_OpenFalse.js';
import classes from './AddQuestion.module.css';
import { BarChartSquare2 } from './BarChartSquare2/BarChartSquare2.js';
import { BarChartSquare2Icon } from './BarChartSquare2Icon.js';
import { Button_PrimaryTrue } from './Button_PrimaryTrue/Button_PrimaryTrue.js';
import { Button_SizeLgHierarchyPrimaryI } from './Button_SizeLgHierarchyPrimaryI/Button_SizeLgHierarchyPrimaryI.js';
import { ButtonPrimary } from './ButtonPrimary/ButtonPrimary.js';
import { HomeLine } from './HomeLine/HomeLine.js';
import { HomeLineIcon } from './HomeLineIcon.js';
import { LayersThree1 } from './LayersThree1/LayersThree1.js';
import { LayersThree1Icon } from './LayersThree1Icon.js';
import { Plus } from './Plus/Plus.js';
import { PlusIcon2 } from './PlusIcon2.js';
import { PlusIcon } from './PlusIcon.js';
import { SvgIcon2 } from './SvgIcon2.js';
import { SvgIcon3 } from './SvgIcon3.js';
import { SvgIcon4 } from './SvgIcon4.js';
import { SvgIcon5 } from './SvgIcon5.js';
import { SvgIcon6 } from './SvgIcon6.js';
import { SvgIcon } from './SvgIcon.js';
import { Users1 } from './Users1/Users1.js';
import { Users1Icon } from './Users1Icon.js';
import { XClose } from './XClose/XClose.js';
import { XCloseIcon } from './XCloseIcon.js';

interface Props {
  className?: string;
  hide?: {
    placeholder?: boolean;
    placeholder2?: boolean;
    _Dot?: boolean;
    badge?: boolean;
    chevronDown?: boolean;
  };
}
/* @figmaId 5526:12045 */
export const AddQuestion: FC<Props> = memo(function AddQuestion(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`} style={{width: "100%", height: "1000px"}}>
      <div className={classes.naviationLeft} style={{width: "100%"}}>
        <div className={classes.background}></div>
        <div className={classes.link}>Help</div>
        <div className={classes.link2}>Account</div>
        <ButtonPrimary
          className={classes.buttonPrimary}
          text={{
            text: <div className={classes.text}>Review</div>,
          }}
        />
        <div className={classes.link3}>Create</div>
        <div className={classes.link4}>Connect</div>
        <div className={classes.link5}>Share</div>
        <div className={classes.link6}>Analyse</div>
        <div className={classes.logo}>Responsly</div>
      </div>
      <div className={classes.input}>
        <div className={classes.content2}>
          <div className={classes.text4}>Quizz 1</div>
        </div>
      </div>
      <div className={classes.content3} style={{width: "100%"}}>
        <div className={classes.createPage}>
          <div className={classes.report}>Report</div>
          <div className={classes.question}>
            <div className={classes.input2}>
              <div className={classes.content4}>
                <div className={classes.text5}>Put your question here</div>
              </div>
            </div>
            <div className={classes.answer}>
              <div className={classes.checkboxGroupItem}>
                <div className={classes.content5}>
                  <div className={classes.input3}>
                    <_CheckboxBase_CheckedFalseInde />
                  </div>
                  <div className={classes.textAndSupportingText}>
                    <div className={classes.textAndSubtext}>
                      <div className={classes.text6}>Answer 1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.checkboxGroupItem2}>
                <div className={classes.content6}>
                  <div className={classes.input4}>
                    <_CheckboxBase_CheckedFalseInde />
                  </div>
                  <div className={classes.textAndSupportingText2}>
                    <div className={classes.textAndSubtext2}>
                      <div className={classes.text7}>Answer 2</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.checkboxGroupItem3}>
                <div className={classes.content7}>
                  <div className={classes.input5}>
                    <_CheckboxBase_CheckedFalseInde />
                  </div>
                  <div className={classes.textAndSupportingText3}>
                    <div className={classes.textAndSubtext3}>
                      <div className={classes.text8}>Answer 3</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.checkboxGroupItem4}>
                <Plus
                  className={classes.plus}
                  swap={{
                    icon: <PlusIcon className={classes.icon} />,
                  }}
                />
                <div className={classes.content8}>
                  <div className={classes.input6}></div>
                  <div className={classes.textAndSupportingText4}>
                    <div className={classes.textAndSubtext4}>
                      <div className={classes.text9}>Add new answer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <XClose
            className={classes.xClose}
            swap={{
              icon: <XCloseIcon className={classes.icon2} />,
            }}
          />
        </div>
        <div className={classes.layout} style={{left: "1335px"}}>
          <div className={classes.add}>
            <div className={classes.checkbox}>
              <div className={classes.input7}>
                <input className={classes._CheckboxBase} type='checkbox'></input>
              </div>
              <div className={classes.textAndSupportingText5}>
                <div className={classes.text10}>Image/Video</div>
              </div>
            </div>
          </div>
          <div className={classes.add2}>
            <div className={classes.checkbox2}>
              <div className={classes.input8}>
                <input className={classes._CheckboxBase2} type='checkbox'></input>
              </div>
              <div className={classes.textAndSupportingText6}>
                <div className={classes.text11}>Comment</div>
              </div>
            </div>
          </div>
          <div className={classes.add3}>
            <div className={classes.checkbox3}>
              <div className={classes.input9}>
                <input className={classes._CheckboxBase3} type='checkbox'></input>
              </div>
              <div className={classes.textAndSupportingText7}>
                <div className={classes.text12}>Time to complete</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.page_content}>
          <div className={classes.page}>
            <div className={classes._1}>1</div>
            <div className={classes.frame19}>
              <div className={classes.form}>
                <div className={classes.rectangle5}></div>
                <div className={classes.input10}>
                  <div className={classes.content9}>
                    <div className={classes.text13}>Click to add title</div>
                  </div>
                </div>
                <div className={classes.input11}>
                  <div className={classes.content10}>
                    <div className={classes.text14}>Click to add subtitle</div>
                  </div>
                </div>
                <Button_SizeLgHierarchyPrimaryI
                  className={classes.button}
                  hide={{
                    placeholder: true,
                    placeholder2: true,
                  }}
                  text={{
                    text: <div className={classes.text2}>Start</div>,
                  }}
                />
              </div>
              <div className={classes.report2}>Report</div>
            </div>
          </div>
          <div className={classes.page2}>
            <div className={classes._2}>2</div>
            <div className={classes.frame192}>
              <div className={classes.report3}>Report</div>
            </div>
          </div>
          <div className={classes.textContent}>
            <Plus
              className={classes.plus2}
              swap={{
                icon: <PlusIcon2 className={classes.icon3} />,
              }}
            />
            <div className={classes.content11}>
              <div className={classes.textAndSupportingText8}>
                <div className={classes.text15}>Add question</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.frame20} style={{left: "1335px"}}>
          <div className={classes.alignment}>Alignment</div>
          <div className={classes.alignment2}>
            <button className={classes.button2}>
              <div className={classes.img}>
                <div className={classes.sVG}>
                  <SvgIcon className={classes.icon8} />
                </div>
              </div>
            </button>
            <button className={classes.button3}>
              <div className={classes.img2}>
                <div className={classes.sVG2}>
                  <SvgIcon2 className={classes.icon9} />
                </div>
              </div>
            </button>
            <button className={classes.button4}>
              <div className={classes.img3}>
                <div className={classes.sVG3}>
                  <SvgIcon3 className={classes.icon10} />
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className={classes.frame21} style={{left: "1335px"}}>
          <div className={classes.font}>
            <p className={classes.labelWrapper}>Font</p>
          </div>
          <div className={classes.font2}>
            <button className={classes.button5}>
              <div className={classes.img4}>
                <div className={classes.sVG4}>
                  <SvgIcon4 className={classes.icon11} />
                </div>
              </div>
            </button>
            <button className={classes.button6}>
              <div className={classes.img5}>
                <div className={classes.sVG5}>
                  <SvgIcon5 className={classes.icon12} />
                </div>
              </div>
            </button>
            <button className={classes.button7}>
              <div className={classes.img6}>
                <div className={classes.sVG6}>
                  <SvgIcon6 className={classes.icon13} />
                </div>
              </div>
            </button>
          </div>
        </div>
        <Button_PrimaryTrue
          className={classes.primary}
          text={{
            confirm: <div className={classes.confirm}>SAVE</div>,
          }}
        />
      </div>
      <div className={classes.navigation}>
        <div onClick={() => {navigate('/dashboard');}} className={classes._NavItemDropdownBase2}>
          <div className={classes._NavItemBase2}>
            <div className={classes.content12}>
              <HomeLine
                swap={{
                  icon: <HomeLineIcon className={classes.icon4} />,
                }}
              />
              <div className={classes.text16}>Home</div>
            </div>
          </div>
        </div>
        <div className={classes._NavItemDropdownBase3}>
          <div className={classes._NavItemBase3}>
            <div className={classes.content13}>
              <BarChartSquare2
                swap={{
                  icon: <BarChartSquare2Icon className={classes.icon5} />,
                }}
              />
              <div className={classes.text17}>Editor</div>
            </div>
          </div>
        </div>
        <div className={classes._NavItemDropdownBase4}>
          <div className={classes._NavItemBase4}>
            <div className={classes.content14}>
              <LayersThree1
                swap={{
                  icon: <LayersThree1Icon className={classes.icon6} />,
                }}
              />
              <div className={classes.text18}>Design</div>
            </div>
          </div>
        </div>
        <_NavItemDropdownBase_OpenFalse
          className={classes._NavItemDropdownBase}
          classes={{ content: classes.content, _NavItemBase: classes._NavItemBase }}
          swap={{
            barChart1: (
              <Users1
                swap={{
                  icon: <Users1Icon className={classes.icon7} />,
                }}
              />
            ),
          }}
          hide={{
            chevronDown: true,
          }}
          text={{
            text: <div className={classes.text3}>Setting</div>,
          }}
        />
      </div>
    </div>
  );
});
