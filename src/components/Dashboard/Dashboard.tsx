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
import { AvatarLabelGroup_SizeMdStatusI } from './AvatarLabelGroup_SizeMdStatusI/AvatarLabelGroup_SizeMdStatusI.js';
import { Badge_SizeSmIconFalseColorPrim } from './Badge_SizeSmIconFalseColorPrim/Badge_SizeSmIconFalseColorPrim.js';
import { Bell1Icon } from './Bell1Icon.js';
import { Breadcrumbs_DividerChevronType } from './Breadcrumbs_DividerChevronType/Breadcrumbs_DividerChevronType.js';
import { Button_SizeSmHierarchyTertiary } from './Button_SizeSmHierarchyTertiary/Button_SizeSmHierarchyTertiary.js';
import { ButtonIcon } from './ButtonIcon.js';
import { CardDesktopLight_TypeStandardS } from './CardDesktopLight_TypeStandardS/CardDesktopLight_TypeStandardS.js';
import { ChevronDown } from './ChevronDown/ChevronDown.js';
import classes from './Dashboard.module.css';
import { DotsVertical } from './DotsVertical/DotsVertical.js';
import { DotsVerticalIcon } from './DotsVerticalIcon.js';
import { Dropdown_TypeAvatarOpenFalse } from './Dropdown_TypeAvatarOpenFalse/Dropdown_TypeAvatarOpenFalse.js';
import { HomeLine } from './HomeLine/HomeLine.js';
import { HomeLineIcon } from './HomeLineIcon.js';
import { LayersThree1 } from './LayersThree1/LayersThree1.js';
import { LifeBuoy1 } from './LifeBuoy1/LifeBuoy1.js';
import { LifeBuoy1Icon } from './LifeBuoy1Icon.js';
import { LogOut1 } from './LogOut1/LogOut1.js';
import { LogOut1Icon } from './LogOut1Icon.js';
import { More } from './More/More.js';
import { Plus } from './Plus/Plus.js';
import { PlusIcon2 } from './PlusIcon2.js';
import { PlusIcon } from './PlusIcon.js';
import { SearchLg } from './SearchLg/SearchLg.js';
import { SearchLgIcon } from './SearchLgIcon.js';
import { Settings1 } from './Settings1/Settings1.js';
import { Settings1Icon2 } from './Settings1Icon2.js';
import { Settings1Icon } from './Settings1Icon.js';
import { Settings12 } from './Settings12/Settings12.js';
import { XCloseIcon } from './XCloseIcon.js';

