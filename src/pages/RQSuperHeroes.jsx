import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroes = () => {
  const { isLoading, data, isError, error, isFetching } = useSuperHeroesData({
    // Some React Query default option values
    cacheTime: 50000,
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    // If value or true is set, polling stops if window focus is lost
    refetchInterval: false,
    // Enables polling even if browser window is not focused
    refetchIntervalInBackground: false,
  });

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroes</h2>
      {data?.data.map((i) => {
        return <div key={i.id}>{i.name}</div>;
      })}
    </>
  );
};
