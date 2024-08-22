import { captureException } from '@sentry/react';

interface RequestProps {
  url: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
  body?: Record<string, string | number>;
  headers?: Record<string, string>;
}

type FetchProps = Omit<RequestProps, 'method'>;

const fetcher = {
  async request({ url, method, body, headers }: RequestProps) {
    const response = await fetch(url, {
      method,
      body: body && JSON.stringify(body),
      headers: headers && headers,
    });

    if (!response.ok) {
      captureException('fetch API ERROR');
      throw new Error('fetch fail error');
    }

    return response;
  },

  get({ url, headers }: FetchProps) {
    return this.request({ url, method: 'GET', headers });
  },
  post({ url, body, headers }: FetchProps) {
    return this.request({ url, method: 'POST', body, headers });
  },
  delete({ url, headers }: FetchProps) {
    return this.request({ url, method: 'DELETE', headers });
  },
  patch({ url, body, headers }: FetchProps) {
    return this.request({ url, method: 'PATCH', body, headers });
  },
  put({ url, headers }: FetchProps) {
    return this.request({ url, method: 'PUT', headers });
  },
};

export default fetcher;
