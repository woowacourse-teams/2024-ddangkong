export const formatTimer = (timer: number) => {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
};
