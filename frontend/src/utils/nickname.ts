export const createRandomNickname = () => {
  const adjectives = [
    '춤추는',
    '노래하는',
    '웃긴',
    '귀여운',
    '사랑스러운',
    '재치있는',
    '기운찬',
    '활발한',
    '지적인',
    '영리한',
    '장난꾸러기',
    '유쾌한',
    '깔끔한',
    '매력적인',
    '화려한',
    '신나는',
    '용감한',
    '상냥한',
    '달콤한',
    '기발한',
    '짜릿한',
    '다정한',
    '평온한',
    '쾌활한',
    '따뜻한',
    '호기심 많은',
    '재빠른',
    '천재적인',
    '엉뚱한',
    '호탕한',
    '멋진',
    '섹시한',
    '발랄한',
    '당당한',
    '명랑한',
    '흥미로운',
  ];
  const nouns = ['마루', '썬데이', '프린', '이든', '포메', '타칸', '커찬'];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective} ${randomNoun}`;
};
