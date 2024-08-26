import { useEffect, useState } from 'react';

import { readyPageLayout } from './ReadyPage.styled';
import { useGameStart } from './useGameStart';
import { useGetRoomInfo } from './useGetRoomInfo';

import CategoryContainer from '@/components/CategoryContainer/CategoryContainer';
import Button from '@/components/common/Button/Button';
import Spinner from '@/components/common/Spinner/Spinner';
import ReadyMembersContainer from '@/components/ReadyMembersContainer/ReadyMembersContainer';

const ReadyPage = () => {
  const { members, roomSetting, master, isLoading, isError } = useGetRoomInfo();
  const { memberInfo, handleGameStart, setMemberInfo } = useGameStart();
  const [prevMasterId, setPrevMasterId] = useState(master?.memberId);

  // 서버 응답값을 undefined에서 갱신
  useEffect(() => {
    setPrevMasterId(master?.memberId);
  }, [master?.memberId]);

  // 이전 방장과 현재 방장이 다르다 -> alert -> 이전 방장값에 현재 방장 넣기
  useEffect(() => {
    if (prevMasterId && prevMasterId !== master?.memberId) {
      alert(`${master?.nickname}님이 방장이 되었습니다.`);
      setPrevMasterId(master?.memberId);
    }
  }, [master?.memberId]);

  // 원래 방장이 아니다 + 방장의 memberId와 내 memberId가 같다 -> 방장으로 변경
  useEffect(() => {
    if (!memberInfo.isMaster && master?.memberId === memberInfo.memberId) {
      setMemberInfo({ ...memberInfo, isMaster: true });
    }
  }, [master?.memberId]);

  if (isLoading) return <Spinner imageSize={12} />;

  return (
    <div css={readyPageLayout}>
      <CategoryContainer category={roomSetting?.category.label} />
      {isError && <div>에러 발생</div>}
      {members && <ReadyMembersContainer members={members} />}
      <Button
        text={master?.memberId === memberInfo.memberId ? '시작' : '방장이 시작해주세요'}
        disabled={master?.memberId !== memberInfo.memberId}
        onClick={handleGameStart}
        bottom
      />
    </div>
  );
};

export default ReadyPage;
