import { useQueryClient } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

import AlertModal from '../AlertModal/AlertModal';

import useModal from '@/hooks/useModal';
import useToast from '@/hooks/useToast';
import { CustomError, NetworkError } from '@/utils/error';

const isServerError = (status: number) => status >= 500 && status !== 555;

const QueryClientDefaultOptionProvider = ({ children }: PropsWithChildren) => {
  const queryClient = useQueryClient();
  const { show } = useToast();
  const { show: showModal } = useModal();

  queryClient.setDefaultOptions({
    queries: { throwOnError: true },
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
