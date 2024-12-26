import { nicknameItemLayout, nicknameText, profileImage } from './NicknameItem.styled';

import SillyDdangkongMedium from '@/assets/images/sillyDdangkongMedium.webp';
import useGetUserInfo from '@/hooks/useGetUserInfo';

interface NicknameItemProps {
  nickName: string;
}

const NicknameItem = ({ nickName }: NicknameItemProps) => {
  const { member } = useGetUserInfo();
  const isMyNickname = member.nickname === nickName;

  return (
    <li css={nicknameItemLayout}>
      <img src={SillyDdangkongMedium} alt="사용자 프로필" css={profileImage} />
      <span css={nicknameText(isMyNickname)}>{nickName}</span>
    </li>
  );
};

export default NicknameItem;
