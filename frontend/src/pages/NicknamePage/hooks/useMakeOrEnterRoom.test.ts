import { useMutation } from '@tanstack/react-query';
import { renderHook, act } from '@testing-library/react';
import { useRecoilState } from 'recoil';

import { useMakeOrEnterRoom } from './useMakeOrEnterRoom';

import { wrapper } from '@/utils/test-utils';

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useMutation: jest.fn(),
}));

jest.mock('recoil', () => ({
  ...jest.requireActual('recoil'),
  useRecoilState: jest.fn(),
}));

describe('useMakeOrEnterRoom hook 테스트', () => {
  const mockCreateRoom = jest.fn();
  const mockEnterRoom = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useMutation as jest.Mock)
      .mockImplementationOnce(() => ({
        mutate: mockCreateRoom,
      }))
      .mockImplementationOnce(() => ({
        mutate: mockEnterRoom,
      }));
  });

  it('방장이 확인 버튼을 누른 경우 방이 생성된다.', () => {
    // Given
    (useRecoilState as jest.Mock).mockReturnValue([{ isMaster: true }, jest.fn()]);
    const { result } = renderHook(() => useMakeOrEnterRoom(), {
      wrapper,
    });

    // When
    act(() => {
      result.current.handleMakeOrEnterRoom();
    });

    // Then
    expect(mockCreateRoom).toHaveBeenCalledTimes(1);
    expect(mockEnterRoom).not.toHaveBeenCalled();
  });

  it('멤버가 확인 버튼을 누른 경우 방에 참여한다.', () => {
    // Given
    (useRecoilState as jest.Mock).mockReturnValue([{ isMaster: false }, jest.fn()]);
    const { result } = renderHook(() => useMakeOrEnterRoom(), {
      wrapper,
    });

    // When
    act(() => {
      result.current.handleMakeOrEnterRoom();
    });

    // Then
    expect(mockEnterRoom).toHaveBeenCalledTimes(1);
    expect(mockCreateRoom).not.toHaveBeenCalled();
  });
});
