import { screen, waitFor } from '@testing-library/react';
import { customRender } from 'test-utils';

import RoundVoteContainer from './RoundVoteContainer';

describe('RoundVoteContainer 컴포넌트 테스트', () => {
  it('그룹탭과 전체탭이 존재한다.', () => {
    customRender(<RoundVoteContainer />);

    expect(screen.getByText('그룹')).toBeInTheDocument();
    expect(screen.getByText('전체')).toBeInTheDocument();
  });
  it('라운드 결과로 질문과 선택한 인원을 보여준다.', async () => {
    customRender(<RoundVoteContainer />);

    await waitFor(() => {
      expect(screen.getByText('100억 빚 송강')).toBeInTheDocument();
      expect(screen.getByText('100억 부자 송강호')).toBeInTheDocument();
      expect(screen.getByText('7명')).toBeInTheDocument();
      expect(screen.getByText('3명')).toBeInTheDocument();
    });
  });
  it('라운드 결과 그룹원들이 선택한 퍼센트를 카운팅 애니메이션으로 보여준다.', async () => {
    customRender(<RoundVoteContainer />);

    await waitFor(
      () => {
        expect(screen.getByText('73%')).toBeInTheDocument();
        expect(screen.getByText('27%')).toBeInTheDocument();
      },
      { timeout: 3000 },
    );
  });
});
