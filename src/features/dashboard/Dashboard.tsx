import React from 'react';
import { useQuery } from 'react-query';
import { apiEndpoints } from 'src/core/api/apiEndpoints';
import { httpClient } from 'src/core/api/httpClient';
import { useInternalQuery } from 'src/core/hooks/useInternalQuery';
import NewsItem from './NewsItem';

interface IDashboardProps {
}

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {
    const endpointPath = httpClient.getEndpoint(apiEndpoints.topHeadlines.path, {queryParams:{country:"us"}});
    
    const { isLoading, error, data } = useInternalQuery("newsData", endpointPath);

    return (
      <>
        <h2>Dashboard</h2>
        {data?.articles &&
          data?.articles.map((news: any) => <NewsItem data={news} key={news.title} />)}
      </>
    );
};

export default Dashboard;
