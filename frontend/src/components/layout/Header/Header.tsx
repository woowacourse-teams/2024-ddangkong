import { useBlockRefresh, useRoutePath } from './hooks';

import { TitleHeader, RoomSettingHeader, RoundResultHeader, MatchingResultHeader } from '.';

const Header = () => {
  const { isNicknamePage, isReadyPage, isRoundResultPage, isMatchingResultPage } = useRoutePath();

  useBlockRefresh();

  if (isNicknamePage) return <TitleHeader title="프로필 설정" />;
  if (isReadyPage) return <RoomSettingHeader title="밸런스 게임" />;
  if (isRoundResultPage) return <RoundResultHeader />;
  if (isMatchingResultPage) return <MatchingResultHeader title="매칭 결과" />;
};

export default Header;
