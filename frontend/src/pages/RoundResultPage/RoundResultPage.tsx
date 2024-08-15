import { useParams } from 'react-router-dom';

import createRandomNextRoundMessage from './createRandomNextRoundMessage';

import InfoModal from '@/components/common/InfoModal/InfoModal';
import useModalHandler from '@/components/common/Modal/hooks/useModalHandler';
import NextRoundButton from '@/components/common/NextRoundButton/NextRoundButton';
import useMoveNextRoundMutation from '@/components/common/NextRoundButton/NextRoundButton.hook';
import Content from '@/components/layout/Content/Content';
import RoundVoteContainer from '@/components/RoundVoteContainer/RoundVoteContainer';
import TopicContainer from '@/components/TopicContainer/TopicContainer';

const RoundResultPage = () => {
  const { roomId } = useParams();
  const { isModalOpen, handleModalOpen, handleModalClose } = useModalHandler();
  const { mutate: moveNextRound } = useMoveNextRoundMutation(Number(roomId));
  const randomRoundNextMessage = createRandomNextRoundMessage();

  return (
    <Content>
      <TopicContainer />
      <RoundVoteContainer />
      <NextRoundButton handleModalOpen={handleModalOpen} />
      <InfoModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={moveNextRound}
        text={randomRoundNextMessage}
      />
    </Content>
  );
};

export default RoundResultPage;
