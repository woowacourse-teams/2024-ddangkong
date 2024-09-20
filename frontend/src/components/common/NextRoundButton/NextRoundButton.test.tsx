import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import NextRoundButton from './NextRoundButton';

import { customRenderWithIsMaster } from '@/test-utils';

describe('NextRoundButton 컴포넌트 테스트', () => {
  it('방장은 활성화 되어 있는 "다음" 버튼이 화면에 보인다.', async () => {
    customRenderWithIsMaster(<NextRoundButton showModal={jest.fn()} />, true);

    const button = await screen.findByRole('button', { name: '다음' });

    expect(button).toBeEnabled();
  });

  it('방장이 아닌 참여자는 비활성화 되어 있는 "방장이 진행해 주세요" 버튼이 화면에 보인다.', async () => {
    customRenderWithIsMaster(<NextRoundButton showModal={jest.fn()} />, false);

    const button = await screen.findByRole('button', { name: '방장이 진행해 주세요' });

    expect(button).toBeDisabled();
  });

  it('방장이 "다음" 버튼을 클릭하면 안내 모달을 여는 함수가 호출된다.', async () => {
    const handleModalOpen = jest.fn();
    customRenderWithIsMaster(<NextRoundButton showModal={handleModalOpen} />, true);

    const button = await screen.findByRole('button', { name: '다음' });
    await userEvent.click(button);

    await waitFor(() => {
      expect(handleModalOpen).toHaveBeenCalledTimes(1);
    });
  });
});
