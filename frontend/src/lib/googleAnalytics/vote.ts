import ReactGA from 'react-ga4';

export const clickLeftOption = () => {
  ReactGA.event({
    category: 'User Engagement',
    action: 'vote',
    label: '왼쪽 버튼 클릭',
  });
};

export const clickRightOption = () => {
  ReactGA.event({
    category: 'User Engagement',
    action: 'vote',
    label: '오른쪽 버튼 클릭',
  });
};
