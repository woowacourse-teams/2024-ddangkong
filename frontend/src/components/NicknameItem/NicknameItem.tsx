import { nicknameItemLayout, nicknameText, profileImage } from './NicknameItem.styled';

import SillyDdangkong from '@/assets/images/sillyDdangkong.webp';

interface NicknameItemProp {
  member: string;
}

const NicknameItem = ({ member }: NicknameItemProp) => {
  return (
    <li css={nicknameItemLayout}>
      <img src={SillyDdangkong} alt="사용자 프로필" css={profileImage} />
      <span css={nicknameText}>{member}</span>
    </li>
  );
};

export default NicknameItem;
