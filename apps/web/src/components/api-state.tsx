type ApiStateProps<T> = {
  data: T | undefined;
  isLoading: boolean;
  error: unknown;
  isEmpty?: (data: T) => boolean;
  children: (data: T) => React.ReactNode;
};

export function ApiState<T>({
  data,
  isLoading,
  error,
  isEmpty,
  children,
}: ApiStateProps<T>) {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong.</div>;
  if (!data || (isEmpty && isEmpty(data))) {
    return <div>No data available.</div>;
  }

  return <>{children(data)}</>;
}
