import { useQuery } from '@tanstack/react-query';
import { renderHook, act } from '@testing-library/react';
import { useParams, useNavigate } from 'react-router-dom';

import { useGetRoomInfo } from './useGetRoomInfo';

// 모킹
jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),

  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('useGetRoomInfo', () => {
  it('게임이 시작되면 모든 유저는 게임화면으로 이동한다.', async () => {
    // Given
    const navigateMock = jest.fn();
    (useParams as jest.Mock).mockReturnValue({ roomId: '3' });
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    (useQuery as jest.Mock).mockReturnValue({
      data: { isGameStart: true, members: [] },
      isLoading: false,
      isError: false,
    });

    // When
    renderHook(() => useGetRoomInfo());

    // Then
    expect(navigateMock).toHaveBeenCalledWith('/3/game');
  });
});
