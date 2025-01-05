interface RequestProps {
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
  body?: Record<string, string | number>;
  headers?: Record<string, string>;
  auth?: boolean;
}

type FetchProps = Omit<RequestProps, 'method'>;

const fetcher = {
  async request(url: string, { method, body, headers, auth = true }: RequestProps) {
    try {
      const response = await fetch(url, {
        method,
        body: body && JSON.stringify(body),
        headers: headers && { ...headers, 'Content-Type': 'application/json' },
        credentials: auth ? 'include' : 'same-origin',
      });

      if (!response.ok) {
        throw new Error('API ERROR 발생');
      }

      return response;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },

  get(url: string, options: FetchProps = {}) {
    return this.request(url, { method: 'GET', headers: options.headers });
  },
  post(url: string, options: FetchProps = {}) {
    return this.request(url, {
      method: 'POST',
      body: options.body,
      headers: options.headers,
    });
  },
  delete(url: string, options: FetchProps = {}) {
    return this.request(url, { method: 'DELETE', headers: options.headers });
  },
  patch(url: string, options: FetchProps = {}) {
    return this.request(url, {
      method: 'PATCH',
      body: options.body,
      headers: options.headers,
    });
  },
  put(url: string, options: FetchProps = {}) {
    return this.request(url, { method: 'PUT', headers: options.headers });
  },
};

export default fetcher;
