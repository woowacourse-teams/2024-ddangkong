import { useEffect } from 'react';

import { readyPageLayout } from './ReadyPage.styled';
import { useGameStart } from './useGameStart';
import { useGetRoomInfo } from './useGetRoomInfo';

import CategoryContainer from '@/components/CategoryContainer/CategoryContainer';
import Button from '@/components/common/Button/Button';
import Spinner from '@/components/common/Spinner/Spinner';
import ReadyMembersContainer from '@/components/ReadyMembersContainer/ReadyMembersContainer';

const ReadyPage = () => {
  const { members, roomSetting, isLoading, isError } = useGetRoomInfo();
  const { memberInfo, handleGameStart, setMemberInfo } = useGameStart();
  const masterId = members?.filter((member) => member.isMaster)[0].memberId;

  useEffect(() => {
    if (!memberInfo.isMaster && masterId === memberInfo.memberId) {
      setMemberInfo({ ...memberInfo, isMaster: true });
    }
  }, [masterId]);

  if (isLoading) return <Spinner imageSize={12} />;
  return (
    <div css={readyPageLayout}>
      <CategoryContainer category={roomSetting?.category.label} />
      {isError && <div>에러 발생</div>}
      {members && <ReadyMembersContainer members={members} />}
      <Button
        text={masterId === memberInfo.memberId ? '시작' : '방장이 시작해주세요'}
        disabled={masterId !== memberInfo.memberId}
        onClick={handleGameStart}
        bottom
      />
    </div>
  );
};

export default ReadyPage;
