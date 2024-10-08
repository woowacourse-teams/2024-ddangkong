import { PropsWithChildren } from 'react';

import {
  roomSettingButtonContainer,
  roomSettingTitle,
  roomSettingTitleContainer,
  roomSettingTitleWrapper,
} from './RoomSettingContainer.styled';

interface RoomSettingContainerProps {
  title: '카테고리' | '총 라운드' | '라운드 당 타이머';
}

const RoomSettingContainer = ({
  children,
  title,
}: PropsWithChildren<RoomSettingContainerProps>) => {
  return (
    <div css={roomSettingTitleContainer}>
      <div css={roomSettingTitleWrapper}>
        <span css={roomSettingTitle}>{title}</span>
      </div>
      <ul css={roomSettingButtonContainer}>{children}</ul>
    </div>
  );
};

export default RoomSettingContainer;
