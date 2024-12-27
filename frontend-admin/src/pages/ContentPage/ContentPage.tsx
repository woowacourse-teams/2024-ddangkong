import SpinDdangkong from "@/assets/images/spinDdangkong.webp";
import {
  contentContainer,
  contentHeaderContainer,
  contentHeaderWrapper,
  contentLayout,
  headerContainer,
  image,
  leftHeader,
  loginTitle,
  logoutButton,
  questionAppendButton,
  rightHeader,
} from "./ContentPage.styles";
import ContentContainer from "./components/ContentContainer/ContentContainer";

const ContentPage = () => {
  return (
    <div css={contentLayout}>
      <div css={contentContainer}>
        <div css={headerContainer}>
          <div css={leftHeader}>
            <img src={SpinDdangkong} alt="땅콩 로고" css={image} />
            <span css={loginTitle}>ddangkong</span>
          </div>
          <div css={rightHeader}>
            <button css={logoutButton}>로그아웃</button>
          </div>
        </div>
        <div css={contentHeaderContainer}>
          <div css={contentHeaderWrapper}>
            <button css={questionAppendButton}>질문 추가</button>
          </div>
        </div>
        <ContentContainer />
      </div>
    </div>
  );
};

export default ContentPage;
