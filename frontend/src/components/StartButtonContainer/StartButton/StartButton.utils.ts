const getStartButtonText = (isMaster: boolean, isPending: boolean) => {
  if (isMaster && isPending) return '시작중...';
  if (isMaster) return '시작';
  return '방장이 진행해 주세요';
};

export default getStartButtonText;
