export type QueryParams = {
  [key: string]: string | number | string[] | number[] | undefined;
};

export function queryParams(params: QueryParams) {
  const reduceResult: string[] = [];

  return Object.keys(params)
    .reduce((r, k) => {
      const value = params[k];

      if (value !== undefined) {
        const encodeKey = encodeURIComponent(k);

        if (Array.isArray(value)) {
          r.push(
            (value as string[])
              .map((v) => `${encodeKey}=${encodeURIComponent(v)}`)
              .join('&')
          );
        }

        r.push(`${encodeKey}=${encodeURIComponent(value!.toString())}`);
      }

      return r;
    }, reduceResult)
    .join('&');
}