import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { useState } from "react";

// Add more heroes to db.json or break fetch url to stop polling as a side effect
export const SideEffectDemo = () => {
  const [pollIntervalValue, setPollIntervalValue] = useState(3000);

  const onSuccess = (data) => {
    if (data.length >= 4) {
      setPollIntervalValue(false);
    }
  };

  const onError = (error) => {
    if (error) {
      setPollIntervalValue(false);
    }
  };

  const { isLoading, data, isError, error, isFetching } = useSuperHeroesData({
    onSuccess,
    onError,
    refetchInterval: pollIntervalValue,
    refetchIntervalInBackground: true,
    // Example of data transformation, now "data" refers to the superHeroNames array
    select: (data) => {
      const superHeroNames = data.data.map((hero) => hero.name);
      return superHeroNames;
    },
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
      <h2>Side Effect Demo</h2>
      {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })}
    </>
  );
};
