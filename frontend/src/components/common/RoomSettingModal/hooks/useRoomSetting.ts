import { useParams } from 'react-router-dom';

import useApplyRoomSetting from './useApplyRoomSetting';
import useCategoryDropdown from './useCategoryDropdown';
import useTimerPerRound from './useTimerPerRound';
import useTotalRound from './useTotalRound';

import { useGetRoomInfo } from '@/pages/ReadyPage/useGetRoomInfo';

interface UseRoomSettingProps {
  onClose: () => void;
}

const useRoomSetting = ({ onClose }: UseRoomSettingProps) => {
  const { roomId } = useParams();
  const { mutate: applyRoomSetting } = useApplyRoomSetting(Number(roomId));
  const { roomSetting: selectedRoomSetting } = useGetRoomInfo();

  const { category, handleClickOption } = useCategoryDropdown(selectedRoomSetting?.category);
  const { totalRound, handleClickRound } = useTotalRound(selectedRoomSetting?.totalRound);
  const { timerPerRound, handleClickTimer } = useTimerPerRound(selectedRoomSetting?.timeLimit);

  const roomSetting = { category, totalRound, timerPerRound };

  const handleClickApply = () => {
    if (!category || !totalRound || !timerPerRound) return;

    applyRoomSetting({ category, totalRound, timeLimit: timerPerRound });
    onClose();
  };

  return { roomSetting, handleClickOption, handleClickRound, handleClickTimer, handleClickApply };
};

export default useRoomSetting;
