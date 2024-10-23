import randomPicker from '@/utils/randomPicker';

export const getNextRoundButtonText = (isMaster: boolean, isLastRound: boolean) => {
  if (isMaster && isLastRound) return '결과 확인';
  if (isMaster && !isLastRound) return '다음';
  return '방장이 진행해 주세요';
};

export const createRandomNextRoundMessage = () => {
  const nextRoundMessage = [
    '대화를 충분히 나누셨나요?\n확인을 누르면 다음 라운드로 진행됩니다 :)',
    '충분히 이야기 나누셨나요?\n다음 라운드로 넘어가려면 확인을 눌러주세요 :)',
    '라운드를 마무리하시겠어요?\n확인을 누르면 다음 라운드로 이동합니다 :)',
    '더 나누실 이야기는 없나요?\n확인을 누르면 새로운 라운드가 시작됩니다 :)',
    '대화를 다 마치셨나요?\n확인을 누르면 다음 단계로 진행됩니다 :)',
    '다음으로 넘어가시겠습니까?\n확인을 눌러 새 라운드를 시작하세요 :)',
    '대화를 끝마쳤다면,\n확인을 눌러 다음 라운드로 이동하세요 :)',
  ];

  const randomNextRoundMessage = randomPicker(nextRoundMessage);

  return randomNextRoundMessage;
};
