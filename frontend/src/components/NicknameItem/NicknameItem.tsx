import { nicknameItemLayout, nicknameText, profileImage } from './NicknameItem.styled';

import SillyDdangkong from '@/assets/images/sillyDdangkong.png';

interface NicknameItemProp {
  member: string;
}

const NicknameItem = ({ member }: NicknameItemProp) => {
  return (
    <li css={nicknameItemLayout}>
      <img src={SillyDdangkong} alt="" css={profileImage} />
      <span css={nicknameText}>{member}</span>
    </li>
  );
};

export default NicknameItem;
