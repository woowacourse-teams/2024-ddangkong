import { renderHook, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';

import TabContentContainer from './TabContentContainer';

import { MOCK_API_URL } from '@/constants/url';
import useRoundVoteResultQuery from '@/hooks/useRoundVoteResultQuery';
import ROUND_VOTE_RESULT from '@/mocks/data/roundVoteResult.json';
import { server } from '@/mocks/server';

import { customRender, wrapper } from '@/test-utils';
describe('TabContentContainer 컴포넌트 테스트', () => {
  it('라운드 결과 그룹원들이 선택한 퍼센트를 카운팅 애니메이션으로 보여준다.', async () => {
    customRender(<TabContentContainer isGroupTabActive={true} />);

    await waitFor(
      () => {
        expect(screen.getByText('73%')).toBeInTheDocument();
        expect(screen.getByText('27%')).toBeInTheDocument();
      },
      { timeout: 3000 },
    );
  });

  it('useRoundVoteResultQuery 커스텀 훅이 선택지에 대한 비율을 반환한다.', async () => {
    const { result } = renderHook(() => useRoundVoteResultQuery({ roomId: 1, contentId: 1 }), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.data?.group.firstOption.percent).toBe(73);
      expect(result.current.data?.group.secondOption.percent).toBe(27);
    });
  });

  it('아무도 투표하지 않아 모두 기권인 경우, "아무도 투표하지 않으셨네요 :)" 텍스트를 보여준다.', async () => {
    ROUND_VOTE_RESULT.group.firstOption.percent = 0;
    ROUND_VOTE_RESULT.group.secondOption.percent = 0;

    server.use(
      http.get(MOCK_API_URL.roundVoteResult, () => {
        return HttpResponse.json(ROUND_VOTE_RESULT);
      }),
    );

    customRender(<TabContentContainer isGroupTabActive={true} />);

    await waitFor(() => {
      expect(screen.getByText('아무도 투표하지 않으셨네요 :)')).toBeInTheDocument();
    });
  });
});
