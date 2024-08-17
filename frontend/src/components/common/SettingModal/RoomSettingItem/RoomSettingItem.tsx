import { PropsWithChildren } from 'react';

import {
  settingButtonContainer,
  settingTitle,
  settingTitleContainer,
  settingTitleWrapper,
} from '../SettingModal.styled';

interface RoomSettingItemProps {
  title: '카테고리' | '총 라운드' | '라운드 당 타이머';
}

const RoomSettingItem = ({ children, title }: PropsWithChildren<RoomSettingItemProps>) => {
  return (
    <div css={settingTitleContainer}>
      <div css={settingTitleWrapper}>
        <span css={settingTitle}>{title}</span>
      </div>
      <div css={settingButtonContainer}>{children}</div>
    </div>
  );
};

export default RoomSettingItem;
