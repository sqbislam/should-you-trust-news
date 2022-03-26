import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as React from "react";
import { truncateString } from "src/core/utils/helpers";
interface INewsItemProps {
  data?: any;
  isFullLinkVisible?: boolean;
}

const NewsItem: React.FunctionComponent<INewsItemProps> = ({
  data,
  isFullLinkVisible,
}) => {
  const {
    author = "",
    title,
    source,
    description,
    content,
    url,
    urlToImage = "",
  } = data;

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
        padding: ["0px", "0px"],
        gridGap: "1em",
        gridTemplateColumns: ["1fr 2fr", "1fr 2fr"],
        gridTemplateRows: ["auto", "auto", "1fr"],
        marginRight: "auto",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        width="140"
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
          <Typography
            variant="subtitle1"
            color="text.secondary"
            style={{ textAlign: "initial" }}
          >
            {author}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            style={{ textAlign: "initial" }}
          >
            {truncateString(description, 100)}

            {isFullLinkVisible && (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Button size="small">Full Article</Button>
              </a>
            )}
          </Typography>
        </div>
      </CardContent>
      {/* <CardActions style={{ marginTop: "auto" }}>
                <fieldset>
                    <Typography>{source?.name}</Typography>
                    <Typography>{"Established In: 1800"}</Typography>
                    <Typography>
                        {"Subscribers (monthly): 1,000,232"}
                    </Typography>
                </fieldset>
            </CardActions> */}
    </Card>
  );
};

export default NewsItem;
