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

// Timer가 스크린 리더에 읽혀야하는 시점에 aria-live="polite" 설정하도록 boolean 값 반환 (제한 시간 절반 & 5초 남았을 때)
export const isAlertTimer = (leftRoundTime: number, timeLimit: number) => {
  return leftRoundTime === Math.floor(timeLimit / 2) || leftRoundTime === ALMOST_FINISH_SECOND;
};
