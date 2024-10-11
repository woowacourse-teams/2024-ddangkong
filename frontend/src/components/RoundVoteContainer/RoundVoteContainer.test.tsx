import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import RoundVoteContainer from './RoundVoteContainer';

import { customRender } from '@/test-utils';

describe('RoundVoteContainer 컴포넌트 테스트', () => {
  it('기본 탭인 투표 통계 탭에서, 투표 현황 탭을 클릭하면 투표 현황을 보여준다.', async () => {
    const user = userEvent.setup();
    customRender(<RoundVoteContainer />);

    const button = await screen.findByRole('tab', { name: '투표 현황' });
    await user.click(button);

    await waitFor(() => {
      // 첫 번째 선택지의 투표자 확인
      expect(screen.getByText('d')).toBeInTheDocument();

      // 두 번째 선택지의 투표자들 확인
      expect(screen.getByText('일이삼사오육칠팔구십일이')).toBeInTheDocument();
      expect(screen.getByText('가나다라마바사아자차카타')).toBeInTheDocument();
      expect(screen.getByText('abc')).toBeInTheDocument();
      expect(screen.getByText('땅콩땅콩땅콩땅콩땅콩땅콩')).toBeInTheDocument();
      expect(screen.getByText('123456789012')).toBeInTheDocument();
      expect(screen.getByText('안녕하세요안녕하세요안녕')).toBeInTheDocument();
    });
  });
});
