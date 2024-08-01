import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { readyPageLayout } from './ReadyPage.styled';

import { getRoomMembers } from '@/apis/room';
import CategoryContainer from '@/components/CategoryContainer/CategoryContainer';
import Button from '@/components/common/Button/Button';
import ReadyMembersContainer from '@/components/ReadyMembersContainer/ReadyMembersContainer';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { memberInfoState } from '@/recoil/atom';

const ReadyPage = () => {
  const handleClick = () => {};
  const memberInfo = useRecoilValue(memberInfoState);
  const { search } = useLocation();
  const roomId = Number(new URLSearchParams(search).get('roomId'));

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.roomMembers, roomId],
    queryFn: ({ queryKey: [_, roomId] }) => getRoomMembers(roomId as number),
    refetchInterval: 1000,
  });

  return (
    <div css={readyPageLayout}>
      <CategoryContainer category="연애" />
      {isError && <div>에러 발생</div>}
      {isLoading && <div>로딩중.......</div>}
      {data && <ReadyMembersContainer members={data.members} />}
      <Button text="시작" disabled={!memberInfo.isMaster} onClick={handleClick} bottom />
    </div>
  );
};

export default ReadyPage;
