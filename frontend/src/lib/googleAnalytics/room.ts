import ReactGA from 'react-ga4';

export const collectGameMemberNumberGA = (gameMemberNumber: number) => {
  ReactGA.event({
    category: 'User Engagement',
    action: 'game_member_number',
    label: '게임 참여 인원 수',
    value: gameMemberNumber,
  });
};
