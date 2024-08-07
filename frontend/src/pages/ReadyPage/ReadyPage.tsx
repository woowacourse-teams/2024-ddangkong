import { readyPageLayout } from './ReadyPage.styled';
import { useGameStart } from './useGameStart';
import { useGetRoomInfo } from './useGetRoomInfo';

import CategoryContainer from '@/components/CategoryContainer/CategoryContainer';
import Button from '@/components/common/Button/Button';
import ReadyMembersContainer from '@/components/ReadyMembersContainer/ReadyMembersContainer';

const ReadyPage = () => {
  const { members, isLoading, isError } = useGetRoomInfo();
  const { isMaster, handleGameStart } = useGameStart();

  return (
    <div css={readyPageLayout}>
      <CategoryContainer category="연애" />
      {isError && <div>에러 발생</div>}
      {isLoading && <div>로딩중.......</div>}
      {members && <ReadyMembersContainer members={members} />}
      <Button text="시작" disabled={!isMaster} onClick={handleGameStart} bottom />
    </div>
  );
};

export default ReadyPage;
