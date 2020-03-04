import { useState, useEffect } from 'react';

const sleep = (m: any) => new Promise(r => setTimeout(r, m));

export const useFetch = (url: string) => {
  const [response, setResponse] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      try {
        await sleep(1000);
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(`We have an ${error}`);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
  }, [url]);

  return { response, loading, error };
};
