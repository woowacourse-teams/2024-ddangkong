import { captureException, withScope } from '@sentry/react';

import Button from '../../Button/Button';
import { errorFallbackLayout, errorImage, errorText } from '../ErrorFallback.styled';

import ErrorDdangkong from '@/assets/images/errorDdangkong.png';

interface RootErrorFallbackProps {
  error: unknown;
  resetError: () => void;
}

const RootErrorFallback = ({ error, resetError }: RootErrorFallbackProps) => {
  if (error instanceof Error) {
    withScope((scope) => {
      scope.setLevel('fatal');
      scope.setTag('client', 'serviceError');
      captureException(new Error(error.message));
    });
  }

  return (
    <section css={errorFallbackLayout}>
      <img src={ErrorDdangkong} alt="에러나서 슬픈 땅콩" css={errorImage} />
      <h2 css={errorText}>
        서비스에 장애가 발생했습니다.
        <br /> 다음에 다시 이용해주세요!
      </h2>
      <Button onClick={resetError} text="다시 시도" size="medium" radius="medium" />
    </section>
  );
};

export default RootErrorFallback;
