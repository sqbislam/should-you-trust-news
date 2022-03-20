import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as React from "react";
interface INewsItemProps {
  data?: any;
}

const NewsItem: React.FunctionComponent<INewsItemProps> = ({ data }) => {
  const { author, title, source, description, content, url, urlToImage } = data;

  // function addDefaultSrc(ev: any) {
  //   ev.target.onerror = null; // prevents looping
  //   ev.target.src = `url(${background})`;
  // }
  return (
    <Card
      sx={{
        width: "100%",
        marginLeft: "auto",
        display: "grid",
        margin: "1em 0px",
        padding: ["0px", "0px", "1em"],
        gridGap: "1em",
        gridTemplateColumns: ["1fr", "1fr", "1fr 4fr 200px"],
        gridTemplateRows: ["auto", "auto", "1fr"],
        marginRight: "auto",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        // onError={addDefaultSrc}
        src={urlToImage ?? ""}
        alt="article cover image"
      />
      <CardContent style={{ display: "flex", padding: "0px 1em" }}>
        <div>
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
            {content}
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Button size="small">Full Article</Button>
            </a>
          </Typography>
        </div>
      </CardContent>
      <CardActions style={{ marginTop: "auto" }}>
        <fieldset>
          <Typography>{source?.name}</Typography>
          <Typography>{"Established In: 1800"}</Typography>
          <Typography>{"Subscribers (monthly): 1,000,232"}</Typography>
        </fieldset>
      </CardActions>
    </Card>
  );
};

export default NewsItem;
