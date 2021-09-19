import React, { useState } from 'react';
import Divider from '../Divider/Divider';
import { FlexBox } from '../FlexBox/FlexBox';
import { BaseText } from '../Text/Text.styles';

export type TCollapsable = {
  children: React.ReactNode;
  label?: string;
};

type TIcon = {
  points?: string;
};

const Icon: React.FC<TIcon> = ({ points }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points={points}></polyline>
  </svg>
);

const Collapsable: React.FC<TCollapsable> = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ cursor: 'pointer' }}>
      <FlexBox onClick={() => setOpen(!open)} justify={'space-between'}>
        <BaseText size={20}>{label}</BaseText>
        <Icon points={open ? '6 9 12 15 18 9' : '9 18 15 12 9 6'} />
      </FlexBox>
      <Divider margin={10} />
      {open && children}
    </div>
  );
};

export default Collapsable;
