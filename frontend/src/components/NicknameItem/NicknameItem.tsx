import { useRecoilValue } from 'recoil';

import { nicknameItemLayout, nicknameText, profileImage } from './NicknameItem.styled';

import SillyDdangkong from '@/assets/images/sillyDdangkong.png';
import { memberInfoState } from '@/recoil/atom';
interface NicknameItemProp {
  nickName: string;
}

const NicknameItem = ({ nickName }: NicknameItemProp) => {
  const memberInfo = useRecoilValue(memberInfoState);
  const isMyNickname = memberInfo.nickname === nickName;

  return (
    <li css={nicknameItemLayout}>
      <img src={SillyDdangkong} alt="사용자 프로필" css={profileImage} />
      <span css={nicknameText(isMyNickname)}>{nickName}</span>
    </li>
  );
};

export default NicknameItem;
