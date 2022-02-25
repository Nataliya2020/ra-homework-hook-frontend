import useJsonFetch from "../hook/useJsonFetch";

function Loading() {
  const [data, loading, error] = useJsonFetch(`${process.env.REACT_APP_URL}/loading`);

  return (
    <>
      <div>
        <h3>Загрузка</h3>
      </div>
      {loading && <div>Loading....</div>}
    </>
  )
}

export default Loading;
