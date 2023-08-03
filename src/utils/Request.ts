export const generateURLWithParams = (url: string, params: any) => {
  let _url = url;
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const element = (params as any)[key];
      if (element) {
        _url += _url.includes("?") ? `&${key}=${element}` : `?${key}=${element}`;
      }
    }
  }
  return _url;
};

export async function fetchWithTimeout(url: string, timeout = 10 * 1000): Promise<any> {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    fetch(url, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => resolve(data))
      .catch((error) => {
        if (error?.json) {
          error?.json().then((err: any) => {
            reject(err?.message || "Something went wrong");
          });
        } else {
          reject(error?.message || "Something went wrong");
        }
      })
      .finally(() => {
        clearTimeout(id);
      });
  });
}
