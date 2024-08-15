import { useParams } from 'react-router-dom';

import InfoModal from '@/components/common/InfoModal/InfoModal';
import useModalHandler from '@/components/common/Modal/hooks/useModalHandler';
import NextRoundButton from '@/components/common/NextRoundButton/NextRoundButton';
import useMoveNextRoundMutation from '@/components/common/NextRoundButton/NextRoundButton.hook';
import Content from '@/components/layout/Content/Content';
import RoundVoteContainer from '@/components/RoundVoteContainer/RoundVoteContainer';
import TopicContainer from '@/components/TopicContainer/TopicContainer';
import randomPicker from '@/utils/randomPicker';

const RoundResultPage = () => {
  const { roomId } = useParams();
  const { isModalOpen, handleModalOpen, handleModalClose } = useModalHandler();
  const { mutate: moveNextRound } = useMoveNextRoundMutation(Number(roomId));
  const nextRoundMessage = [
    '대화를 충분히 나누셨나요?\n 확인을 누르면 다음 라운드로 진행됩니다 :)',
    '충분히 이야기 나누셨나요?\n 다음 라운드로 넘어가려면 확인을 눌러주세요 :)',
    '라운드를 마무리하시겠어요?\n 확인을 누르면 다음 라운드로 이동합니다 :)',
    '더 나누실 이야기는 없나요?\n 확인을 누르면 새로운 라운드가 시작됩니다 :)',
    '대화를 다 마치셨나요?\n 확인을 누르면 다음 단계로 진행됩니다 :)',
    '다음으로 넘어가시겠습니까?\n 확인을 눌러 새 라운드를 시작하세요 :)',
    '대화를 끝마쳤다면,\n 확인을 눌러 다음 라운드로 이동하세요 :)',
  ];
  const randomNextRoundMessage = randomPicker(nextRoundMessage);

  return (
    <Content>
      <TopicContainer />
      <RoundVoteContainer />
      <NextRoundButton handleModalOpen={handleModalOpen} />
      <InfoModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={moveNextRound}
        text={randomNextRoundMessage}
      />
    </Content>
  );
};

export default RoundResultPage;
