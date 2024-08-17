import useCategoryDropdown from './useCategoryDropdown';
import useTimerPerRound from './useTimerPerRound';
import useTotalRound from './useTotalRound';

import { useGetRoomInfo } from '@/pages/ReadyPage/useGetRoomInfo';

const useRoomSetting = () => {
  const { roomSetting: selectedRoomSetting } = useGetRoomInfo();

  const { category, handleClickOption } = useCategoryDropdown(selectedRoomSetting?.category);
  const { totalRound, handleClickRound } = useTotalRound(selectedRoomSetting?.totalRound);
  const { timerPerRound, handleClickTimer } = useTimerPerRound(selectedRoomSetting?.timeLimit);

  const roomSetting = { category, totalRound, timerPerRound };

  return { roomSetting, handleClickOption, handleClickRound, handleClickTimer };
};

export default useRoomSetting;
