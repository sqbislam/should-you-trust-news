import React from 'react';
import { useQuery } from 'react-query';

interface ILandingPageProps {
}

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    ),
  );

  const e = process.env.REACT_APP_NEWS_API_KEY
  if (isLoading) return <h5>{"Loading..."}</h5>;

  if (error) return<div>{"An error has occurred: " + (error as any)?.message}</div> 

  return (
    <div>
      
      <h1>{data.name}</h1>
      <h5>{e}</h5>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};

export default LandingPage;
