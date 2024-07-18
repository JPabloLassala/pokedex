import { useCallback, useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

export function useHttpRepository<T>(url: string, config: RequestInit, initialData: T[] = []) {
  const [data, setData] = useState<T[]>(initialData);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const configMemo = useMemo(() => config, []);

  function clearData() {
    setData(initialData);
  }

  const sendRequest = useCallback(
    async function sendRequest(data?: T[], requestConfig?: Partial<RequestInit>) {
      setIsLoading(true);

      try {
        const resData = await sendHttpRequest(url, {
          ...config,
          ...requestConfig,
          body: JSON.stringify(data),
        });
        setData(resData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message || "Something went wrong");
        }
      }

      setIsLoading(false);
    },
    [url, configMemo],
  );

  useEffect(() => {
    if (config && (config.method === "GET" || !config.method)) {
      sendRequest();
    }
  }, [sendRequest, configMemo]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}

async function sendHttpRequest(url: string, config: RequestInit) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Something went wrong, failed to send request.");
  }

  return resData;
}
