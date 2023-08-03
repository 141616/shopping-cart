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
