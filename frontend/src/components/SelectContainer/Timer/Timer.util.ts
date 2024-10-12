import { ALMOST_FINISH_SECOND, POLLING_DELAY } from '@/constants/config';

export const formatLeftRoundTime = (leftRoundTime: number) => {
  const minutes = Math.floor(leftRoundTime / 60);
  const seconds = leftRoundTime % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
};

export const convertMsecToSecond = (msec: number) => {
  const UNIT_MSEC = POLLING_DELAY;
  return msec / UNIT_MSEC;
};

export const isAlertTimer = (leftRoundTime: number, timeLimit: number) => {
  return leftRoundTime === Math.floor(timeLimit / 2) || leftRoundTime === ALMOST_FINISH_SECOND;
};
