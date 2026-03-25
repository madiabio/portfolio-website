export async function customFetch<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not set");
  }

  const response = await fetch(`${baseUrl}${url}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
  });

  const body = [204, 205, 304].includes(response.status)
    ? null
    : await response.text();

  const data = body ? JSON.parse(body) : {};
  console.log("customFetch baseUrl:", baseUrl);
  console.log("customFetch fullUrl:", `${baseUrl}${url}`);

  return {
    data,
    status: response.status,
    headers: response.headers,
  } as T;
}
