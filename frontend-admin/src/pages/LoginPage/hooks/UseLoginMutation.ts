import { login } from '@/apis/login';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const UseLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate('/content');
    },
  });
};

export default UseLoginMutation;
