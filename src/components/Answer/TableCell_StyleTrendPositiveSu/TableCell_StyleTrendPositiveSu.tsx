import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Badge_SizeSmIconIconLeadingCol } from '../Badge_SizeSmIconIconLeadingCol/Badge_SizeSmIconIconLeadingCol.js';
import classes from './TableCell_StyleTrendPositiveSu.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1224:1019 */
export const TableCell_StyleTrendPositiveSu: FC<Props> = memo(function TableCell_StyleTrendPositiveSu(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Badge_SizeSmIconIconLeadingCol
        text={{
          text: <div className={classes.text}>20%</div>,
        }}
      />
    </div>
  );
});
