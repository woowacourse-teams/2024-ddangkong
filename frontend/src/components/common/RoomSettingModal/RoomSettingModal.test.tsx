import { renderHook, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import RoomSettingModal from './RoomSettingModal';

import { ONE_SECOND } from '@/constants/time';
import ROOM_INFO from '@/mocks/data/roomInfo.json';
import { useGetRoomInfo } from '@/pages/ReadyPage/useGetRoomInfo';
import { customRender, wrapper } from '@/utils/test-utils';

describe('RoomSettingModal 방 설정 모달 테스트', () => {
  it('방 설정 모달에서 적용 버튼을 클릭하면 모달이 닫힌다.', async () => {
    const user = userEvent.setup();
    const onCloseMock = jest.fn();
    const clickButton = async (name: string) => {
      const button = await screen.findByRole('button', { name });
      await user.click(button);
    };

    customRender(<RoomSettingModal isOpen={true} onClose={onCloseMock} />);

    await clickButton('적용');

    await waitFor(() => {
      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
  });

  it('방의 카테고리를 변경한 후 적용 버튼을 클릭하면 카테고리 설정이 변경된다.', async () => {
    const user = userEvent.setup();
    const CATEGORY = '연애';
    const clickButton = async (name: string) => {
      const button = await screen.findByRole('button', { name });
      await user.click(button);
    };

    const { result } = renderHook(() => useGetRoomInfo(), { wrapper });
    customRender(<RoomSettingModal isOpen={true} onClose={jest.fn()} />);

    await waitFor(() => {
      expect(result.current.roomSetting).toEqual(ROOM_INFO.roomSetting);
    });

    await clickButton('음식 드랍다운 화살표');
    await clickButton(CATEGORY);
    await clickButton('적용');

    await waitFor(() => {
      expect(result.current.roomSetting?.category.label).toBe(CATEGORY);
    });
  });

  it('방의 총 라운드를 변경한 후 적용 버튼을 클릭하면 총 라운드 설정이 변경된다.', async () => {
    const user = userEvent.setup();
    const TOTAL_ROUND = 7;
    const clickButton = async (name: string) => {
      const button = await screen.findByRole('button', { name });
      await user.click(button);
    };

    const { result } = renderHook(() => useGetRoomInfo(), { wrapper });
    customRender(<RoomSettingModal isOpen={true} onClose={jest.fn()} />);

    await waitFor(() => {
      expect(result.current.roomSetting).toEqual(ROOM_INFO.roomSetting);
    });

    await clickButton(TOTAL_ROUND.toString());
    await clickButton('적용');

    await waitFor(() => {
      expect(result.current.roomSetting?.totalRound).toBe(TOTAL_ROUND);
    });
  });

  it('방의 라운드 당 타이머를 변경한 후 적용 버튼을 클릭하면 타이머 설정이 변경된다.', async () => {
    const user = userEvent.setup();
    const TIME_LIMIT = 10000;
    const clickButton = async (name: string) => {
      const button = await screen.findByRole('button', { name });
      await user.click(button);
    };

    const { result } = renderHook(() => useGetRoomInfo(), { wrapper });
    customRender(<RoomSettingModal isOpen={true} onClose={jest.fn()} />);

    await waitFor(() => {
      expect(result.current.roomSetting).toEqual(ROOM_INFO.roomSetting);
    });

    await clickButton(`${TIME_LIMIT / ONE_SECOND}초`);
    await clickButton('적용');

    await waitFor(() => {
      expect(result.current.roomSetting?.timeLimit).toBe(TIME_LIMIT);
    });
  });
});
