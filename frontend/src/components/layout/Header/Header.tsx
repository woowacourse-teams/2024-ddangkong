import { useLocation } from 'react-router-dom';

import { gameTitle, headerLayout, roundText } from './Header.styled';

import SettingsIcon from '@/assets/images/settingsIcon.svg';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const { balanceContent } = useBalanceContentQuery();
  const location = useLocation();

  const isFinalPage = location.pathname === '/game/result';

  if (isFinalPage) {
    return <header css={headerLayout}></header>;
  }

  return (
    <header css={headerLayout}>
      <span css={roundText}>
        {balanceContent?.currentRound}/{balanceContent?.totalRound}
      </span>
      <span css={gameTitle}>{title}</span>
      <button>
        <img src={SettingsIcon} alt="환경설정으로 이동" />
      </button>
    </header>
  );
};

export default Header;
