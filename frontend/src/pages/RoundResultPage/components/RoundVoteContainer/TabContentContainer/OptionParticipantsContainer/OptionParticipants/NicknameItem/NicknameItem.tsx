import { nicknameItemLayout, nicknameText, profileImage } from './NicknameItem.styled';

import useGetUserInfo from '@/hooks/useGetUserInfo';

interface NicknameItemProps {
  nickName: string;
  imageUrl: string;
}

const NicknameItem = ({ nickName, imageUrl }: NicknameItemProps) => {
  const { member } = useGetUserInfo();
  const isMyNickname = member.nickname === nickName;

  return (
    <li css={nicknameItemLayout}>
      <img src={imageUrl} alt="사용자 프로필" css={profileImage} />
      <span css={nicknameText(isMyNickname)}>{nickName}</span>
    </li>
  );
};

export default NicknameItem;
