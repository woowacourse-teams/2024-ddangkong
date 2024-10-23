import { spinnerWrapper, rotatingImage, spinnerText } from './Spinner.styled';

import SpinDdangKong from '@/assets/images/spinDdangkong.webp';

interface SpinnerProps {
  message?: string;
  imageSrc?: string;
  imageSize?: number;
}

const Spinner = ({
  message = '로딩 중입니다...',
  imageSrc = SpinDdangKong,
  imageSize = 10,
}: SpinnerProps) => {
  return (
    <div css={spinnerWrapper}>
      <img src={imageSrc} alt="로딩 중..." css={rotatingImage(imageSize)} />
      <span css={spinnerText}>{message}</span>
    </div>
  );
};

export default Spinner;
