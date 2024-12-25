import ReactGA from 'react-ga4';

export const clickLeftOptionGA = () => {
  ReactGA.event({
    category: 'User Engagement',
    action: 'vote',
    label: '왼쪽 버튼 클릭',
  });
};

export const clickRightOptionGA = () => {
  ReactGA.event({
    category: 'User Engagement',
    action: 'vote',
    label: '오른쪽 버튼 클릭',
  });
};

export const clickVoteConfirmButtonGA = () => {
  ReactGA.event({
    category: 'User Engagement',
    action: 'vote',
    label: '투표 확인 버튼 클릭',
  });
};
