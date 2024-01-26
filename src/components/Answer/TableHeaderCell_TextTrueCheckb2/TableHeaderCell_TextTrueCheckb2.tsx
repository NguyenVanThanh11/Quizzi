import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Checkbox_CheckedFalseIndetermi } from '../Checkbox_CheckedFalseIndetermi/Checkbox_CheckedFalseIndetermi.js';
import { TableHeader_HelpIconFalseArrow } from '../TableHeader_HelpIconFalseArrow/TableHeader_HelpIconFalseArrow.js';
import classes from './TableHeaderCell_TextTrueCheckb2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    checkbox?: ReactNode;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1221:107934 */
export const TableHeaderCell_TextTrueCheckb2: FC<Props> = memo(function TableHeaderCell_TextTrueCheckb2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.checkbox || <Checkbox_CheckedFalseIndetermi />}
      <TableHeader_HelpIconFalseArrow
        text={{
          text: props.text?.text,
        }}
      />
    </div>
  );
});
