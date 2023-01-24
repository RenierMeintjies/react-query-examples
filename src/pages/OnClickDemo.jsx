import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export function OnClickDemo() {
  const { isLoading, isFetching, data, isError, error, refetch } =
    useSuperHeroesData({ enabled: false });

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>On Click Demo</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {isLoading || isFetching ? (
        <h2>Loading...</h2>
      ) : (
        data?.data.map((i) => {
          return <div key={i.id}>{i.name}</div>;
        })
      )}
    </>
  );
}
