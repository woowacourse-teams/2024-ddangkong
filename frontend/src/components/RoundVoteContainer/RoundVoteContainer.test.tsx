import { screen, waitFor } from '@testing-library/react';
import { customRender } from 'test-utils';

import RoundVoteContainer from './RoundVoteContainer';

describe('RoundVoteContainer 컴포넌트 테스트', () => {
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
