import SpinDdangkong from '@/assets/images/spinDdangkong.webp';
import {
  image,
  loginContainer,
  loginHeaderContainer,
  loginLayout,
  loginTitle,
} from './LoginPage.styles';

import LoginInputContainer from './components/LoginInputContainer/LoginInputContainer';

const LoginPage = () => {
  return (
    <div css={loginLayout}>
      <div css={loginContainer}>
        <div css={loginHeaderContainer}>
          <img src={SpinDdangkong} alt="땅콩 로고" css={image} />
          <span css={loginTitle}>ddangkong</span>
        </div>
        <LoginInputContainer />
      </div>
    </div>
  );
};

export default LoginPage;
