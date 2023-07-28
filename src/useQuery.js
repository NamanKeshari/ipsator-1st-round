import { useCallback, useEffect, useState } from "react";

export const useQuery = ({ url }) => {
  const [data, setData] = useState([]);

  const logic = useCallback((data) => data?.filter((d) => d.id % 2 === 0), []);

  const callApi = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(logic(data));
    } catch (err) {
      setData(err.message);
    }
  };

  useEffect(() => {
    callApi(url);
  }, [url]);

  return { data };
};
