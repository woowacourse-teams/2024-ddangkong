import Button from '../../Button/Button';
import { errorFallbackLayout, errorImage, errorText } from '../ErrorFallback.styled';

import ErrorDdangkong from '@/assets/images/errorDdangkong.png';

interface AsyncErrorFallback {
  resetError: () => void;
}

const AsyncErrorFallback = ({ resetError }: AsyncErrorFallback) => {
  return (
    <section css={errorFallbackLayout}>
      <img src={ErrorDdangkong} alt="에러나서 슬픈 땅콩" css={errorImage} />
      <h2 css={errorText}>
        서버에 오류가 발생했어요.
        <br /> 다시 시도해 주세요!
      </h2>
      <Button onClick={resetError} text="다시 시도" size="medium" radius="medium" />
    </section>
  );
};

export default AsyncErrorFallback;
