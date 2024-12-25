import ReactGA from 'react-ga4';

export const collectGameMemberNumber = (gameMemberNumber: number) => {
  ReactGA.event({
    category: 'game',
    action: 'collect_game_member_number',
    value: gameMemberNumber,
  });
};
