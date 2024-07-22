import { layout, fontBold, voteContent } from './RoundVoteResult.styled';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const RoundVoteResult = () => {
  const { balanceContent } = useBalanceContentQuery();

  return (
    <div css={layout({ percentage: 72 })}>
      <div css={voteContent}>
        <div css={fontBold}>{balanceContent?.firstOption.name}</div>
        <div css={fontBold}>72%</div>
      </div>
      <span>vs</span>
      <div css={voteContent}>
        <div css={fontBold}>{balanceContent?.secondOption.name}</div>
        <div>28%</div>
      </div>
    </div>
  );
};

export default RoundVoteResult;
