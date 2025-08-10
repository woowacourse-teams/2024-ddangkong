/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import {
  centerSide,
  headerLayout,
  matchingResultCaption,
  matchingResultTitle,
} from '../Header.styled';

import { useFocus } from '@/hooks';

interface MatchingResultHeaderProps {
  title: string;
}

const MatchingResultHeader = ({ title }: MatchingResultHeaderProps) => {
  const focusRef = useFocus<HTMLElement>();
  return (
    <header css={headerLayout} tabIndex={0} ref={focusRef}>
      <div css={[centerSide]}>
        <h1 css={matchingResultTitle}>{title}</h1>
        <h2 css={matchingResultCaption}>매칭도를 통해 당신과 가장 잘 맞는 사람을 알아보세요😊</h2>
      </div>
    </header>
  );
};

export default MatchingResultHeader;
