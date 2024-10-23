import { css } from '@emotion/react';

// height: 전체 화면 - 헤더 높이 - 버튼 높이
export const gameResultLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
  width: 100%;
  height: calc(100dvh - 15dvh - 7.2rem);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const rankListContainer = css`
  display: flex;
  flex-basis: 60%;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const noMatchingLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding-top: 3.5rem;
`;

export const noMatchingImg = css`
  width: 18rem;
  height: 18rem;
`;

export const noMatchingText = css`
  font-size: 1.8rem;
  line-height: 3rem;
  text-align: center;
  white-space: pre-line;
`;

export const floatingButton = (direction: 'up' | 'down') => css`
  display: flex;
  position: fixed;
  ${direction === 'down' ? 'bottom: 10%' : 'top: 15%'};
  z-index: 1000;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 50%;

  background-color: #f7d7b4db;
  cursor: pointer;
  box-shadow: 0 0.2rem 1rem rgb(0 0 0 / 20%);
  opacity: 0.9;

  font-size: 2.4rem;

  img {
    width: 1.4rem;
  }
`;
