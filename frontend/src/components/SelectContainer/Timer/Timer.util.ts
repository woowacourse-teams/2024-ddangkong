import { POLLING_DELAY } from '@/constants/config';

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

export const calculateUnitRate = (total: number, divisor: number) => {
  return parseFloat((total / divisor).toFixed(1));
};
