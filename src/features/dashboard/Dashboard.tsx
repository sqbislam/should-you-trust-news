import List from '@mui/material/List';
import React from 'react';
import { apiEndpoints } from 'src/core/api/apiEndpoints';
import { httpClient } from 'src/core/api/httpClient';
import { useInternalQuery } from 'src/core/hooks/useInternalQuery';
import NewsItem from './NewsItem';

interface IDashboardProps {
}

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {
    const endpointPath = httpClient.getEndpoint(apiEndpoints.topHeadlines.path, {queryParams:{country:"us", category:"business"}});
    
    const { isLoading, error, data } = useInternalQuery("newsData", endpointPath);

    return (
      <div>
        <h2>Dashboard</h2>
        <List
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridAutoRows: "auto",
            gridGap:"1em"
          }}
        >
          {data?.articles &&
            data?.articles.map((news: any) => (
              <NewsItem data={news} key={news.title} />
            ))}
        </List>
      </div>
    );
};

export default Dashboard;
