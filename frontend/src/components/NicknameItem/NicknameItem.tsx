import { useRecoilValue } from 'recoil';

import { nicknameItemLayout, nicknameText, profileImage } from './NicknameItem.styled';

import SillyDdangkong from '@/assets/images/sillyDdangkong.png';
import { memberInfoState } from '@/recoil/atom';

interface NicknameItemProp {
  member: string;
}

const NicknameItem = ({ member }: NicknameItemProp) => {
  const memberInfo = useRecoilValue(memberInfoState);
  const isUser = memberInfo.nickname === member;

  return (
    <li css={nicknameItemLayout}>
      <img src={SillyDdangkong} alt="사용자 프로필" css={profileImage} />
      <span css={nicknameText(isUser)}>{member}</span>
    </li>
  );
};

export default NicknameItem;
