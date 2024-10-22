import { useQueryClient } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

import AlertModal from '../AlertModal/AlertModal';

import useModal from '@/hooks/useModal';
import useToast from '@/hooks/useToast';
import { CustomError, NetworkError } from '@/utils/error';

const isServerError = (status: number) => status >= 500 && status !== 555;

// QueryClient는 모든 Provider에 공유되면서 공통 에러 핸들링 로직에 Toast와 Modal을 넣기 위해 setDefaultOptions 사용
// 테스트 환경에서 retry 값이 있을 경우 에러 폴백 테스트가 돌지 않아 분기 처리
const QueryClientDefaultOptionProvider = ({ children }: PropsWithChildren) => {
  const queryClient = useQueryClient();
  const { show } = useToast();
  const { show: showModal } = useModal();

  queryClient.setDefaultOptions({
    queries: {
      retry: process.env.NODE_ENV === 'test' ? false : 3,
      throwOnError: true,
    },
    mutations: {
      onError: (error) => {
        if (error instanceof NetworkError) {
          show(error.message);
          return;
        }
        showModal(AlertModal, { title: '에러', message: error.message });
      },
      throwOnError: (err) => {
        const error = err as CustomError;
        return isServerError(error.status);
      },
      networkMode: 'always',
    },
  });

  return <>{children}</>;
};

export default QueryClientDefaultOptionProvider;
