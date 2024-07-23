export const createRandomNickname = () => {
  const adjectives = ['배고픈', '성실한', '욕망의', '섹시한', '멋있는', '타락한'];
  const nouns = ['마루', '썬데이', '프린', '이든', '포메', '타칸', '커찬'];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective} ${randomNoun}`;
};
