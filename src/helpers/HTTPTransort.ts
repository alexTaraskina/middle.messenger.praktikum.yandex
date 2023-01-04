const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

function queryStringify(data: unknown) {
  if (!data) {
    return '';
  }

  let result = Object.keys(data).length > 0 ? '?' : '';
  for (const [key, value] of Object.entries(data)) {
    result += key + '=' + value + '&';
  }

  return result.slice(0, -1);
}

type Options = {
  method: string,
  data?: {},
  headers?: Map<string, string>,
  timeout: number,
}

export default class HTTPTransport {
  get = (url: string, options: Options) => {
    return this.request(url + queryStringify(options.data), { ...options, method: METHODS.GET }, options.timeout);
  };

  put = (url: string, options: { data?: {}, timeout: number } = { timeout: 5000 }) => {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  };

  post = (url: string, options: Options) => {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  };

  delete = (url: string, options: Options) => {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  };

  request = (url: string, options: Options, timeout = 5000) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(options.method, url, true);
      xhr.timeout = timeout;

      if (options.headers) {
        for (const [key, value] of options.headers.entries()) {
          xhr.setRequestHeader(key, value);
        }
      }

      xhr.onload = function () {
        console.log(xhr);
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (options.method === METHODS.GET || !options.data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(options.data));
      }
    });
  };
}
