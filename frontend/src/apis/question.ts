const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.API_BASE_URL : '';

const URL = {
  question: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/question`,
};

export const fetchQuestion = async (roomId = 1) => {
  const res = await fetch(URL.question(roomId));

  const data = await res.json();

  return data;
};
