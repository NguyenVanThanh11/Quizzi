import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ArrowDown } from '../ArrowDown/ArrowDown.js';
import { Badge_SizeSmIconIconLeadingCol2 } from '../Badge_SizeSmIconIconLeadingCol2/Badge_SizeSmIconIconLeadingCol2.js';
import { ArrowDownIcon } from './ArrowDownIcon.js';
import classes from './TableCell_StyleTrendNegativeSu.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1224:1081 */
export const TableCell_StyleTrendNegativeSu: FC<Props> = memo(function TableCell_StyleTrendNegativeSu(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Badge_SizeSmIconIconLeadingCol2
        swap={{
          arrowUp: (
            <ArrowDown
              className={classes.arrowDown}
              swap={{
                icon: <ArrowDownIcon className={classes.icon} />,
              }}
            />
          ),
        }}
        text={{
          text: <div className={classes.text}>20%</div>,
        }}
      />
    </div>
  );
});
