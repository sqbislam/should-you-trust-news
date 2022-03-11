import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import * as React from 'react';

interface INewsItemProps {
    data?:any
}

const NewsItem: React.FunctionComponent<INewsItemProps> = ({data}) => {
    const {author, title, source, description, content, url, urlToImage} = data
    
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          src={urlToImage}
          alt="article cover image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <p dangerouslySetInnerHTML={{ __html: author }} />
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions style={{marginTop:"auto"}}> 
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button size="small">Full Article</Button>
          </a>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
};

  

export default NewsItem;
