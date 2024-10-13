import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import RoundVoteContainer from './RoundVoteContainer';

import ROUND_VOTE_RESULT from '@/mocks/data/roundVoteResult.json';

import { customRender } from '@/test-utils';

describe('RoundVoteContainer 컴포넌트 테스트', () => {
  it('기본 탭인 투표 통계 탭에서, 투표 현황 탭을 클릭하면 투표 현황을 보여준다.', async () => {
    const user = userEvent.setup();
    customRender(<RoundVoteContainer />);

    const button = await screen.findByRole('tab', { name: '투표 현황' });
    await user.click(button);

    await waitFor(() => {
      // 첫 번째 선택지의 투표 멤버 확인
      const firstOptionMembers = ROUND_VOTE_RESULT.group.firstOption.members;
      firstOptionMembers.forEach((member) => {
        expect(screen.getByText(member)).toBeInTheDocument();
      });

      // 두 번째 선택지의 투표 멤버 확인
      const secondOptionMembers = ROUND_VOTE_RESULT.group.secondOption.members;
      secondOptionMembers.forEach((member) => {
        expect(screen.getByText(member)).toBeInTheDocument();
      });

      // 투표를 하지 않은 멤버 확인
      const giveUpMembers = ROUND_VOTE_RESULT.group.giveUp.members;
      giveUpMembers.forEach((member) => {
        expect(screen.getByText(member)).toBeInTheDocument();
      });
    });
  });
});
