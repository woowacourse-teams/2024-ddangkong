import Button from '../../Button/Button';
import {
  errorFallbackLayout,
  errorImage,
  errorText,
  fallbackButtonContainer,
} from '../ErrorFallback.styled';

import ErrorDdangkong from '@/assets/images/errorDdangkong.webp';
import { CustomError, UnhandledError } from '@/utils/error';

interface AsyncErrorFallbackProps {
  error: unknown;
  resetError: () => void;
}

const AsyncErrorFallback = ({ error, resetError }: AsyncErrorFallbackProps) => {
  const goToHome = () => {
    window.location.href = '/';
  };

  return (
    <section css={errorFallbackLayout}>
      <img src={ErrorDdangkong} alt="에러나서 슬픈 땅콩" css={errorImage} />
      <h2 css={errorText}>
        {(error instanceof CustomError || error instanceof UnhandledError) && error.message}
      </h2>
      <div css={fallbackButtonContainer}>
        <Button onClick={resetError} text="다시 시도" size="medium" radius="medium" />
        <Button onClick={goToHome} text="홈으로" size="medium" radius="medium" />
      </div>
    </section>
  );
};

export default AsyncErrorFallback;
