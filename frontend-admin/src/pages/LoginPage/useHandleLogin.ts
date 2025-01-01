import useLoginMutation from './hooks/useLoginMutation';

interface UseHandleLoginProps {
  nickname: string;
  password: string;
  onSuccess?: () => void;
  onError?: () => void;
}

const useHandleLogin = ({ nickname, password, onSuccess, onError }: UseHandleLoginProps) => {
  const { mutate: login } = useLoginMutation();

  const handleLogin = () => {
    login(
      { nickname, password },
      {
        onSuccess,
        onError,
      },
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return { handleLogin, handleKeyDown };
};

export default useHandleLogin;
