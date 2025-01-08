import useGetUserInfo from '@/hooks/useGetUserInfo';

const useIsMaster = () => {
  const {
    member: { isMaster },
  } = useGetUserInfo();
  return isMaster;
};

export default useIsMaster;
