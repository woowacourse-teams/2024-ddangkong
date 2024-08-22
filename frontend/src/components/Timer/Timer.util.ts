import { ONE_MINUTE } from '@/constants/time';

export const formatLeftRoundTime = (leftRoundTime: number) => {
  const minutes = Math.floor(leftRoundTime / 60);
  const seconds = leftRoundTime % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
};

export const convertMsecToSecond = (msec: number) => {
  const UNIT_MSEC = ONE_MINUTE;
  return msec / UNIT_MSEC;
};
