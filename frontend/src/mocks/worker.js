export default class TimerWorker {
  constructor(stringUrl) {
    this.url = stringUrl;
    this.onmessage = () => {};
  }

  postMessage(message) {
    this.onmessage(message);
  }

  terminate() {}
}

// Jest 환경에서 Web Worker를 Mock으로 대체
window.Worker = TimerWorker;
