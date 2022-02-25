import useJsonFetch from "../hook/useJsonFetch";

function Error() {
  const [data, loading, error] = useJsonFetch(`${process.env.REACT_APP_URL}/error`);

  return (
    <>
      <div>
        <h3>Получение ошибки</h3>
      </div>
      {error && <div>{error}</div>}
    </>
  );
}

export default Error;
