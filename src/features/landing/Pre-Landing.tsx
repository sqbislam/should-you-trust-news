import React, { useState } from "react";
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
import NewsItem from "../dashboard/NewsItem";
import DotsMobileStepper from "./Stepper";
interface IPreLandingProps {}

const marks = [
    {
        value: 0,
        label: "No Filter",
    },
    {
        value: 25,
        label: "Low",
    },
    {
        value: 50,
        label: "Moderate",
    },
    {
        value: 75,
        label: "High",
    },

    {
        value: 100,
        label: "Max",
    },
];

const PreLanding: React.FunctionComponent<IPreLandingProps> = (props) => {
    // Variable states
    const [category, setCategory] = useState<string>(Categories.Health);
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

    const data: any = React.useMemo(
        () => (newsArticles as any)?.[category],
        [category]
    );
    let sources: any = [];

    if (newsArticles) {
        Object.values(newsArticles).forEach((arr) => {
            arr.forEach((d: any) => {
                let s = d?.source?.name as any;
                if (s) {
                    sources.push(s.toLowerCase());
                }
            });
        });
    }

    const valuetext = (value: number) => {
        return `${value}%`;
    };
    console.debug(activeStep);
    return (
        <Paper
            sx={{
                width: ["100vw", "400px", "500px"],
                margin: "1em auto",
            }}
        >
            <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={(activeStep + 1).toString()}>
                    <TabPanel
                        value="1"
                        sx={{ padding: 0, margin: 0, height: "90vh" }}
                    >
                        <Typography variant="h6" style={{ padding: "1em" }}>
                            Choose a topic you would like most
                        </Typography>
                        <List>
                            <ListItemButton color="secondary">
                                Health
                            </ListItemButton>
                            <ListItemButton>Politics</ListItemButton>
                            <ListItemButton>Sports</ListItemButton>
                        </List>
                    </TabPanel>

                    <TabPanel value="2" sx={{ padding: 0, margin: 0 }}>
                        <Typography variant="h6" style={{ padding: "1em" }}>
                            Select a news you would prefer
                        </Typography>
                        <ListItemButton dense disableGutters>
                            <NewsItem data={data[0]} />
                        </ListItemButton>

                        <ListItemButton dense disableGutters>
                            <NewsItem data={data[1]} />
                        </ListItemButton>
                    </TabPanel>

                    <TabPanel
                        value="3"
                        sx={{
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        <NewsItem data={data[5]} />
                        <NewsItem data={data[6]} />
                        <NewsItem data={data[7]} />
                        <NewsItem data={data[8]} />

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
                                valueLabelDisplay="auto"
                                step={25}
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
