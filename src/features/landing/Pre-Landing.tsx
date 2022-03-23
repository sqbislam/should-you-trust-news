import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
    Button,
    Divider,
    List,
    ListItemButton,
    Paper,
    Slider,
    Typography,
} from "@mui/material";
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
    const [value, setValue] = React.useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const valuetext = (value: number) => {
        return `${value}%`;
    };

    return (
        <Paper sx={{ padding: ["1em"], width: "90vw", margin: "1em auto" }}>
            <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                            variant="fullWidth"
                            onChange={handleChange}
                            aria-label="news-study-tabs"
                        >
                            <Tab label="Select News Category" value="1" />
                            <Tab label="Select Sub-Category" value="2" />
                            <Tab label="View News" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <List>
                            <ListItemButton>Health</ListItemButton>

                            <ListItemButton>Politics</ListItemButton>
                            <ListItemButton>Sports</ListItemButton>
                        </List>
                    </TabPanel>
                    <TabPanel value="2">
                        <List>
                            <ListItemButton>News1</ListItemButton>

                            <ListItemButton>News2</ListItemButton>
                        </List>
                    </TabPanel>
                    <TabPanel value="3">
                        <Typography style={{ padding: "1em 0px" }}>
                            News details
                        </Typography>
                        <Typography style={{ padding: "1em 0px" }}>
                            News details
                        </Typography>{" "}
                        <Typography style={{ padding: "1em 0px" }}>
                            News details
                        </Typography>{" "}
                        <Typography style={{ padding: "1em 0px" }}>
                            News details
                        </Typography>{" "}
                        <Typography style={{ padding: "1em 0px" }}>
                            News details
                        </Typography>{" "}
                        <Typography style={{ padding: "1em 0px" }}>
                            News details
                        </Typography>
                        <Divider />
                        <Paper sx={{ marginTop: "2em" }}>
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
        </Paper>
    );
};

export default PreLanding;
