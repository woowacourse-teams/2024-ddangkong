import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import RoundVoteContainer from './RoundVoteContainer';

import { customRender } from '@/test-utils';

describe('RoundVoteContainer 컴포넌트 테스트', () => {
  it('기본 탭인 투표 통계 탭에서, 투표 현황 탭을 클릭하면 투표 현황을 보여준다.', async () => {
    const user = userEvent.setup();
    customRender(<RoundVoteContainer />);

    const button = await screen.findByRole('button', { name: '투표 현황' });
    await user.click(button);

    await waitFor(
      () => {
        // 첫 번째 선택지와 투표자 확인
        expect(
          screen.getByText((content) => content.includes('100억 빚 송강')),
        ).toBeInTheDocument();
        expect(screen.getByText((content) => content.includes('d'))).toBeInTheDocument();
        // 두 번째 선택지와 투표자 확인
        expect(
          screen.getByText((content) => content.includes('100억 부자 송강호')),
        ).toBeInTheDocument();
        expect(
          screen.getByText((content) => content.includes('일이삼사오육칠팔구십일이')),
        ).toBeInTheDocument();
        // 기권자 확인
        expect(
          screen.getByText((content) => content.includes('투표에 참여하지 않으셨어요')),
        ).toBeInTheDocument();
        expect(screen.getByText((content) => content.includes('ㅁ'))).toBeInTheDocument();
      },
      { timeout: 3000 },
    );
  });
});
