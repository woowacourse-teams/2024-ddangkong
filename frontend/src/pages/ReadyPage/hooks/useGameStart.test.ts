import { useMutation } from '@tanstack/react-query';
import { act, renderHook } from '@testing-library/react';
import { useRecoilValue } from 'recoil';

import { useGameStart } from './useGameStart';

import { wrapper } from '@/utils/test-utils';

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useMutation: jest.fn(),
}));

jest.mock('recoil', () => ({
  ...jest.requireActual('recoil'),
  useRecoilValue: jest.fn(),
}));

describe('useGameStart hook 테스트', () => {
  const mockStartGameMutation = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useMutation as jest.Mock).mockImplementation(() => ({
      mutate: mockStartGameMutation,
    }));
  });

  it('방장이 게임 시작 버튼을 누른 경우 게임이 시작 된다', () => {
    // Given
    (useRecoilValue as jest.Mock).mockReturnValue({ isMaster: true });
    const { result } = renderHook(() => useGameStart(), {
      wrapper,
    });

    // When
    act(() => {
      result.current.handleGameStart();
    });

    // Then
    expect(mockStartGameMutation).toHaveBeenCalledTimes(1);
  });

  it('멤버가 게임 시작 버튼을 누른 경우에는 게임이 시작되지 않는다.', () => {
    // Given
    (useRecoilValue as jest.Mock).mockReturnValue({ isMaster: false });
    const { result } = renderHook(() => useGameStart(), {
      wrapper,
    });

    // When
    act(() => {
      result.current.handleGameStart();
    });

    // Then
    expect(mockStartGameMutation).not.toHaveBeenCalled();
  });
});
