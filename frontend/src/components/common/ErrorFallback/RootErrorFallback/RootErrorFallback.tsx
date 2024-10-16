import { captureException, withScope } from '@sentry/react';

import Button from '../../Button/Button';
import {
  errorFallbackLayout,
  errorImage,
  errorText,
  fallbackButtonContainer,
} from '../ErrorFallback.styled';

import ErrorDdangkong from '@/assets/images/errorDdangkong.webp';

interface RootErrorFallbackProps {
  error: unknown;
  resetError: () => void;
}

const RootErrorFallback = ({ error, resetError }: RootErrorFallbackProps) => {
  const goToHome = () => {
    window.location.href = '/';
  };

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
      <div css={fallbackButtonContainer}>
        <Button onClick={resetError} text="다시 시도" size="medium" radius="medium" />
        <Button onClick={goToHome} text="홈으로" size="medium" radius="medium" />
      </div>
    </section>
  );
};

export default RootErrorFallback;
