import { angryImage, emptyVoteText, emptyVoteTextContainer } from './EmptyVoteContent.styled';

import AngryDdangkong from '@/assets/images/angryDdangkong.webp';

const EmptyVoteContent = () => {
  return (
    <div css={emptyVoteTextContainer}>
      <img src={AngryDdangkong} alt="" css={angryImage} />
      <span css={emptyVoteText}>아무도 투표하지 않으셨네요 :{`)`}</span>
    </div>
  );
};

export default EmptyVoteContent;
