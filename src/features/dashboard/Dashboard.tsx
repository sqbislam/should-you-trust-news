import { Skeleton, styled, Typography } from "@mui/material";
import List from "@mui/material/List";
import React, { useState } from "react";
import { Categories } from "./CategorySelect";
import NewsItem from "./NewsItem";
import newsArticles from "../../assets/news_articles";
import ColorToggleButton from "./ToggleButton";

interface IDashboardProps {}

const StatWrapper = styled("div")(
  () => `
  display:flex;
  position:relative;
  flex-direction: row;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-between;
`
);

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {
  // Variable states
  const [category, setCategory] = useState<string>(Categories.Technology);
  const error = false;
  const isLoading = false;
  // http endpoint builder
  // const endpointPath = httpClient.getEndpoint(
  //   apiEndpoints.topHeadlines.path,
  //   {
  //     queryParams: {
  //       country: "us",
  //       category: `${category}`,
  //     },
  //   }
  // );

  // React query fetch
  // const { isLoading, error, data } = useInternalQuery(
  //   "newsData",
  //   endpointPath
  // );

  //  const { isLoading, data, error } = useQuery(
  //    category,
  //    () => fetch(endpointPath).then((res) => res.json())
  //  );

  const data: any = React.useMemo(
    () => (newsArticles as any)?.[category],
    [category]
  );
  let sources: any = [];

  return (
    <div style={{ height: "100vh", width: "90vw" }}>
      <Typography
        variant="h3"
        color="textPrimary"
        sx={{
          padding: ["0.4em", "1em"],
          fontSize: ["24pt", "30pt", "36pt"],
        }}
      >
        Your daily News!
      </Typography>
      <StatWrapper>
        {/* <SearchInput
            searchValue={searchValue}
            onSearchValue={onSearchValue}
          /> */}
        <ColorToggleButton category={category} setCategory={setCategory} />
      </StatWrapper>

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "1em",
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

        {/* {data.map((news: any) => (
          <NewsItem data={news} key={news.title} />
        ))}

        {data && data.length === 0 && (
          <Typography style={{ gridRow: "span 1 / -1" }}>
            No results found! Try a different search.
          </Typography>
        )} */}
      </List>
    </div>
  );
};

export default Dashboard;
