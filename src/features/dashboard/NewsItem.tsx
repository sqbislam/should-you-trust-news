import { Button, Card, CardActions, CardContent, CardMedia, Tooltip, Typography } from '@mui/material';
import * as React from 'react';
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
    
    // function addDefaultSrc(ev: any) {
    //   ev.target.onerror = null; // prevents looping
    //   ev.target.src = `url(${background})`;
    // }
    return (
      <Card sx={{ maxWidth: 350, marginLeft: "auto", marginRight: "auto" }}>
        <CardMedia
          component="img"
          height="140"
          // onError={addDefaultSrc}
          src={urlToImage ?? ""}
          // style={{ backgroundImage: `url(${background})` }}
          alt="article cover image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ textAlign: "initial" }}
          >
            {title}
          </Typography>
          <p
            dangerouslySetInnerHTML={{ __html: author }}
            style={{ textAlign: "initial" }}
          />
          <Typography
            variant="caption"
            color="text.secondary"
            style={{ textAlign: "initial" }}
          >
            {description}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            style={{ textAlign: "initial" }}
          >
            {content}
          </Typography>
        </CardContent>
        <CardActions style={{ marginTop: "auto" }}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button size="small">Full Article</Button>
          </a>
          <Tooltip
            disableFocusListener
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
