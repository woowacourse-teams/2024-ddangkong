import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useIsRoomInitial } from './hooks/useCheckRoomReset';

import GameResult from '@/components/GameResult/GameResult';
import Content from '@/components/layout/Content/Content';
import { QUERY_KEYS } from '@/constants/queryKeys';

const GameResultPage = () => {
  const { roomId } = useParams();

  // const queryClient = useQueryClient();

  // useEffect(() => {
  //   queryClient.removeQueries({ queryKey: [QUERY_KEYS.roomMembers, Number(roomId)] });
  // });

  useIsRoomInitial();
  return (
    <Content>
      <GameResult />
    </Content>
  );
};

export default GameResultPage;
