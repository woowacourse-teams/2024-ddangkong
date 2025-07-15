import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { passMaster } from '@/apis/room';

const usePassMaster = (memberId: number) => {
  const { roomId } = useParams();
  return useMutation({
    mutationFn: () => passMaster(Number(roomId), memberId),
  });
};

export default usePassMaster;
