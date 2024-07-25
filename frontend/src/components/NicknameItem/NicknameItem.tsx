import { nicknameListLayout, nicknameText } from './NicknameItem.styled';

interface NicknameItemProp {
  member: string;
}

const NicknameItem = ({ member }: NicknameItemProp) => {
  return (
    <li css={nicknameListLayout}>
      <span>🥜</span>
      <span css={nicknameText}>{member}</span>
    </li>
  );
};

export default NicknameItem;
