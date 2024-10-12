import { useLocation, useParams } from 'react-router-dom';

import { categoryText, topicContainerLayout, topicText } from './TopicContainer.styled';
import A11yOnly from '../common/a11yOnly/A11yOnly';

import { ROUTES } from '@/constants/routes';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const TopicContainer = () => {
  const location = useLocation();
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery(Number(roomId));

  const isGamePage = location.pathname === ROUTES.game(Number(roomId));

  const screenReaderQuestion = `질문. ${balanceContent.question}.`;

  return (
    <section css={topicContainerLayout}>
      <A11yOnly>{isGamePage && screenReaderQuestion}</A11yOnly>
      <span css={categoryText} aria-hidden>
        {isGamePage && balanceContent.category}
      </span>
      <span css={topicText} aria-hidden>
        {balanceContent.question}
      </span>
    </section>
  );
};

export default TopicContainer;
