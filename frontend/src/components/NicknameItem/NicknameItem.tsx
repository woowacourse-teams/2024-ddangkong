import { profileImage } from './NicknameItem.styled';

const NicknameItem = (member: string) => {
  return (
    <div>
      <div css={profileImage}></div>
      <span>{member}</span>
    </div>
  );
};

export default NicknameItem;
