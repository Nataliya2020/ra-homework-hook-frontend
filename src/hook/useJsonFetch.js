import {useState, useEffect} from "react";

function useJsonFetch(url, opts) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, opts)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        } else {
          const res = await response.json();
          setData(res);
          setLoading(false);
        }
      })
      .catch(e => {
        setLoading(false);
        setError(e.message);
      })
  }, [url, opts]);

  return [data, loading, error]
}

export default useJsonFetch;
