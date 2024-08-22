import { readyPageLayout } from './ReadyPage.styled';
import { useGameStart } from './useGameStart';
import { useGetRoomInfo } from './useGetRoomInfo';

import CategoryContainer from '@/components/CategoryContainer/CategoryContainer';
import Button from '@/components/common/Button/Button';
import Spinner from '@/components/common/Spinner/Spinner';
import ReadyMembersContainer from '@/components/ReadyMembersContainer/ReadyMembersContainer';

const ReadyPage = () => {
  const { members, roomSetting, isLoading, isError } = useGetRoomInfo();
  const { isMaster, handleGameStart } = useGameStart();

  if (isLoading) return <Spinner imageSize={12} />;

  return (
    <div css={readyPageLayout}>
      <CategoryContainer category={roomSetting?.category.label} />
      {isError && <div>에러 발생</div>}
      {members && <ReadyMembersContainer members={members} />}
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
