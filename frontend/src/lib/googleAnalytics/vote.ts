import ReactGA from 'react-ga4';

export const clickLeftOption = () => {
  ReactGA.event({
    category: 'vote',
    action: 'click_left_option',
  });
};

export const clickRightOption = () => {
  ReactGA.event({
    category: 'vote',
    action: 'click_right_option',
  });
};
