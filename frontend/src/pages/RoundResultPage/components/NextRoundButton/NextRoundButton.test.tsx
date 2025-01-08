import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import NextRoundButton from './NextRoundButton';

import useIsMaster from '@/hooks/useIsMaster';

import { customRender } from '@/test-utils';

jest.mock('@/hooks/useIsMaster');

describe('NextRoundButton 컴포넌트 테스트', () => {
  it('방장은 활성화 되어 있는 "다음" 버튼이 화면에 보인다.', async () => {
    // Given
    (useIsMaster as jest.Mock).mockReturnValue(true);
    customRender(<NextRoundButton />);

    // When
    const button = await screen.findByRole('button', { name: '다음' });

    // Then
    expect(button).toBeEnabled();
  });

  it('방장이 아닌 참여자는 비활성화 되어 있는 "방장이 진행해 주세요" 버튼이 화면에 보인다.', async () => {
    // Given
    (useIsMaster as jest.Mock).mockReturnValue(false);
    customRender(<NextRoundButton />);

    // When
    const button = await screen.findByRole('button', { name: '방장이 진행해 주세요' });

    // Then
    expect(button).toBeDisabled();
  });

  it('방장이 "다음" 버튼을 클릭하면 안내 모달이 열린다.', async () => {
    // Given
    (useIsMaster as jest.Mock).mockReturnValue(true);
    customRender(<NextRoundButton />);

    // When
    const button = await screen.findByRole('button', { name: '다음' });
    await userEvent.click(button);

    // Then
    await waitFor(() => {
      const closeIcon = screen.getByAltText('닫기 버튼');
      expect(closeIcon).toBeInTheDocument();
    });
  });
});
