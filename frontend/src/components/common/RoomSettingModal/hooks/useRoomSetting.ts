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
  const { timeLimitPerRound, handleClickTimeLimit } = useTimerPerRound(
    selectedRoomSetting?.timeLimit,
  );

  const roomSetting = { category, totalRound, timeLimitPerRound };

  const handleClickApply = () => {
    if (!category || !totalRound || !timeLimitPerRound) return;

    applyRoomSetting({ category, totalRound, timeLimit: timeLimitPerRound });
    onClose();
  };

  return {
    roomSetting,
    handleClickOption,
    handleClickRound,
    handleClickTimeLimit,
    handleClickApply,
  };
};

export default useRoomSetting;
