import { readyPageLayout } from './ReadyPage.styled';
import { useGameStart } from './useGameStart';
import { useGetRoomInfo } from './useGetRoomInfo';

import SettingIcon from '@/assets/images/settingsIcon.svg';
import CategoryContainer from '@/components/CategoryContainer/CategoryContainer';
import Button from '@/components/common/Button/Button';
import SettingModal from '@/components/common/SettingModal/SettingModal';
import ReadyMembersContainer from '@/components/ReadyMembersContainer/ReadyMembersContainer';
import useModal from '@/hooks/useModal';

const ReadyPage = () => {
  const { members, roomSetting, isLoading, isError } = useGetRoomInfo();
  const { isMaster, handleGameStart } = useGameStart();
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <div css={readyPageLayout}>
      <CategoryContainer category={roomSetting?.category} />
      {isError && <div>에러 발생</div>}
      {isLoading && <div>로딩중.......</div>}
      <button onClick={handleModalOpen}>
        <img src={SettingIcon} alt="방 설정" width={24} height={24} />
      </button>
      {members && <ReadyMembersContainer members={members} />}
      {isModalOpen && <SettingModal isOpen={isModalOpen} onClose={handleModalClose} />}
      <Button
        text={isMaster ? '시작' : '방장이 시작해주세요'}
        disabled={!isMaster}
        onClick={handleGameStart}
        bottom
      />
    </div>
  );
};

export default ReadyPage;
