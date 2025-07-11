import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { passMaster } from '@/apis/room';

const usePassMaster = (memberId: number) => {
  const { roomId } = useParams();

  const passMasterMutation = useMutation({
    mutationFn: () => passMaster(Number(roomId), memberId),
  });

  const handlePassMaster = () => {
    passMasterMutation.mutate();
  };

  return { handlePassMaster, ...passMasterMutation };
};

export default usePassMaster;
