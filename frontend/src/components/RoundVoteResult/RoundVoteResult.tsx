import { layout, fontBold, voteContent } from './RoundVoteResult.styled';

import useQuestionQuery from '@/hooks/useQuestionQuery';

const RoundVoteResult = () => {
  const { data: question } = useQuestionQuery();

  return (
    <div css={layout({ percentage: 72 })}>
      <div css={voteContent}>
        <div css={fontBold}>{question?.firstOption.content}</div>
        <div css={fontBold}>72%</div>
      </div>
      <span>vs</span>
      <div css={voteContent}>
        <div css={fontBold}>{question?.secondOption.content}</div>
        <div>28%</div>
      </div>
    </div>
  );
};

export default RoundVoteResult;
