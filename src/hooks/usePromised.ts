import { useEffect, useState } from "react";

type Props<T> = {
  fn: () => Promise<T>;
  key: string;
};

const usePromised = <T>({ fn, key }: Props<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const getData = () => {
    setIsLoading(true);
    fn()
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((err: unknown) => {
        //narrowing
        if (err instanceof Error) {
          setError(err.message);
        } else if (typeof err === "string") {
          setError(err);
        } else {
          setError("sa march paaaa");
        }
      });
  };

  useEffect(() => {
    getData();
  }, [key]);

  return {
    data,
    isLoading,
    error,
  };
};

export default usePromised;
