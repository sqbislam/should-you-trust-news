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
    label: "No Filter",
  },
  //   {
  //     value: 25,
  //     label: "Low",
  //   },
  {
    value: 50,
    label: "Moderate",
  },
  //   {
  //     value: 75,
  //     label: "High",
  //   },

  {
    value: 100,
    label: "Max",
  },
];
enum Type {
  Pro = "pro",
  Con = "con",
}

const PreLanding: React.FunctionComponent<IPreLandingProps> = (props) => {
  // Variable states
  const [category, setCategory] = useState<string>(Categories.Technology);
  const [type, setType] = useState<Type>(Type.Pro);
  const [activeStep, setActiveStep] = React.useState(0);

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

  const currData = data;
  const currPro = currData?.pro;
  const currCon = currData?.con;
  const allData = type === Type.Pro ? currPro : currCon;
  console.debug({ activeStep, currData, allData, type });
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

          <TabPanel value="2" sx={{ padding: 0, margin: 0 }}>
            <Typography variant="h6" style={{ padding: "1em" }}>
              Click on a news that catches your attention.
            </Typography>
            {currPro && (
              <div onClick={handleTypeSelection(Type.Pro)}>
                <NewsItem data={currPro[0]} isFullLinkVisible={true} />
              </div>
            )}
            {currCon && (
              <div onClick={handleTypeSelection(Type.Con)}>
                <NewsItem data={currCon[0]} isFullLinkVisible={true} />
              </div>
            )}
          </TabPanel>

          <TabPanel
            value="3"
            sx={{
              padding: 0,
              margin: 0,
            }}
          >
            {allData && allData.map((news: any) => <NewsItem data={news} />)}
            <Divider />
            <Paper
              sx={{
                marginTop: "2em",
                padding: "0px 3em",
                position: "sticky",
                bottom: 0,
                boxShadow: "0px 0px 3px 1px gray",
              }}
            >
              <Typography
                id="input-slider"
                gutterBottom
                variant="caption"
                color="textSecondary"
              >
                Recommender Strength
              </Typography>
              <Slider
                id="input-slider"
                aria-label="input-slider"
                defaultValue={100}
                getAriaValueText={valuetext}
                step={50}
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
