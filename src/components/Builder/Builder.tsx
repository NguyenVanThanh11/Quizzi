import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _NavItemDropdownBase_OpenFalse } from './_NavItemDropdownBase_OpenFalse/_NavItemDropdownBase_OpenFalse.js';
import { BarChartSquare2 } from './BarChartSquare2/BarChartSquare2.js';
import { BarChartSquare2Icon } from './BarChartSquare2Icon.js';
import classes from './Builder.module.css';
import { Button_SizeLgHierarchyPrimaryI } from './Button_SizeLgHierarchyPrimaryI/Button_SizeLgHierarchyPrimaryI.js';
import { ButtonPrimary } from './ButtonPrimary/ButtonPrimary.js';
import { HomeLine } from './HomeLine/HomeLine.js';
import { HomeLineIcon } from './HomeLineIcon.js';
import { LayersThree1 } from './LayersThree1/LayersThree1.js';
import { LayersThree1Icon } from './LayersThree1Icon.js';
import { Plus } from './Plus/Plus.js';
import { PlusIcon } from './PlusIcon.js';
import { SvgIcon2 } from './SvgIcon2.js';
import { SvgIcon3 } from './SvgIcon3.js';
import { SvgIcon4 } from './SvgIcon4.js';
import { SvgIcon5 } from './SvgIcon5.js';
import { SvgIcon6 } from './SvgIcon6.js';
import { SvgIcon } from './SvgIcon.js';
import { Users1 } from './Users1/Users1.js';
import { Users1Icon } from './Users1Icon.js';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  hide?: {
    _Dot?: boolean;
    badge?: boolean;
    chevronDown?: boolean;
    placeholder?: boolean;
    placeholder2?: boolean;
    placeholder3?: boolean;
    placeholder4?: boolean;
  };
}
/* @figmaId 5526:10315 */
export const Builder: FC<Props> = memo(function Builder(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`} style={{width: "100%" , height: "1000px"}}>
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
          <div className={classes.text5}>Quizz 1</div>
        </div>
      </div>
      <div className={classes.navigation} >
        <div onClick={() => {navigate('/dashboard');}} className={classes._NavItemDropdownBase2}>
          <div className={classes._NavItemBase2}>
            <div className={classes.content3}>
              <HomeLine
                swap={{
                  icon: <HomeLineIcon className={classes.icon} />,
                }}
              />
              <div className={classes.text6}>Home</div>
            </div>
          </div>
        </div>
        <div className={classes._NavItemDropdownBase3}>
          <div className={classes._NavItemBase3}>
            <div className={classes.content4}>
              <BarChartSquare2
                swap={{
                  icon: <BarChartSquare2Icon className={classes.icon2} />,
                }}
              />
              <div className={classes.text7}>Editor</div>
            </div>
          </div>
        </div>
        <div className={classes._NavItemDropdownBase4}>
          <div className={classes._NavItemBase4}>
            <div className={classes.content5}>
              <LayersThree1
                swap={{
                  icon: <LayersThree1Icon className={classes.icon3} />,
                }}
              />
              <div className={classes.text8}>Design</div>
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
                  icon: <Users1Icon className={classes.icon4} />,
                }}
              />
            ),
          }}
          hide={{
            chevronDown: true,
          }}
          text={{
            text: <div className={classes.text2}>Setting</div>,
          }}
        />
      </div>
      <div className={classes.content6} style={{width: "100%"}}>
        <div className={classes.createPage}>
          <div className={classes.form}>
            <div className={classes.rectangle5}></div>
            <div className={classes.input2}>
              <div className={classes.content7}>
                <div className={classes.text9}>Click to add title</div>
              </div>
            </div>
            <div className={classes.input3}>
              <div className={classes.content8}>
                <div className={classes.text10}>Click to add subtitle</div>
              </div>
            </div>
            <Button_SizeLgHierarchyPrimaryI
              className={classes.button}
              hide={{
                placeholder: true,
                placeholder2: true,
              }}
              text={{
                text: <div className={classes.text3}>Start</div>,
              }}
            />
          </div>
          <div className={classes.report}>Report</div>
        </div>
        <div className={classes.layout} style={{left: "1335px"}}>
          <div className={classes.add}>
            <div className={classes.checkbox}>
              <div className={classes.input4}>
                <input className={classes._CheckboxBase} type='checkbox'></input>
              </div>
              <div className={classes.textAndSupportingText}>
                <div className={classes.text11}>Image/Video</div>
              </div>
            </div>
          </div>
          <div className={classes.add2}>
            <div className={classes.checkbox2}>
              <div className={classes.input5}>
                <input className={classes._CheckboxBase2} type='checkbox'></input>
              </div>
              <div className={classes.textAndSupportingText2}>
                <div className={classes.text12}>Comment</div>
              </div>
            </div>
          </div>
          <div className={classes.add3}>
            <div className={classes.checkbox3}>
              <div className={classes.input6}>
                <input className={classes._CheckboxBase3} type='checkbox'></input>
              </div>
              <div className={classes.textAndSupportingText3}>
                <div className={classes.text13}>Time to complete</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.page_content}>
          <div className={classes.page}>
            <div className={classes._1}>1</div>
            <div className={classes.frame19}>
              <div className={classes.form2}>
                <div className={classes.rectangle52}></div>
                <div className={classes.input7}>
                  <div className={classes.content9}>
                    <div className={classes.text14}>Click to add title</div>
                  </div>
                </div>
                <div className={classes.input8}>
                  <div className={classes.content10}>
                    <div className={classes.text15}>Click to add subtitle</div>
                  </div>
                </div>
                <Button_SizeLgHierarchyPrimaryI
                  className={classes.button2}
                  hide={{
                    placeholder: true,
                    placeholder2: true,
                  }}
                  text={{
                    text: <div className={classes.text4}>Start</div>,
                  }}
                />
              </div>
              <div className={classes.report2}>Report</div>
            </div>
          </div>
          <div onClick={() => {navigate('/add-question');}} className={classes.textContent}>
            <Plus
              className={classes.plus}
              swap={{
                icon: <PlusIcon className={classes.icon5} />,
              }}
            />
            <div className={classes.content11}>
              <div className={classes.textAndSupportingText4}>
                <div className={classes.text16}>Add question</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.frame20} style={{left: "1335px"}}>
          <div className={classes.alignment}>Alignment</div>
          <div className={classes.alignment2}>
            <button className={classes.button3}>
              <div className={classes.img}>
                <div className={classes.sVG}>
                  <SvgIcon className={classes.icon6} />
                </div>
              </div>
            </button>
            <button className={classes.button4}>
              <div className={classes.img2}>
                <div className={classes.sVG2}>
                  <SvgIcon2 className={classes.icon7} />
                </div>
              </div>
            </button>
            <button className={classes.button5}>
              <div className={classes.img3}>
                <div className={classes.sVG3}>
                  <SvgIcon3 className={classes.icon8} />
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
            <button className={classes.button6}>
              <div className={classes.img4}>
                <div className={classes.sVG4}>
                  <SvgIcon4 className={classes.icon9} />
                </div>
              </div>
            </button>
            <button className={classes.button7}>
              <div className={classes.img5}>
                <div className={classes.sVG5}>
                  <SvgIcon5 className={classes.icon10} />
                </div>
              </div>
            </button>
            <button className={classes.button8}>
              <div className={classes.img6}>
                <div className={classes.sVG6}>
                  <SvgIcon6 className={classes.icon11} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
