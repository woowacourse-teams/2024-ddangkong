import { useMutation } from '@tanstack/react-query';
import { renderHook, act } from '@testing-library/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { useMakeOrEnterRoom } from './useMakeOrEnterRoom';

import { createRoom, enterRoom } from '@/apis/room';
import { ROUTES } from '@/constants/routes';
import { memberInfoState } from '@/recoil/atom';
import { createRandomNickname } from '@/utils/nickname';
import { wrapper } from '@/utils/test-utils';

// Mock all the external dependencies
jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));
jest.mock('recoil', () => ({
  useRecoilValue: jest.fn(),
}));
jest.mock('@/apis/room', () => ({
  createRoom: jest.fn(),
  enterRoom: jest.fn(),
}));
jest.mock('@/utils/nickname', () => ({
  createRandomNickname: jest.fn(),
}));

describe('useMakeOrEnterRoom', () => {
  const mockNavigate = jest.fn();
  const mockCreateRoom = jest.fn();
  const mockEnterRoom = jest.fn();
  const mockRandomNickname = 'randomNickname';

  beforeEach(() => {
    jest.clearAllMocks();

    useNavigate.mockReturnValue(mockNavigate);
    useParams.mockReturnValue({ roomId: '123' });
    useRecoilValue.mockReturnValue({ isMaster: true });
    createRandomNickname.mockReturnValue(mockRandomNickname);

    useMutation.mockImplementation(({ mutationFn }) => ({
      mutate: jest.fn((args) => mutationFn(args)),
    }));

    createRoom.mockImplementation(mockCreateRoom);
    enterRoom.mockImplementation(mockEnterRoom);
  });

  it('should create a room if isMaster is true', async () => {
    const { result } = renderHook(() => useMakeOrEnterRoom(), { wrapper });

    act(() => {
      result.current.handleMakeOrEnterRoom();
    });

    expect(mockCreateRoom).toHaveBeenCalledWith(mockRandomNickname);
    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.ready(Number('undefined')));
  });

  it('should enter a room if isMaster is false', async () => {
    useRecoilValue.mockReturnValue({ isMaster: false });

    const { result } = renderHook(() => useMakeOrEnterRoom(), { wrapper });

    act(() => {
      result.current.handleMakeOrEnterRoom();
    });

    expect(mockEnterRoom).toHaveBeenCalledWith(123, mockRandomNickname);
    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.ready(123));
  });
});
