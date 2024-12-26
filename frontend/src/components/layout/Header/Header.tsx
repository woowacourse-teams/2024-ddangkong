import {
  TitleHeader,
  RoomSettingHeader,
  RoundResultHeader,
  MatchingResultHeader,
} from './components';
import { useBlockRefresh, useRoutePath } from './hooks';

const Header = () => {
  const { isNicknamePage, isReadyPage, isRoundResultPage, isMatchingResultPage } = useRoutePath();

  useBlockRefresh();

  if (isNicknamePage) return <TitleHeader title="닉네임 설정" />;
  if (isReadyPage) return <RoomSettingHeader title="밸런스 게임" />;
  if (isRoundResultPage) return <RoundResultHeader />;
  if (isMatchingResultPage) return <MatchingResultHeader title="매칭 결과" />;
};

export default Header;
