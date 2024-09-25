import { useParams } from 'react-router-dom';

import createRandomNextRoundMessage from './createRandomNextRoundMessage';

import InfoModal from '@/components/common/InfoModal/InfoModal';
import NextRoundButton from '@/components/common/NextRoundButton/NextRoundButton';
import useMoveNextRoundMutation from '@/components/common/NextRoundButton/NextRoundButton.hook';
import Content from '@/components/layout/Content/Content';
import RoundVoteContainer from '@/components/RoundVoteContainer/RoundVoteContainer';
import useModal from '@/hooks/useModal';

const RoundResultPage = () => {
  const { roomId } = useParams();
  const { isOpen, show, close } = useModal();
  const { mutate: moveNextRound } = useMoveNextRoundMutation(Number(roomId));
  const randomRoundNextMessage = createRandomNextRoundMessage();

  return (
    <Content>
      <RoundVoteContainer />
      <NextRoundButton showModal={show} />
      <InfoModal
        isOpen={isOpen}
        onClose={close}
        onConfirm={moveNextRound}
        text={randomRoundNextMessage}
      />
    </Content>
  );
};

export default RoundResultPage;
