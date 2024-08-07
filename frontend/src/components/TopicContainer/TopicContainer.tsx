import { useLocation, useParams } from 'react-router-dom';

import { categoryText, topicContainerLayout, topicText } from './TopicContainer.styled';

import { ROUTES } from '@/constants/routes';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const TopicContainer = () => {
  const { balanceContent } = useBalanceContentQuery();
  const location = useLocation();
  const roomId = useParams();

  const isGamePage = location.pathname === ROUTES.game(Number(roomId));

  return (
    <section css={topicContainerLayout}>
      <span css={categoryText}>{isGamePage && balanceContent?.category}</span>
      <span css={topicText}>{balanceContent?.question}</span>
    </section>
  );
};

export default TopicContainer;
