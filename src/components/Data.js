import useJsonFetch from '../hook/useJsonFetch';

function Data() {
  const [data, loading, error] = useJsonFetch(`${process.env.REACT_APP_URL}/data`);

  return (
    <>
      <div>
        <h3>Получение данных</h3>
      </div>
      <div>
        {data.status}
      </div>
    </>
  );
}

export default Data;
