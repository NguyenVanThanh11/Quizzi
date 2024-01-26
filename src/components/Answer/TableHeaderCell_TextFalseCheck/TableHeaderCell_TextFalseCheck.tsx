import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './TableHeaderCell_TextFalseCheck.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1224:4547 */
export const TableHeaderCell_TextFalseCheck: FC<Props> = memo(function TableHeaderCell_TextFalseCheck(props = {}) {
  return (
    <div
      className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    ></div>
  );
});
