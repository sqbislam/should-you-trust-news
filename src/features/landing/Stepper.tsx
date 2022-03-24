import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
interface Props {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    steps?: number;
}
export default function DotsMobileStepper(props: Props) {
    const { activeStep, setActiveStep, steps = 3 } = props as any;
    const theme = useTheme();

    const handleNext = () => {
        setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
    };

    return (
        <MobileStepper
            variant="dots"
            steps={steps}
            position="static"
            activeStep={activeStep}
            sx={{ flexGrow: 1, width: "100%", margin: 0, padding: "0.5em 0px" }}
            nextButton={
                <Button
                    size="small"
                    disabled={activeStep === steps - 1}
                    onClick={handleNext}
                >
                    Next
                    {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                </Button>
            }
            backButton={
                <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                >
                    {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                    Back
                </Button>
            }
        />
    );
}
