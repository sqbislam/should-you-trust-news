import { Button, Card, CardActions, CardContent, CardMedia, Tooltip, Typography } from '@mui/material';
import * as React from 'react';
import background from "../../assets/news-placeholder.jpg";
interface INewsItemProps {
    data?:any
}


const NewsItem: React.FunctionComponent<INewsItemProps> = ({data}) => {
    const {
      author,
      title,
      source,
      description,
      content,
      url,
      urlToImage,
    } = data;
    
    function addDefaultSrc(ev: any) {
      ev.target.onerror = null; // prevents looping
      ev.target.src = `url(${background})`;
    }
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          // onError={addDefaultSrc}
          src={urlToImage ?? ""}
          // style={{ backgroundImage: `url(${background})` }}
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
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        <CardActions style={{ marginTop: "auto" }}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button size="small">Full Article</Button>
          </a>
          <Tooltip
            title={
              <div>
                <Typography>{source?.name}</Typography>
                <Typography>{"Established In: 1800"}</Typography>
                <Typography>{"Subscribers (monthly): 1,000,232"}</Typography>
              </div>
            }
          >
            <Button size="small">Learn More</Button>
          </Tooltip>
        </CardActions>
      </Card>
    );
};

  

export default NewsItem;
