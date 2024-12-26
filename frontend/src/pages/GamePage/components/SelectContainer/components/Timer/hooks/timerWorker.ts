let intervalId: NodeJS.Timeout;

self.onmessage = (e) => {
  const { type, delay } = e.data;

  if (type === 'start') {
    const startTime = Date.now();

    intervalId = setInterval(() => {
      const elapsedTime = Date.now() - startTime;

      self.postMessage({ elapsedTime });
    }, delay);
  } else if (type === 'stop') {
    clearInterval(intervalId);
  }
};
