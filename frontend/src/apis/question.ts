const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.API_BASE_URL : '';

const URL = {
  question: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/question`,
  vote: (roomId: number, questionId: number) =>
    `${BASE_URL}/api/balances/rooms/${roomId}/questions/${questionId}/votes`,
};

export const fetchQuestion = async (roomId = 1) => {
  const res = await fetch(URL.question(roomId));

  const data = await res.json();

  return data;
};

export const voteQuestion = async (choiceId: number, roomId = 1, questionId = 1) => {
  const res = await fetch(URL.vote(roomId, questionId), {
    method: 'POST',
    body: JSON.stringify({
      memberId: 1,
      choiceId,
    }),
  });

  const data = await res.json();

  return data;
};
