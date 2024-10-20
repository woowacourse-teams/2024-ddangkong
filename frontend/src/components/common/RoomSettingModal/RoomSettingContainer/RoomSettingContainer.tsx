import { PropsWithChildren } from 'react';

import {
  roomSettingButtonContainer,
  roomSettingTitle,
  roomSettingTitleContainer,
  roomSettingTitleWrapper,
} from './RoomSettingContainer.styled';

interface RoomSettingContainerProps {
  title: '카테고리' | '총 라운드' | '제한 시간';
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
      {title === '카테고리' && children}
      {title !== '카테고리' && (
        <ul css={roomSettingButtonContainer} role="radiogroup">
          {children}
        </ul>
      )}
    </div>
  );
};

export default RoomSettingContainer;
