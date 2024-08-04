import { renderHook, screen, waitFor } from '@testing-library/react';

import TabContentContainer from './TabContentContainer';

import useRoundVoteResultQuery from '@/hooks/useRoundVoteResultQuery';

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
});
