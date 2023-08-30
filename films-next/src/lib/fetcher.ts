export interface fetchOptions {
  cache?: "force-cache" | "no-store";
  next?: {
    revalidate?: false | 0 | number;
    tags?: string[];
  };
}

export async function fetcher(url: string, options: fetchOptions = {}) {
  let resp;
  if (!options) {
    resp = await fetch(url);
  } else {
    resp = await fetch(url, options);
  }

  const data = await resp.json();
  return data;
}
