import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import {
  Divider,
  List,
  ListItemButton,
  Paper,
  Slider,
  Typography,
} from "@mui/material";
import { Categories } from "../dashboard/CategorySelect";
import newsArticles from "src/assets/news_articles";
import { TabContext, TabPanel } from "@mui/lab";
import DotsMobileStepper from "./Stepper";
import { mapObject } from "src/core/utils/helpers";
import NewsItem from "../dashboard/NewsItem";
interface IPreLandingProps {}

const marks = [
  {
    value: 0,
    label: "Least related",
  },
  //   {
  //     value: 25,
  //     label: "Low",
  //   },
  {
    value: 50,
    label: "Moderately related",
  },
  //   {
  //     value: 75,
  //     label: "High",
  //   },

  {
    value: 100,
    label: "Closely related",
  },
];
enum Type {
  Pro = "pro",
  Con = "con",
}

function shuffle(array: any) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
const filterData = (currPro: any, currCon: any, type: any, strength: any) => {
  let output = [];
  let proMax = currPro.length;
  let conMax = currCon.length;

  switch (strength) {
    case 0:
      if (type === Type.Pro) {
        output = currCon;
      }
      if (type === Type.Con) {
        output = currPro;
      }

      break;

    case 50:
      for (let i = 0; i < Math.min(proMax, conMax); i += 1) {
        const random_boolean = Math.random() < 0.5;
        if (type === Type.Pro) {
          if (i < 2) {
            output.push(currPro[i]);
          } else if (random_boolean) {
            output.push(currPro[i]);
          } else {
            output.push(currCon[i]);
          }
        }
        if (type === Type.Con) {
          if (i < 2) {
            output.push(currCon[i]);
          } else if (random_boolean) {
            output.push(currCon[i]);
          } else {
            output.push(currPro[i]);
          }
        }
      }
      break;
    case 100:
      if (type === Type.Pro) {
        output = currPro;
      } else {
        output = currCon;
      }
      break;
  }
  return shuffle(output);
};

const PreLanding: React.FunctionComponent<IPreLandingProps> = (props) => {
  // Variable states
  const [category, setCategory] = useState<string>(Categories.Technology);
  const [type, setType] = useState<Type>(Type.Pro);
  const [activeStep, setActiveStep] = React.useState(0);
  const [currStrength, setCurrStrength] = React.useState<number | number[]>(
    100
  );

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

  const increaseStep = useCallback(() => {
    setActiveStep((active) => active + 1);
  }, []);
  const handleCategorySelection = useCallback(
    (cat: any) => (e: any) => {
      setCategory(cat);
      increaseStep();
    },
    [increaseStep]
  );
  const handleTypeSelection = useCallback(
    (type: any) => (e: any) => {
      setType(type);
      increaseStep();
    },
    [increaseStep]
  );
  const data: any = React.useMemo(
    () => (newsArticles as any)?.[category],
    [category]
  );

  const valuetext = (value: number) => {
    return `${value}%`;
  };
  const onStrengthCommited = (
    event: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => {
    setCurrStrength(value);
  };

  const currData = data;
  const currPro = currData?.pro;
  const currCon = currData?.con;
  const allData = filterData(currPro, currCon, type, currStrength) as any;

  return (
    <Paper
      sx={{
        width: ["100vw", "400px", "500px"],
        margin: "1em auto",
      }}
    >
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={(activeStep + 1).toString()}>
          <TabPanel value="1" sx={{ padding: 0, margin: 0, height: "90vh" }}>
            <Typography variant="h6" style={{ padding: "1em" }}>
              Choose a topic of your preference
            </Typography>
            <List>
              {mapObject(Categories, (value, key) => (
                <ListItemButton
                  color="primary"
                  sx={{ margin: "1em", padding: "1em 2em" }}
                  key={key}
                  onClick={handleCategorySelection(value)}
                >
                  {key}
                </ListItemButton>
              ))}
            </List>
          </TabPanel>

          <TabPanel value="2" sx={{ padding: 0, margin: 0, height: "80vh" }}>
            <List style={{ padding: "5em 1em" }}>
              <Typography
                variant="subtitle2"
                style={{ padding: "0.5em 0px" }}
                color="Highlight"
              >
                Please read the instructions below. Thank you!
              </Typography>
              <br />
              <Typography variant="body1">
                In the next page, you have to select one article from a choice
                of two articles. Select the article that you are most likely to
                click if you saw it on your newsfeed. We will first show you
                news that are related to your choice.
              </Typography>

              <br />
              <Typography variant="caption" color="textSecondary">
                You will be able to change the strength of the recommendation
                with a “slider”. Please take note of how changing the slider
                affects what news articles you are shown and how it affects your
                perspective of current events.
              </Typography>
            </List>
          </TabPanel>

          <TabPanel value="3" sx={{ padding: 0, margin: 0 }}>
            <Typography variant="h6" style={{ padding: "1em" }}>
              Click on a news that catches your attention.
            </Typography>
            {currPro && (
              <NewsItem
                data={currPro[0]}
                isFullLinkVisible={false}
                onClick={handleTypeSelection(Type.Pro)}
              />
            )}
            {currCon && (
              <NewsItem
                data={currCon[0]}
                isFullLinkVisible={false}
                onClick={handleTypeSelection(Type.Con)}
              />
            )}
          </TabPanel>

          <TabPanel
            value="4"
            sx={{
              padding: 0,
              margin: 0,
            }}
          >
            <Typography variant="body1" style={{ padding: "1em" }}>
              Press the{" "}
              <Typography component="span" color="Highlight">
                {"SOURCE"}
              </Typography>{" "}
              button for source details.
            </Typography>
            {allData &&
              allData.map(
                (news: any) =>
                  news && <NewsItem data={news} isFullLinkVisible={true} />
              )}
            <Divider />
            <Paper
              sx={{
                marginTop: "2em",
                padding: "10px 2em",
                paddingBottom: "1em",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "sticky",
                bottom: 0,
                backgroundImage: "black",
                backgroundColor: "black",
              }}
            >
              <Typography variant="caption" color="text.secondary">
                News related to your selection
              </Typography>
              <Slider
                id="input-slider"
                aria-label="input-slider"
                defaultValue={100}
                getAriaValueText={valuetext}
                sx={{
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  "& .MuiSlider-markLabel": {
                    width: "50px",
                    whiteSpace: "normal",
                    fontSize: "9pt",
                  },
                }}
                step={50}
                size="small"
                onChangeCommitted={onStrengthCommited}
                marks={marks}
                min={0}
                max={100}
              />
            </Paper>
          </TabPanel>
        </TabContext>
      </Box>
      <DotsMobileStepper
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </Paper>
  );
};

export default PreLanding;
