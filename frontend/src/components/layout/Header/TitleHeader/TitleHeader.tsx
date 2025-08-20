import { centerSide, gameTitle, headerLayout } from '../Header.styled';

interface TitleHeaderProps {
  title: string;
}

// 가운데 제목만 차지하는 헤더 : 닉네임 설정 화면
const TitleHeader = ({ title }: TitleHeaderProps) => (
  <header css={headerLayout}>
    <div css={centerSide}>
      <h1 css={gameTitle}>{title}</h1>
    </div>
  </header>
);

export default TitleHeader;
