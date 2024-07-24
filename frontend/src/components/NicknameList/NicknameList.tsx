import { nicknameListLayout, nicknameContainer, verticalLine } from './NicknameList.styled';

const NicknameList = () => {
  const optionANicknames = ['철수', '철수', '철수', '철수', '철수', '철수', '철수', '철수', '철수'];
  const optionBNicknames = ['영미', '영미', '영미'];

  return (
    <div css={nicknameListLayout}>
      <div css={nicknameContainer}>
        {optionANicknames.map((optionANickname) => (
          <span key={optionANickname}>{optionANickname}</span>
        ))}
      </div>
      <span css={verticalLine}></span>
      <div css={nicknameContainer}>
        {optionBNicknames.map((optionANickname) => (
          <span key={optionANickname}>{optionANickname}</span>
        ))}
      </div>
    </div>
  );
};

export default NicknameList;
