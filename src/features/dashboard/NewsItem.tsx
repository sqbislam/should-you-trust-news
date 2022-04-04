import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import * as React from "react";
import sources from "src/assets/news_sources";
interface INewsItemProps {
  data?: any;
  isFullLinkVisible?: boolean;
  onClick?: any;
}

const NewsItem: React.FunctionComponent<INewsItemProps> = ({
  data,
  isFullLinkVisible,
  onClick,
}) => {
  const { author = "", title, source, url, urlToImage = "" } = data;

  // function addDefaultSrc(ev: any) {
  //   ev.target.onerror = null; // prevents looping
  //   ev.target.src = `url(${background})`;
  // }
  const newsSources: any = React.useMemo(() => sources, []);
  return (
    <Card
      sx={{
        width: "100%",
        marginLeft: "auto",
        display: "grid",
        margin: "1em 0px",
        padding: ["0px", "0px"],
        gridGap: "1em",
        gridTemplateColumns: ["1fr 3fr", "1fr 3fr"],
        gridTemplateRows: ["auto", "auto", "1fr"],
        marginRight: "auto",
        marginTop: "1em",
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
            variant="subtitle1"
            component="div"
            style={{ textAlign: "initial" }}
          >
            {title}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            style={{ textAlign: "initial" }}
          >
            {author}
          </Typography>
          {/* <Typography
            variant="caption"
            color="text.secondary"
            style={{ textAlign: "initial" }}
          >
            {truncateString(description, 100)}
          </Typography> */}
          {isFullLinkVisible && (
            <Tooltip
              disableInteractive
              disableFocusListener
              title={
                <div style={{ padding: "0.5em" }}>
                  <>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                    >{`Source: ${source?.name}, Founded: ${
                      newsSources && source
                        ? newsSources[source?.id as any]?.establisedIn
                        : ""
                    }`}</Typography>
                  </>
                </div>
              }
            >
              <Button size="small">Source</Button>
            </Tooltip>
          )}
          <Typography>
            {isFullLinkVisible && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "10pt" }}
              >
                Full Article
              </a>
            )}
          </Typography>
        </div>
      </CardContent>
      <span />

      {onClick && (
        <CardActions style={{ marginLeft: "auto" }}>
          <Button color="primary" variant="contained" onClick={onClick}>
            Select
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default NewsItem;
