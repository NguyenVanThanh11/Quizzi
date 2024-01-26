import { memo } from 'react';
import type { FC } from 'react';

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
import { ButtonCloseX_SizeLgColorGrayTh } from './ButtonCloseX_SizeLgColorGrayTh/ButtonCloseX_SizeLgColorGrayTh.js';
import { ButtonIcon } from './ButtonIcon.js';
import { ChevronDown } from './ChevronDown/ChevronDown.js';
import classes from './ChooseCrate.module.css';
import { DotsVertical } from './DotsVertical/DotsVertical.js';
import { DotsVerticalIcon } from './DotsVerticalIcon.js';
import { Dropdown_TypeAvatarOpenFalse } from './Dropdown_TypeAvatarOpenFalse/Dropdown_TypeAvatarOpenFalse.js';
import { File2Icon } from './File2Icon.js';
import { HomeLine } from './HomeLine/HomeLine.js';
import { HomeLineIcon } from './HomeLineIcon.js';
import { InputDropdown_TypeSearchStateP } from './InputDropdown_TypeSearchStateP/InputDropdown_TypeSearchStateP.js';
import { LayersThree1 } from './LayersThree1/LayersThree1.js';
import { LifeBuoy1 } from './LifeBuoy1/LifeBuoy1.js';
import { LifeBuoy1Icon } from './LifeBuoy1Icon.js';
import { LogOut1 } from './LogOut1/LogOut1.js';
import { LogOut1Icon } from './LogOut1Icon.js';
import { MagicWand2 } from './MagicWand2/MagicWand2.js';
import { MagicWand2Icon } from './MagicWand2Icon.js';
import { Plus } from './Plus/Plus.js';
import { PlusIcon2 } from './PlusIcon2.js';
import { PlusIcon } from './PlusIcon.js';
import { Settings1 } from './Settings1/Settings1.js';
import { Settings1Icon2 } from './Settings1Icon2.js';
import { Settings1Icon } from './Settings1Icon.js';
import { Settings12 } from './Settings12/Settings12.js';
import { XCloseIcon } from './XCloseIcon.js';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  hide?: {
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
    chevronRight?: boolean;
    create?: boolean;
    icon?: boolean;
    _BreadcrumbButtonBase?: boolean;
  };
}
/* @figmaId 5482:25356 */
export const ChooseCrate: FC<Props> = memo(function ChooseCrate(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`} style={{width: "100%"}}>
      <div className={classes.headerNavigation} style={{width: "100%"}}>
        <div className={classes.container}>
          <div className={classes.content3}>
            <div className={classes.logo}>
              <div className={classes.responsly}>Responsly</div>
            </div>
          </div>
          <div className={classes.content4}>
            <div className={classes.actions}>
              <div className={classes.search}>
                <div className={classes.inputDropdown2}></div>
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
                        icon: <HomeLineIcon className={classes.icon4} />,
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
                  <div className={classes.content6}>
                    <div className={classes.text11}>New Workspace</div>
                    <Plus
                      className={classes.plus}
                      swap={{
                        icon: <PlusIcon className={classes.icon5} />,
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
                icon: <XCloseIcon className={classes.icon10} />,
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
          icon: true,
          _BreadcrumbButtonBase: true,
        }}
        text={{
          text: <div className={classes.text10}>My Workspace</div>,
        }}
      />
      <div className={classes._DropdownListItem}>
        <DotsVertical
          swap={{
            icon: <DotsVerticalIcon className={classes.icon13} />,
          }}
        />
      </div>
      <div className={classes.modal} style={{width: "100%", height: "100%"}}>
        <div className={classes.modal2}>
          <ButtonCloseX_SizeLgColorGrayTh className={classes.buttonCloseX} />
          <div className={classes.textContent} onClick={() => {navigate('/detail-create-quiz');}}>
            <Plus
              className={classes.plus2}
              swap={{
                icon: <PlusIcon2 className={classes.icon14} />,
              }}
            />
            <div className={classes.content7}>
              <div className={classes.textAndSupportingText}>
                <div className={classes.text12}>Start from scratch</div>
                <div className={classes.supportingText4}>Do it yourself, don&#39;t worry. It&#39;s super easy!</div>
              </div>
            </div>
          </div>
          <div className={classes.textContent2}>
            <div className={classes.file2}>
              <File2Icon className={classes.icon16} />
            </div>
            <div className={classes.content8}>
              <div className={classes.textAndSupportingText2}>
                <div className={classes.text13}>Use a template</div>
                <div className={classes.supportingText5}>Do it yourself, don&#39;t worry. It&#39;s super easy!</div>
              </div>
            </div>
          </div>
          <div className={classes.textContent3}>
            <MagicWand2
              className={classes.magicWand2}
              swap={{
                icon: <MagicWand2Icon className={classes.icon15} />,
              }}
            />
            <div className={classes.content9}>
              <div className={classes.textAndSupportingText3}>
                <div className={classes.text14}>Automatically generate</div>
                <div className={classes.supportingText6}>Do it yourself, don&#39;t worry. It&#39;s super easy!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
