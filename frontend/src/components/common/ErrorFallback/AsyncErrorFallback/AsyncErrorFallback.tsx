import { useNavigate } from 'react-router-dom';

import Button from '../../Button/Button';
import {
  errorFallbackLayout,
  errorImage,
  errorText,
  fallbackButtonContainer,
} from '../ErrorFallback.styled';

import ErrorDdangkong from '@/assets/images/errorDdangkong.png';
import { CustomError } from '@/utils/error';

interface AsyncErrorFallback {
  error: unknown;
  resetError: () => void;
}

const AsyncErrorFallback = ({ error, resetError }: AsyncErrorFallback) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <section css={errorFallbackLayout}>
      <img src={ErrorDdangkong} alt="에러나서 슬픈 땅콩" css={errorImage} />
      <h2 css={errorText}>{error instanceof CustomError && error.message}</h2>
      <div css={fallbackButtonContainer}>
        <Button onClick={resetError} text="다시 시도" size="medium" radius="medium" />
        <Button onClick={goToHome} text="홈으로" size="medium" radius="medium" />
      </div>
    </section>
  );
};

export default AsyncErrorFallback;
