// import config from '@src/config';
import { queryParams } from 'src/utils/queryParams';
import type { QueryParams } from 'src/utils/queryParams';

const apiBaseURL = process.env.API_ORIGIN;


export interface Options {
  query?: QueryParams;
  signal?: AbortSignal;
  retryCount?: number;
  retryTimeout?: number;
  credentials?: RequestInit['credentials'];
  headers?: object;
};

interface RequestOptions {
  retryCount?: number;
  retryTimeout?: number;
};

export type Method = 'GET' | 'POST' | 'DELETE' | 'PUT';

export const fetcher = (async (
  url: string,
  fetchOptions: RequestInit,
  { retryCount = 0, retryTimeout = 0 }: RequestOptions
): Promise<{ data: unknown } | { data: unknown, error: Error }> => {
  try {
    const response = await window.fetch(url, fetchOptions);

    if (response.ok) {
      if (response.status !== 204) {
        const data: unknown = await response.json();
        return { data };
      } else {
        return { data: {} };
      }
    } else {
      const data: unknown = await response.json();
      switch (response.status) {
        default:
          return { data, error: new Error('Unknown error') }
        case 400:
          return { data, error: new Error('Bad request') }
        case 403:
          return { data, error: new Error('Forbidden') }
        case 500:
          return { data, error: new Error('Internal server error') }
      }
    }
  } catch {
    return { data: {}, error: new Error('Network error') };
  }
});

const makeQuery = (query?: QueryParams) => {
  const result = {
    ...query
  };

  return queryParams(result);
};

async function request(
  method: Method,
  path: string,
  body?: object,
  options: Options = {}
): Promise<{ data: unknown } | { data: unknown, error: Error }> {
  const baseHeaders = {
    ...(body && { 'Content-Type': 'application/json' }),
    ...options.headers
  };

  const fullPath = `${path}${options.query ? `?${makeQuery(options.query)}` : ''
    }`;

  return await fetcher(
    `${apiBaseURL}/` + fullPath,
    {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: baseHeaders,
      signal: options?.signal,
      credentials: options.credentials ?? 'include',
      cache: 'reload'
    },
    {
      retryCount: options?.retryCount === undefined ? 1 : options.retryCount,
      retryTimeout:
        options?.retryTimeout === undefined ? 2000 : options.retryTimeout
    }
  );
}

export function get(path: string, options?: Options) {
  return request('GET', path, undefined, options);
}

export function post(path: string, body: object, options?: Options) {
  return request('POST', path, body, options);
}

export function put(path: string, body: object, options?: Options) {
  return request('PUT', path, body, options);
}

export function del(path: string, options?: Options) {
  return request('DELETE', path, undefined, options);
}