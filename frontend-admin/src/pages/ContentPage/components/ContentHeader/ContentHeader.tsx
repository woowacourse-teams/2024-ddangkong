import SpinDdangkong from '@/assets/images/spinDdangkong.webp';
import {
  headerContainer,
  image,
  leftHeader,
  loginTitle,
  logoutButton,
  rightHeader,
} from './ContentHeader.styles';

const ContentHeader = () => {
  return (
    <div css={headerContainer}>
      <div css={leftHeader}>
        <img src={SpinDdangkong} alt="땅콩 로고" css={image} />
        <span css={loginTitle}>ddangkong</span>
      </div>
      <div css={rightHeader}>
        <button css={logoutButton}>로그아웃</button>
      </div>
    </div>
  );
};

export default ContentHeader;
