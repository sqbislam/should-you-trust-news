import List from '@mui/material/List';
import React, { useState } from 'react';
import { apiEndpoints } from 'src/core/api/apiEndpoints';
import { httpClient } from 'src/core/api/httpClient';
import { useInternalQuery } from 'src/core/hooks/useInternalQuery';
import CategorySelect, { Categories } from './CategorySelect';
import NewsItem from './NewsItem';

interface IDashboardProps {
}

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {
    const [category, setCategory] = useState(Categories.General);
    const endpointPath = httpClient.getEndpoint(apiEndpoints.topHeadlines.path, {queryParams:{country:"us", category}});
    
    const { isLoading, error, data } = useInternalQuery(["newsData", category], endpointPath);

    return (
      <div>
        <h2>Dashboard</h2>
        <CategorySelect category={category} setCategory={setCategory}/>
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
