import { memo } from 'react';
import type { FC } from 'react';

import { useNavigate } from 'react-router-dom';
import resets from '../_resets.module.css';
import { _Dot_SizeMd } from './_Dot_SizeMd/_Dot_SizeMd.js';
import { _NavFeaturedCard_CloseXTrueTyp2 } from './_NavFeaturedCard_CloseXTrueTyp2/_NavFeaturedCard_CloseXTrueTyp2.js';
import { _NavFeaturedCard_CloseXTrueTyp } from './_NavFeaturedCard_CloseXTrueTyp/_NavFeaturedCard_CloseXTrueTyp.js';
import { _NavItemBase_CurrentFalseColor } from './_NavItemBase_CurrentFalseColor/_NavItemBase_CurrentFalseColor.js';
import { _NavItemButton_CurrentFalseSiz } from './_NavItemButton_CurrentFalseSiz/_NavItemButton_CurrentFalseSiz.js';
import { _NavItemDropdownBase_OpenFalse } from './_NavItemDropdownBase_OpenFalse/_NavItemDropdownBase_OpenFalse.js';
import { _PaginationDotIndicator_Curren } from './_PaginationDotIndicator_Curren/_PaginationDotIndicator_Curren.js';
import classes from './Answer.module.css';
import { Avatar_SizeLgPlaceholderFalseT } from './Avatar_SizeLgPlaceholderFalseT/Avatar_SizeLgPlaceholderFalseT.js';
import { Avatar_SizeMdPlaceholderFalseT } from './Avatar_SizeMdPlaceholderFalseT/Avatar_SizeMdPlaceholderFalseT.js';
import { AvatarLabelGroup_SizeMdStatusI } from './AvatarLabelGroup_SizeMdStatusI/AvatarLabelGroup_SizeMdStatusI.js';
import { Badge_SizeSmIconDotColorSucces } from './Badge_SizeSmIconDotColorSucces/Badge_SizeSmIconDotColorSucces.js';
import { Badge_SizeSmIconFalseColorBlue } from './Badge_SizeSmIconFalseColorBlue/Badge_SizeSmIconFalseColorBlue.js';
import { Badge_SizeSmIconFalseColorIndi } from './Badge_SizeSmIconFalseColorIndi/Badge_SizeSmIconFalseColorIndi.js';
import { Badge_SizeSmIconFalseColorOran } from './Badge_SizeSmIconFalseColorOran/Badge_SizeSmIconFalseColorOran.js';
import { Badge_SizeSmIconFalseColorPink } from './Badge_SizeSmIconFalseColorPink/Badge_SizeSmIconFalseColorPink.js';
import { Badge_SizeSmIconFalseColorPrim } from './Badge_SizeSmIconFalseColorPrim/Badge_SizeSmIconFalseColorPrim.js';
import { Bell1Icon } from './Bell1Icon.js';
import { Breadcrumbs_DividerChevronType } from './Breadcrumbs_DividerChevronType/Breadcrumbs_DividerChevronType.js';
import { Button_SizeLgHierarchyPrimaryI } from './Button_SizeLgHierarchyPrimaryI/Button_SizeLgHierarchyPrimaryI.js';
import { Button_SizeSmHierarchyTertiary } from './Button_SizeSmHierarchyTertiary/Button_SizeSmHierarchyTertiary.js';
import { ButtonIcon } from './ButtonIcon.js';
import { Checkbox_CheckedTrueIndetermin2 } from './Checkbox_CheckedTrueIndetermin2/Checkbox_CheckedTrueIndetermin2.js';
import { Checkbox_CheckedTrueIndetermin } from './Checkbox_CheckedTrueIndetermin/Checkbox_CheckedTrueIndetermin.js';
import { CheckIcon2 } from './CheckIcon2.js';
import { CheckIcon3 } from './CheckIcon3.js';
import { CheckIcon4 } from './CheckIcon4.js';
import { CheckIcon5 } from './CheckIcon5.js';
import { CheckIcon } from './CheckIcon.js';
import { ChevronDown } from './ChevronDown/ChevronDown.js';
import { Dropdown_TypeAvatarOpenFalse } from './Dropdown_TypeAvatarOpenFalse/Dropdown_TypeAvatarOpenFalse.js';
import { HomeLine } from './HomeLine/HomeLine.js';
import { HomeLineIcon } from './HomeLineIcon.js';
import { InputDropdown_TypeSearchStateP } from './InputDropdown_TypeSearchStateP/InputDropdown_TypeSearchStateP.js';
import { LayersThree1 } from './LayersThree1/LayersThree1.js';
import { LifeBuoy1 } from './LifeBuoy1/LifeBuoy1.js';
import { LifeBuoy1Icon } from './LifeBuoy1Icon.js';
import { LogOut1 } from './LogOut1/LogOut1.js';
import { LogOut1Icon } from './LogOut1Icon.js';
import { MinusIcon } from './MinusIcon.js';
import { Plus } from './Plus/Plus.js';
import { PlusIcon } from './PlusIcon.js';
import { ProgressBar_Progress40LabelRig } from './ProgressBar_Progress40LabelRig/ProgressBar_Progress40LabelRig.js';
import { ProgressBar_Progress70LabelRig } from './ProgressBar_Progress70LabelRig/ProgressBar_Progress70LabelRig.js';
import { ProgressBar_Progress80LabelRig } from './ProgressBar_Progress80LabelRig/ProgressBar_Progress80LabelRig.js';
import { ProgressBar_Progress90LabelRig } from './ProgressBar_Progress90LabelRig/ProgressBar_Progress90LabelRig.js';
import { Settings1 } from './Settings1/Settings1.js';
import { Settings1Icon2 } from './Settings1Icon2.js';
import { Settings1Icon } from './Settings1Icon.js';
import { Settings12 } from './Settings12/Settings12.js';
import { TableCell_StyleActionIconsSupp } from './TableCell_StyleActionIconsSupp/TableCell_StyleActionIconsSupp.js';
import { TableCell_StyleProgressBarSupp } from './TableCell_StyleProgressBarSupp/TableCell_StyleProgressBarSupp.js';
import { TableCell_StyleTextSupportingT } from './TableCell_StyleTextSupportingT/TableCell_StyleTextSupportingT.js';
import { TableCell_StyleTrendNegativeSu } from './TableCell_StyleTrendNegativeSu/TableCell_StyleTrendNegativeSu.js';
import { TableCell_StyleTrendPositiveSu } from './TableCell_StyleTrendPositiveSu/TableCell_StyleTrendPositiveSu.js';
import { TableHeader_HelpIconFalseArrow } from './TableHeader_HelpIconFalseArrow/TableHeader_HelpIconFalseArrow.js';
import { TableHeaderCell_TextFalseCheck } from './TableHeaderCell_TextFalseCheck/TableHeaderCell_TextFalseCheck.js';
import { TableHeaderCell_TextTrueCheckb2 } from './TableHeaderCell_TextTrueCheckb2/TableHeaderCell_TextTrueCheckb2.js';
import { TableHeaderCell_TextTrueCheckb } from './TableHeaderCell_TextTrueCheckb/TableHeaderCell_TextTrueCheckb.js';
import { XCloseIcon } from './XCloseIcon.js';

