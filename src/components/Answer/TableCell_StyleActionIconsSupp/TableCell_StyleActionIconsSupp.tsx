import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button_SizeMdHierarchyTertiary } from '../Button_SizeMdHierarchyTertiary/Button_SizeMdHierarchyTertiary.js';
import { Copy1 } from '../Copy1/Copy1.js';
import { DownloadCloud2 } from '../DownloadCloud2/DownloadCloud2.js';
import { Edit1 } from '../Edit1/Edit1.js';
import { Trash1 } from '../Trash1/Trash1.js';
import { Copy1Icon } from './Copy1Icon.js';
import { DownloadCloud2Icon } from './DownloadCloud2Icon.js';
import { Edit1Icon } from './Edit1Icon.js';
import classes from './TableCell_StyleActionIconsSupp.module.css';
import { Trash1Icon } from './Trash1Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    button?: boolean;
    button2?: boolean;
  };
}
/* @figmaId 1224:1826 */
export const TableCell_StyleActionIconsSupp: FC<Props> = memo(function TableCell_StyleActionIconsSupp(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.button && (
        <Button_SizeMdHierarchyTertiary
          swap={{
            placeholder: (
              <Copy1
                className={classes.copy1}
                swap={{
                  icon: <Copy1Icon className={classes.icon} />,
                }}
              />
            ),
          }}
        />
      )}
      {!props.hide?.button2 && (
        <Button_SizeMdHierarchyTertiary
          swap={{
            placeholder: (
              <DownloadCloud2
                className={classes.downloadCloud2}
                swap={{
                  icon: <DownloadCloud2Icon className={classes.icon2} />,
                }}
              />
            ),
          }}
        />
      )}
      <Button_SizeMdHierarchyTertiary
        swap={{
          placeholder: (
            <Trash1
              className={classes.trash1}
              swap={{
                icon: <Trash1Icon className={classes.icon3} />,
              }}
            />
          ),
        }}
      />
      <Button_SizeMdHierarchyTertiary
        swap={{
          placeholder: (
            <Edit1
              className={classes.edit1}
              swap={{
                icon: <Edit1Icon className={classes.icon4} />,
              }}
            />
          ),
        }}
      />
    </div>
  );
});
