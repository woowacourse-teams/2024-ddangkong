import { CustomError, NetworkError } from '@/utils/error';

interface RequestProps {
  url: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
  body?: Record<string, string | number>;
  headers?: Record<string, string>;
}

type FetchProps = Omit<RequestProps, 'method'>;

const fetcher = {
  async request({ url, method, body, headers }: RequestProps) {
    try {
      const response = await fetch(url, {
        method,
        body: body && JSON.stringify(body),
        headers: headers && headers,
        credentials: 'include',
      });

      if (!response.ok) {
        const apiError = await response.json();
        throw new CustomError({ ...apiError, status: response.status });
      }

      return response;
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw new NetworkError();
    }
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
