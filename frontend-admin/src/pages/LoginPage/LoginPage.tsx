import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
import SpinDdangkong from "@/assets/images/spinDdangkong.webp";

const LoginPage = () => {
  return (
    <div css={layout}>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 3.2rem;
          padding: 2.4rem 3.6rem;
          background-color: white;
          border-radius: 2.4rem;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2.4rem;
            height: 6rem;
          `}
        >
          <img
            src={SpinDdangkong}
            alt="땅콩 로고"
            css={css`
              width: 100%;
              height: 100%;
              object-fit: scale-down;
            `}
          />
          <span
            css={css`
              font-size: 3.6rem;
              font-weight: bold;
            `}
          >
            ddangkong
          </span>
        </div>
        <input css={nicknameInput} placeholder="비밀번호를 입력해주세요" />
        <button css={loginButton}>로그인</button>
      </div>
    </div>
  );
};

const layout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${theme.color.peanut300};
`;

const nicknameInput = css`
  width: 32rem;
  border: 1px solid ${theme.color.gray};
  padding: 1.2rem;
  border-radius: 0.8rem;
  background-color: white;
  font-size: 1.6rem;
  outline: none;

  &:focus {
    outline: 1px solid black;
  }
`;

const loginButton = css`
  width: 8rem;
  padding: 1.2rem;
  border-radius: 0.8rem;
  background-color: ${theme.color.peanut400};
  font-size: 1.6rem;
  outline: none;

  &:focus {
    outline: 1px solid black;
  }
`;

export default LoginPage;