interface Props {
  className?: string;
  hide?: {
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
    chevronRight?: boolean;
    text?: boolean;
    chevronRight2?: boolean;
    text2?: boolean;
    more?: boolean;
    more2?: boolean;
    more3?: boolean;
  };
}
/* @figmaId 5438:10811 */
export const Dashboard: FC<Props> = memo(function Dashboard(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`} style={{width: "100%"}}>
      <div className={classes.headerNavigation} style={{width: "100%"}}>
        <div className={classes.container}  style={{width: "100%"}}>
          <div className={classes.content3}>
            <div className={classes.logo}>
              <div className={classes.responsly}>Responsly</div>
            </div>
          </div>
          <div className={classes.content4}>
            <div className={classes.actions}>
              <div className={classes.search}>
                <div className={classes.inputDropdown}></div>
              </div>
              <_NavItemButton_CurrentFalseSiz
                className={classes._NavItemButton}
                swap={{
                  bell1: (
                    <Settings1
                      className={classes.settings1}
                      swap={{
                        icon: <Settings1Icon className={classes.icon} />,
                      }}
                    />
                  ),
                }}
              />
              <_NavItemButton_CurrentFalseSiz
                className={classes._NavItemButton2}
                swap={{
                  icon: <Bell1Icon className={classes.icon2} />,
                }}
              />
              <Dropdown_TypeAvatarOpenFalse classes={{ avatar: classes.avatar }} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.sidebarNavigation}></div>
      <_NavFeaturedCard_CloseXTrueTyp
        className={classes._NavFeaturedCard}
        classes={{ image: classes.image, imageWrap: classes.imageWrap }}
        swap={{
          button: <ButtonIcon className={classes.icon3} />,
        }}
        text={{
          supportingText: (
            <div className={classes.supportingText}>Check out the new dashboard view. Pages now load faster. </div>
          ),
          text: <div className={classes.text}>Dismiss</div>,
        }}
      />
      <div className={classes.sidebarNavigation2}>
        <div className={classes.content5}>
          <div className={classes.nav}>
            <div className={classes.search2}>
              <div className={classes.inputDropdown2}>
                <div className={classes.inputWithLabel}>
                  <div className={classes.input}>
                    <div className={classes.content6}>
                      <SearchLg
                        className={classes.searchLg}
                        swap={{
                          icon: <SearchLgIcon className={classes.icon4} />,
                        }}
                      />
                      <input className={classes.text11} placeholder="Search"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.navigation}>
              <_NavItemDropdownBase_OpenFalse
                className={classes._NavItemDropdownBase}
                classes={{ _NavItemBase: classes._NavItemBase }}
                swap={{
                  barChart1: (
                    <HomeLine
                      swap={{
                        icon: <HomeLineIcon className={classes.icon5} />,
                      }}
                    />
                  ),
                }}
                hide={{
                  chevronDown: true,
                }}
                text={{
                  text: <div className={classes.text2}>Home</div>,
                }}
              />
              <_NavItemDropdownBase_OpenFalse
                className={classes._NavItemDropdownBase2}
                classes={{ _NavItemBase: classes._NavItemBase2 }}
                hide={{
                  barChart1: true,
                }}
                text={{
                  text: <div className={classes.text3}>My Workspace</div>,
                }}
              />
              <_NavItemDropdownBase_OpenFalse
                className={classes._NavItemDropdownBase3}
                classes={{ _NavItemBase: classes._NavItemBase3 }}
                hide={{
                  barChart1: true,
                }}
                text={{
                  text: <div className={classes.text4}>My Workspace_1</div>,
                }}
              />
              <div className={classes._NavItemDropdownBase4}>
                <div className={classes._NavItemBase6}>
                  <div className={classes.content7}>
                    <div className={classes.text12}>New Workspace</div>
                    <Plus
                      className={classes.plus}
                      swap={{
                        icon: <PlusIcon onClick={() => {navigate('/create-workspace');}} className={classes.icon6} />,
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
              classes={{ background: classes.background, progress: classes.progress }}
              swap={{
                icon: <XCloseIcon className={classes.icon11} />,
              }}
              text={{
                text: <div className={classes.text7}>Used space</div>,
                supportingText: (
                  <div className={classes.supportingText2}>
                    Your team has used 80% of your available space. Need more?
                  </div>
                ),
                text2: <div className={classes.text8}>Dismiss</div>,
                text3: <div className={classes.text9}>Upgrade plan</div>,
              }}
            />
          </div>
        </div>
      </div>
      <Breadcrumbs_DividerChevronType
        className={classes.breadcrumbs}
        hide={{
          chevronRight: true,
          text: true,
          chevronRight2: true,
          text2: true,
        }}
        text={{
          text: <div className={classes.text10}>My Workspace</div>,
        }}
      />
      <CardDesktopLight_TypeStandardS
        className={classes.cardDesktopLight}
        classes={{ image: classes.image2 }}
        hide={{
          more: true,
        }}
        text={{
          title: <div className={classes.title}>Quizz 1</div>,
          metadata: <div className={classes.metadata}>Design file oganization Quiz</div>,
        }}
      />
      <CardDesktopLight_TypeStandardS
        className={classes.cardDesktopLight2}
        classes={{ image: classes.image3 }}
        hide={{
          more: true,
        }}
        text={{
          title: <div className={classes.title2}>Quizz 2</div>,
          metadata: <div className={classes.metadata2}>Design file oganization Quiz</div>,
        }}
      />
      <CardDesktopLight_TypeStandardS
        className={classes.cardDesktopLight3}
        classes={{ image: classes.image4 }}
        hide={{
          more: true,
        }}
        text={{
          title: <div className={classes.title3}>Quizz 3</div>,
          metadata: <div className={classes.metadata3}>Design file oganization Quiz</div>,
        }}
      />
      <div onClick={() => {navigate('/create-quiz');}} className={classes.cardDesktopLight4}>
        <div className={classes.textContent}>
          <Plus
            className={classes.plus2}
            swap={{
              icon: <PlusIcon2 className={classes.icon14} />,
            }}
          />
          <div className={classes.header}>
            <div className={classes.title4}>Create </div>
          </div>
        </div>
      </div>
      <div className={classes._DropdownListItem}>
        <DotsVertical
          swap={{
            icon: <DotsVerticalIcon className={classes.icon15} />,
          }}
        />
      </div>
    </div>
  );
});
