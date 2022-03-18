
import { Skeleton, styled, Typography } from '@mui/material';
import List from '@mui/material/List';
import React, { useState } from 'react';
import { apiEndpoints } from 'src/core/api/apiEndpoints';
import { httpClient } from 'src/core/api/httpClient';
import CategorySelect, { Categories } from './CategorySelect';
import NewsItem from './NewsItem';
import newsArticles  from "../../assets/news_articles";

interface IDashboardProps {
}

const StatWrapper = styled("div")(
  () => `
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-between;
`
);


const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {
    // Variable states
    const [category, setCategory] = useState<string>(Categories.General);
    const error = false;
    const isLoading =false;
    // http endpoint builder
    const endpointPath = httpClient.getEndpoint(
      apiEndpoints.topHeadlines.path,
      {
        queryParams: {
          country: "us",
          category: `${category}`,
        },
      }
    );

    // React query fetch
    // const { isLoading, error, data } = useInternalQuery(
    //   "newsData",
    //   endpointPath
    // );

    //  const { isLoading, data, error } = useQuery(
    //    category,
    //    () => fetch(endpointPath).then((res) => res.json())
    //  );

     const data:any = React.useMemo(() => ((newsArticles as any)?.[category]), [category]);
    


    return (
      <div style={{ height: "100vh", width: "90vw" }}>
        <h2>Your daily News!</h2>
        <StatWrapper>
          {/* <SearchInput
            searchValue={searchValue}
            onSearchValue={onSearchValue}
          /> */}
          <CategorySelect category={category} setCategory={setCategory} />
        </StatWrapper>

        <List
          sx={{
            display: "grid",
            gridGap: "1em",
            gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr 1fr"],
          }}
        >
          {error && (
            <Typography style={{ gridRow: "span 1 / -1" }}>
              Something Went Wrong! Please try again later.
            </Typography>
          )}
          {isLoading &&
            Array(6)
              .fill(1)
              .map((i: any, idx) => (
                <Skeleton
                  key={idx}
                  variant="rectangular"
                  height={300}
                  width={345}
                />
              ))}

          {data.map((news: any) => (
            <NewsItem data={news} key={news.title} />
          ))}

          {data && data.length === 0 && (
            <Typography style={{ gridRow: "span 1 / -1" }}>
              No results found! Try a different search.
            </Typography>
          )}
        </List>
      </div>
    );
};

export default Dashboard;
