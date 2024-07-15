import { gameTitle, headerLayout } from './Header.styled';

import HomeIcon from '@/assets/images/homeIcon.svg';
import SettingsIcon from '@/assets/images/settingsIcon.svg';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header css={headerLayout}>
      <button>
        <img src={HomeIcon} alt="홈으로 이동" />
      </button>
      <span css={gameTitle}>{title}</span>
      <button>
        <img src={SettingsIcon} alt="환경설정으로 이동" />
      </button>
    </header>
  );
};

export default Header;