interface Props {
  className?: string;
  hide?: {
    text?: boolean;
    chevronRight?: boolean;
    _BreadcrumbButtonBase?: boolean;
    text2?: boolean;
    button?: boolean;
    button2?: boolean;
    button3?: boolean;
    button4?: boolean;
    button5?: boolean;
    button6?: boolean;
    button7?: boolean;
    button8?: boolean;
    button9?: boolean;
    button10?: boolean;
    placeholder?: boolean;
    placeholder2?: boolean;
    label?: boolean;
    hintText?: boolean;
    _Dot?: boolean;
    badge?: boolean;
    chevronDown?: boolean;
    _Dot2?: boolean;
    barChartSquare2?: boolean;
    badge2?: boolean;
    _Dot3?: boolean;
    layersThree1?: boolean;
    badge3?: boolean;
    _Dot4?: boolean;
    badge4?: boolean;
    chevronDown2?: boolean;
    _Dot5?: boolean;
    badge5?: boolean;
    chevronDown3?: boolean;
  };
}
/* @figmaId 5573:7263 */
export const Answer: FC<Props> = memo(function Answer(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`} style={{width: "100%", height: "1400px"}}>
      <div className={classes.sidebarNavigation} style={{width: "100%"}}></div>
      <_NavFeaturedCard_CloseXTrueTyp
        className={classes._NavFeaturedCard}
        classes={{ image: classes.image, imageWrap: classes.imageWrap }}
        swap={{
          button: <ButtonIcon className={classes.icon} />,
        }}
        text={{
          supportingText: (
            <div className={classes.supportingText}>Check out the new dashboard view. Pages now load faster. </div>
          ),
          text: <div className={classes.text}>Dismiss</div>,
        }}
      />
      <Breadcrumbs_DividerChevronType
        className={classes.breadcrumbs}
        hide={{
          text: true,
          chevronRight: true,
          _BreadcrumbButtonBase: false,
          text2: true,
        }}
        text={{
          text: <div className={classes.text2}>My workspace</div>,
          text2: <div className={classes.text3}>Quiz 1</div>,
        }}
      />
      <div className={classes.rank}>
        <div className={classes.column}>
          <div className={classes.tableHeaderCell8}>
            <TableHeader_HelpIconFalseArrow
              text={{
                text: <div className={classes.text4}>Name</div>,
              }}
            />
          </div>
          <div className={classes.tableCell32}>
            <Avatar_SizeLgPlaceholderFalseT className={classes.avatar} />
            <div className={classes.textAndSupportingText}>
              <div className={classes.text31}>Olivia Rhye</div>
              <div className={classes.supportingText4}>@olivia</div>
            </div>
          </div>
          <div className={classes.tableCell33}>
            <Avatar_SizeLgPlaceholderFalseT className={classes.avatar2} />
            <div className={classes.textAndSupportingText2}>
              <div className={classes.text32}>Olivia Rhye</div>
              <div className={classes.supportingText5}>@olivia</div>
            </div>
          </div>
          <div className={classes.tableCell34}>
            <Avatar_SizeMdPlaceholderFalseT className={classes.avatar3} />
            <div className={classes.textAndSupportingText3}>
              <div className={classes.text33}>Quotient</div>
              <div className={classes.supportingText6}>quotient.co</div>
            </div>
          </div>
          <div className={classes.tableCell35}>
            <Avatar_SizeLgPlaceholderFalseT className={classes.avatar4} />
            <div className={classes.textAndSupportingText4}>
              <div className={classes.text34}>Olivia Rhye</div>
              <div className={classes.supportingText7}>@olivia</div>
            </div>
          </div>
          <div className={classes.tableCell36}>
            <Avatar_SizeMdPlaceholderFalseT className={classes.avatar5} />
            <div className={classes.textAndSupportingText5}>
              <div className={classes.text35}>Quotient</div>
              <div className={classes.supportingText8}>quotient.co</div>
            </div>
          </div>
          <div className={classes.tableCell37}>
            <Avatar_SizeLgPlaceholderFalseT className={classes.avatar6} />
            <div className={classes.textAndSupportingText6}>
              <div className={classes.text36}>Olivia Rhye</div>
              <div className={classes.supportingText9}>@olivia</div>
            </div>
          </div>
          <div className={classes.tableCell38}>
            <Avatar_SizeMdPlaceholderFalseT className={classes.avatar7} />
            <div className={classes.textAndSupportingText7}>
              <div className={classes.text37}>Quotient</div>
              <div className={classes.supportingText10}>quotient.co</div>
            </div>
          </div>
        </div>
        <div className={classes.column2}>
          <TableHeaderCell_TextTrueCheckb
            className={classes.tableHeaderCell}
            text={{
              text: <div className={classes.text5}>Rating</div>,
            }}
          />
          <TableCell_StyleProgressBarSupp
            className={classes.tableCell}
            classes={{ progress: classes.progress }}
            text={{
              percentage: <div className={classes.percentage}>6</div>,
            }}
          />
          <TableCell_StyleProgressBarSupp
            className={classes.tableCell2}
            swap={{
              progressBar: (
                <ProgressBar_Progress70LabelRig
                  className={classes.progressBar}
                  classes={{ progress: classes.progress2 }}
                  text={{
                    percentage: <div className={classes.percentage2}>7</div>,
                  }}
                />
              ),
            }}
          />
          <TableCell_StyleProgressBarSupp
            className={classes.tableCell3}
            swap={{
              progressBar: (
                <ProgressBar_Progress80LabelRig
                  className={classes.progressBar2}
                  classes={{ progress: classes.progress3 }}
                  text={{
                    percentage: <div className={classes.percentage3}>8</div>,
                  }}
                />
              ),
            }}
          />
          <TableCell_StyleProgressBarSupp
            className={classes.tableCell4}
            swap={{
              progressBar: (
                <ProgressBar_Progress40LabelRig
                  className={classes.progressBar3}
                  classes={{ progress: classes.progress4 }}
                  text={{
                    percentage: <div className={classes.percentage4}>3</div>,
                  }}
                />
              ),
            }}
          />
          <TableCell_StyleProgressBarSupp
            className={classes.tableCell5}
            swap={{
              progressBar: (
                <ProgressBar_Progress40LabelRig
                  className={classes.progressBar4}
                  classes={{ progress: classes.progress5 }}
                  text={{
                    percentage: <div className={classes.percentage5}>4</div>,
                  }}
                />
              ),
            }}
          />
          <TableCell_StyleProgressBarSupp
            className={classes.tableCell6}
            classes={{ progress: classes.progress6 }}
            text={{
              percentage: <div className={classes.percentage6}>6</div>,
            }}
          />
          <TableCell_StyleProgressBarSupp
            className={classes.tableCell7}
            swap={{
              progressBar: (
                <ProgressBar_Progress90LabelRig
                  className={classes.progressBar5}
                  classes={{ progress: classes.progress7 }}
                  text={{
                    percentage: <div className={classes.percentage7}>9</div>,
                  }}
                />
              ),
            }}
          />
        </div>
        <div className={classes.column3}>
          <TableHeaderCell_TextFalseCheck className={classes.tableHeaderCell2} />
          <TableCell_StyleTrendPositiveSu className={classes.tableCell8} />
          <TableCell_StyleTrendNegativeSu className={classes.tableCell9} />
          <TableCell_StyleTrendPositiveSu className={classes.tableCell10} />
          <TableCell_StyleTrendPositiveSu className={classes.tableCell11} />
          <TableCell_StyleTrendNegativeSu className={classes.tableCell12} />
          <TableCell_StyleTrendNegativeSu className={classes.tableCell13} />
          <TableCell_StyleTrendPositiveSu className={classes.tableCell14} />
        </div>
        <div className={classes.column4}>
          <TableHeaderCell_TextTrueCheckb
            className={classes.tableHeaderCell3}
            text={{
              text: <div className={classes.text6}>Last assessed</div>,
            }}
          />
          <TableCell_StyleTextSupportingT
            className={classes.tableCell15}
            text={{
              text: <div className={classes.text7}>22 Jan 2022</div>,
            }}
          />
          <TableCell_StyleTextSupportingT
            className={classes.tableCell16}
            text={{
              text: <div className={classes.text8}>20 Jan 2022</div>,
            }}
          />
          <TableCell_StyleTextSupportingT
            className={classes.tableCell17}
            text={{
              text: <div className={classes.text9}>24 Jan 2022</div>,
            }}
          />
          <TableCell_StyleTextSupportingT
            className={classes.tableCell18}
            text={{
              text: <div className={classes.text10}>26 Jan 2022</div>,
            }}
          />
          <TableCell_StyleTextSupportingT
            className={classes.tableCell19}
            text={{
              text: <div className={classes.text11}>18 Jan 2022</div>,
            }}
          />
          <TableCell_StyleTextSupportingT
            className={classes.tableCell20}
            text={{
              text: <div className={classes.text12}>28 Jan 2022</div>,
            }}
          />
          <TableCell_StyleTextSupportingT
            className={classes.tableCell21}
            text={{
              text: <div className={classes.text13}>16 Jan 2022</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.frame22}>
        <_PaginationDotIndicator_Curren className={classes._PaginationDotIndicator} />
        <_PaginationDotIndicator_Curren className={classes._PaginationDotIndicator2} />
        <_PaginationDotIndicator_Curren className={classes._PaginationDotIndicator3} />
        <_PaginationDotIndicator_Curren className={classes._PaginationDotIndicator4} />
      </div>
      <div className={classes.frame23}>
        <_PaginationDotIndicator_Curren className={classes._PaginationDotIndicator5} />
        <_PaginationDotIndicator_Curren className={classes._PaginationDotIndicator6} />
        <_PaginationDotIndicator_Curren className={classes._PaginationDotIndicator7} />
        <_PaginationDotIndicator_Curren className={classes._PaginationDotIndicator8} />
      </div>
      <div className={classes.answer}>
        <div className={classes.answers}>Answers</div>
        <div className={classes.content3}>
          <div className={classes.column5}>
            <TableHeaderCell_TextTrueCheckb2
              className={classes.tableHeaderCell4}
              swap={{
                checkbox: (
                  <Checkbox_CheckedTrueIndetermin
                    classes={{ _CheckboxBase: classes._CheckboxBase }}
                    swap={{
                      icon: <MinusIcon className={classes.icon2} />,
                    }}
                  />
                ),
              }}
              text={{
                text: <div className={classes.text14}>Question</div>,
              }}
            />
            <div className={classes.tableCell39}>
              <Checkbox_CheckedTrueIndetermin2
                classes={{ _CheckboxBase: classes._CheckboxBase2 }}
                swap={{
                  icon: <CheckIcon className={classes.icon3} />,
                }}
              />
              <div className={classes.textAndSupportingText8}>
                <div className={classes.text38}>
                  Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System
                </div>
              </div>
            </div>
            <div className={classes.tableCell40}>
              <Checkbox_CheckedTrueIndetermin2
                classes={{ _CheckboxBase: classes._CheckboxBase3 }}
                swap={{
                  icon: <CheckIcon2 className={classes.icon4} />,
                }}
              />
              <div className={classes.textAndSupportingText9}>
                <div className={classes.text39}>
                  Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System
                </div>
              </div>
            </div>
            <div className={classes.tableCell41}>
              <Checkbox_CheckedTrueIndetermin2
                classes={{ _CheckboxBase: classes._CheckboxBase4 }}
                swap={{
                  icon: <CheckIcon3 className={classes.icon5} />,
                }}
              />
              <div className={classes.textAndSupportingText10}>
                <div className={classes.text40}>
                  Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System
                </div>
              </div>
            </div>
            <div className={classes.tableCell42}>
              <Checkbox_CheckedTrueIndetermin2
                classes={{ _CheckboxBase: classes._CheckboxBase5 }}
                swap={{
                  icon: <CheckIcon4 className={classes.icon6} />,
                }}
              />
              <div className={classes.textAndSupportingText11}>
                <div className={classes.text41}>
                  Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System
                </div>
              </div>
            </div>
            <div className={classes.tableCell43}>
              <Checkbox_CheckedTrueIndetermin2
                classes={{ _CheckboxBase: classes._CheckboxBase6 }}
                swap={{
                  icon: <CheckIcon5 className={classes.icon7} />,
                }}
              />
              <div className={classes.textAndSupportingText12}>
                <div className={classes.text42}>
                  Trong Figma, các tính năng nào giúp bạn tạo và quản lý Design System
                </div>
              </div>
            </div>
          </div>
          <div className={classes.column6}>
            <TableHeaderCell_TextTrueCheckb
              className={classes.tableHeaderCell5}
              text={{
                text: <div className={classes.text15}>Last assessed</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell22}
              text={{
                text: <div className={classes.text16}>22 Jan 2022</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell23}
              text={{
                text: <div className={classes.text17}>20 Jan 2022</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell24}
              text={{
                text: <div className={classes.text18}>24 Jan 2022</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell25}
              text={{
                text: <div className={classes.text19}>26 Jan 2022</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell26}
              text={{
                text: <div className={classes.text20}>18 Jan 2022</div>,
              }}
            />
          </div>
          <div className={classes.column7}>
            <TableHeaderCell_TextTrueCheckb
              className={classes.tableHeaderCell6}
              text={{
                text: <div className={classes.text21}>Answer</div>,
              }}
            />
            <div className={classes.tableCell44}>
              <div className={classes.badges}>
                <div className={classes.badge}>
                  <div className={classes.text43}>
                    style,component, design token,Figma&#39;s Design System Community symbol
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.tableCell45}>
              <div className={classes.badges2}>
                <div className={classes.badge2}>
                  <div className={classes.text44}>
                    style,component, design token,Figma&#39;s Design System Community symbol
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.tableCell46}>
              <div className={classes.badges3}>
                <div className={classes.badge3}>
                  <div className={classes.text45}>
                    style,component, design token,Figma&#39;s Design System Community symbol
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.tableCell47}>
              <div className={classes.badges4}>
                <div className={classes.badge4}>
                  <div className={classes.text46}>
                    style,component, design token,Figma&#39;s Design System Community symbol
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.tableCell48}>
              <div className={classes.badges5}>
                <div className={classes.badge5}>
                  <div className={classes.text47}>
                    style,component, design token,Figma&#39;s Design System Community symbol
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.column8}>
            <TableHeaderCell_TextFalseCheck className={classes.tableHeaderCell7} />
            <TableCell_StyleActionIconsSupp
              className={classes.tableCell27}
              hide={{
                button: true,
                button2: true,
              }}
            />
            <TableCell_StyleActionIconsSupp
              className={classes.tableCell28}
              hide={{
                button: true,
                button2: true,
              }}
            />
            <TableCell_StyleActionIconsSupp
              className={classes.tableCell29}
              hide={{
                button: true,
                button2: true,
              }}
            />
            <TableCell_StyleActionIconsSupp
              className={classes.tableCell30}
              hide={{
                button: true,
                button2: true,
              }}
            />
            <TableCell_StyleActionIconsSupp
              className={classes.tableCell31}
              hide={{
                button: true,
                button2: true,
              }}
            />
          </div>
        </div>
      </div>
      <Button_SizeLgHierarchyPrimaryI
        className={classes.button}
        hide={{
          placeholder: true,
          placeholder2: true,
        }}
        text={{
          text: <div className={classes.text22}>Create Quiz</div>,
        }}
      />
      <div className={classes.headerNavigation} style={{width: "100%"}}>
        <div className={classes.container}>
          <div className={classes.content4}>
            <div className={classes.logo}>
              <div className={classes.responsly}>Responsly</div>
            </div>
          </div>
          <div className={classes.content5} style={{width: "100px"}} >
            <div className={classes.actions}>
              {/* <div className={classes.search}>
                <div className={classes.inputDropdown2}></div>
              </div> */}
              <_NavItemButton_CurrentFalseSiz
                className={classes._NavItemButton}
                swap={{
                  bell1: (
                    <Settings1
                      className={classes.settings1}
                      swap={{
                        icon: <Settings1Icon className={classes.icon8} />,
                      }}
                    />
                  ),
                }}
              />
              <_NavItemButton_CurrentFalseSiz
                className={classes._NavItemButton2}
                swap={{
                  icon: <Bell1Icon className={classes.icon9} />,
                }}
              />
              <Dropdown_TypeAvatarOpenFalse classes={{ avatar: classes.avatar8 }} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.sidebarNavigation2} style={{top: "82px"}}>
        <div className={classes.content6}>
          <div className={classes.nav}>
            <div className={classes.search2}>
              <InputDropdown_TypeSearchStateP
                className={classes.inputDropdown}
                hide={{
                  label: true,
                  hintText: true,
                }}
              />
            </div>
            <div className={classes.navigation}>
              <_NavItemDropdownBase_OpenFalse
                className={classes._NavItemDropdownBase}
                classes={{ _NavItemBase: classes._NavItemBase }}
                swap={{
                  barChart1: (
                    <HomeLine
                      swap={{
                        icon: <HomeLineIcon className={classes.icon10} />,
                      }}
                    />
                  ),
                }}
                hide={{
                  chevronDown: true,
                }}
                text={{
                  text: <div className={classes.text23}>Home</div>,
                }}
              />
              <_NavItemDropdownBase_OpenFalse
                className={classes._NavItemDropdownBase2}
                classes={{ _NavItemBase: classes._NavItemBase2 }}
                hide={{
                  barChart1: true,
                }}
                text={{
                  text: <div className={classes.text24}>My Workspace</div>,
                }}
              />
              <_NavItemDropdownBase_OpenFalse
                className={classes._NavItemDropdownBase3}
                classes={{ _NavItemBase: classes._NavItemBase3 }}
                hide={{
                  barChart1: true,
                }}
                text={{
                  text: <div className={classes.text25}>My Workspace_1</div>,
                }}
              />
              <div className={classes._NavItemDropdownBase4}>
                <div className={classes._NavItemBase6}>
                  <div className={classes.content7}>
                    <div className={classes.text48}>New Workspace</div>
                    <Plus
                      className={classes.plus}
                      swap={{
                        icon: <PlusIcon className={classes.icon11} />,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.footer}>
            <_NavFeaturedCard_CloseXTrueTyp2
              className={classes._NavFeaturedCard2}
              classes={{ background: classes.background, progress: classes.progress8 }}
              swap={{
                icon: <XCloseIcon className={classes.icon16} />,
              }}
              text={{
                text: <div className={classes.text28}>Used space</div>,
                supportingText: (
                  <div className={classes.supportingText2}>
                    Your team has used 80% of your available space. Need more?
                  </div>
                ),
                text2: <div className={classes.text29}>Dismiss</div>,
                text3: <div className={classes.text30}>Upgrade plan</div>,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
