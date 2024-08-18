import { PropsWithChildren } from 'react';

import {
  roomSettingButtonContainer,
  roomSettingTitle,
  roomSettingTitleContainer,
  roomSettingTitleWrapper,
} from './RoomSettingItem.styled';

interface RoomSettingItemProps {
  title: '카테고리' | '총 라운드' | '라운드 당 타이머';
}

const RoomSettingItem = ({ children, title }: PropsWithChildren<RoomSettingItemProps>) => {
  return (
    <div css={roomSettingTitleContainer}>
      <div css={roomSettingTitleWrapper}>
        <span css={roomSettingTitle}>{title}</span>
      </div>
      <div css={roomSettingButtonContainer}>{children}</div>
    </div>
  );
};

export default RoomSettingItem;
